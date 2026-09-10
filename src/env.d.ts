/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly FRAUD_INDEX_API_URL?: string;
	readonly FRAUD_INDEX_PUBLIC_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
