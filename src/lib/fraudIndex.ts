import { loadEnv } from 'vite';

/** Activity during the reporting month. */
export type FraudIndexMonth = {
	ordersBlocked: number;
	/** Roughly converted to USD. */
	blockedOrderValueDollars: number;
};

/** Cumulative network totals as of `asOf`. Not monthly figures. */
export type FraudIndexToDate = {
	asOf: string;
	blockedCustomers: number;
	ordersBlocked: number;
	/** Chargebacks and inquiries ever filed on orders from customers now on blocklists. */
	chargebacksAndDisputesOnBlockedCustomers: number;
};

export type FraudIndexResponse = {
	period: string;
	headline: string | null;
	narrative: string | null;
	/** Null for snapshots published before the index reported monthly figures. */
	month: FraudIndexMonth | null;
	toDate: FraudIndexToDate;
	updatedAt: string;
};

export type FraudIndexFetch =
	| { status: 'ok'; data: FraudIndexResponse }
	| { status: 'empty' }
	| { status: 'unavailable' };

const FETCH_TIMEOUT_MS = 8_000;

function resolveApiUrl(): string | undefined {
	const fileEnv = loadEnv(import.meta.env.MODE || 'development', process.cwd(), '');
	const raw = (
		fileEnv.FRAUD_INDEX_API_URL ||
		fileEnv.FRAUD_INDEX_PUBLIC_URL ||
		import.meta.env.FRAUD_INDEX_API_URL ||
		import.meta.env.FRAUD_INDEX_PUBLIC_URL ||
		process.env.FRAUD_INDEX_API_URL ||
		process.env.FRAUD_INDEX_PUBLIC_URL ||
		''
	).trim();
	if (!raw) return undefined;
	const trimmed = raw.replace(/\/+$/, '');
	return trimmed.endsWith('/fraud-index') ? trimmed : `${trimmed}/fraud-index`;
}

function isFiniteNumber(value: unknown): value is number {
	return typeof value === 'number' && Number.isFinite(value);
}

function asNullableString(value: unknown): string | null {
	if (value === null || value === undefined) return null;
	if (typeof value !== 'string') return null;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : null;
}

function asRecord(value: unknown): Record<string, unknown> | null {
	return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
}

function parseMonth(value: unknown): FraudIndexMonth | null {
	const raw = asRecord(value);
	if (!raw) return null;
	const { ordersBlocked, blockedOrderValueDollars } = raw;
	if (!isFiniteNumber(ordersBlocked) || !isFiniteNumber(blockedOrderValueDollars)) return null;
	return { ordersBlocked, blockedOrderValueDollars };
}

/** Reads `toDate`, or the legacy `stats` block from an API deployed before `toDate` existed. */
function parseToDate(data: Record<string, unknown>, updatedAt: string): FraudIndexToDate | null {
	const toDate = asRecord(data.toDate);
	const legacy = asRecord(data.stats);
	const candidate = toDate
		? {
				asOf: typeof toDate.asOf === 'string' && toDate.asOf.trim() !== '' ? toDate.asOf.trim() : updatedAt,
				blockedCustomers: toDate.blockedCustomers,
				ordersBlocked: toDate.ordersBlocked,
				chargebacksAndDisputesOnBlockedCustomers: toDate.chargebacksAndDisputesOnBlockedCustomers,
			}
		: legacy
			? {
					asOf: updatedAt,
					blockedCustomers: legacy.blockedBadActors,
					ordersBlocked: legacy.ordersBlocked,
					chargebacksAndDisputesOnBlockedCustomers: legacy.disputesRepresented,
				}
			: null;
	if (
		!candidate ||
		!isFiniteNumber(candidate.blockedCustomers) ||
		!isFiniteNumber(candidate.ordersBlocked) ||
		!isFiniteNumber(candidate.chargebacksAndDisputesOnBlockedCustomers)
	) {
		return null;
	}
	return candidate as FraudIndexToDate;
}

function parseFraudIndex(body: unknown): FraudIndexResponse | null {
	const data = asRecord(body);
	if (!data) return null;
	if (typeof data.period !== 'string' || data.period.trim() === '') return null;
	if (typeof data.updatedAt !== 'string' || data.updatedAt.trim() === '') return null;
	const updatedAt = data.updatedAt.trim();

	const toDate = parseToDate(data, updatedAt);
	if (!toDate) return null;

	return {
		period: data.period.trim(),
		headline: asNullableString(data.headline),
		narrative: asNullableString(data.narrative),
		month: parseMonth(data.month),
		toDate,
		updatedAt,
	};
}

/** Fetched at prerender/build time so the HTML contains the numbers. Never call from the browser. */
export async function fetchFraudIndex(): Promise<FraudIndexFetch> {
	const url = resolveApiUrl();
	if (!url) {
		console.warn('[fraud-index] FRAUD_INDEX_API_URL is not set; rendering empty state');
		return { status: 'empty' };
	}

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: { Accept: 'application/json' },
			signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
		});

		if (response.status === 404) {
			return { status: 'empty' };
		}

		if (response.status !== 200) {
			console.warn(`[fraud-index] API returned ${response.status}; rendering unavailable state`);
			return { status: 'unavailable' };
		}

		const parsed = parseFraudIndex(await response.json());
		if (!parsed) {
			console.warn('[fraud-index] API returned an unexpected payload; rendering unavailable state');
			return { status: 'unavailable' };
		}

		return { status: 'ok', data: parsed };
	} catch (error) {
		console.warn('[fraud-index] Fetch failed; rendering unavailable state', error);
		return { status: 'unavailable' };
	}
}

export function formatCount(value: number): string {
	return value.toLocaleString('en-US');
}

export function formatUsd(value: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);
}

export function formatPeriod(period: string): string {
	const match = /^(\d{4})-(\d{2})$/.exec(period);
	if (!match) return period;
	const year = Number(match[1]);
	const month = Number(match[2]);
	if (month < 1 || month > 12) return period;
	return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

export function formatUpdatedAt(updatedAt: string): string {
	const date = new Date(updatedAt);
	if (Number.isNaN(date.getTime())) return updatedAt;
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

export function narrativeParagraphs(narrative: string): string[] {
	return narrative
		.split(/\n\n+/)
		.map((paragraph) => paragraph.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
		.filter(Boolean);
}
