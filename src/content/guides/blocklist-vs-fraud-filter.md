---
title: "Blocklist vs fraud filter: when to use each"
description: "Shopify fraud prevention explained: when a customer blocklist beats a fraud filter or risk score, and how merchants combine both."
pubDate: 2026-08-03
draft: false
---

Shopify merchants looking for **fraud prevention** usually land on two tool types:

1. **Fraud filters / risk scoring:** rules and models that score a checkout or order (“how risky is this?”).
2. **Blocklists:** explicit bans on customers you’ve already decided are bad (“never fulfill this person again”).

Both matter. They answer different questions.

## What a fraud filter is good at

Fraud filters and scoring tools shine when you need to evaluate *new* or ambiguous traffic:

- Bot and scripted checkout patterns
- Country / IP / velocity heuristics
- One-off “smells wrong” orders with no prior history on your store

They’re weaker when the same **serial returner** or chargeback abuser returns under a new email. A score can look “fine” on a fresh account even when the *person* is known.

## What a blocklist is good at

A blocklist is **fraud prevention by memory**:

- You (or another merchant on a shared network) already marked the customer
- You want holds or cancels **before fulfillment**
- You’re fighting **refund abuse**, repeat chargebacks, and multi-account hopping

[Blox](https://apps.shopify.com/blocklist) is blocklist-first: block by email, phone, address, or payment; deduplicate accounts; share signals across participating stores. Simple rules, not an opaque AI score as the primary control.

## When to use each

| Situation | Lean blocklist | Lean fraud filter |
| --- | --- | --- |
| Known chargeback / return abuser comes back | Yes | Optional secondary check |
| Brand-new shopper, no prior identity match | Weak alone | Yes |
| Duplicate accounts / email rotation | Yes (identity linking) | Sometimes |
| Bot floods / geo blocking | Supporting | Yes |
| “Cancel high-risk before ship” for known bans | Yes | Sometimes |

**Practical rule:** use filters to *suspect*; use a blocklist to *enforce* decisions you’ve already made, and to inherit network decisions about the same identity.

## Using both without fighting yourself

A healthy stack looks like:

1. Fraud filter / Shopify risk for first-pass review on unknown traffic.
2. Blocklist (Blox) for confirmed abusers and network-known identities.
3. Clear ops policy: what gets auto-canceled vs held vs allowed.

If your only tool is scoring, repeat offenders will keep resetting the game. If your only tool is a private one-store blocklist, they’ll hop stores or emails. Community blocklists close that gap.

## Related reading

- [How to block repeat chargeback customers with Blox](../how-to-block-repeat-chargeback-customers/)
- [Blox vs Blockify: blocklist-first vs fraud scoring](../../compare/blox-vs-blockify/)

## Next step

If your pain is repeat chargebacks and refund abuse (not just bots), start with a blocklist. [Install Blox on Shopify](https://apps.shopify.com/blocklist).
