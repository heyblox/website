---
title: "How to block repeat chargeback customers with Blox"
description: "A practical guide for Shopify merchants to stop repeat chargeback customers, serial returners, and refund abusers with Blox’s community blocklist."
pubDate: 2026-08-03
draft: false
---

Chargebacks and refund abuse drain margin long after an order looks “successful.” If the same shopper, or the same person behind new emails, keeps hitting your store, you need a **fraud prevention** workflow that blocks the *customer*, not just one order.

This guide shows how to use [Blox](https://apps.shopify.com/blocklist) to stop **repeat chargeback** customers and related abuse on Shopify.

## What “repeat chargeback customers” look like

Merchants usually see some mix of:

- A chargeback after fulfillment, then a new order under a slightly different email
- A **serial returner** who cycles products with a high refund rate
- A **refund abuser** pattern: discounts, “item not received,” or friendly fraud signals across accounts

Local rules that only match one email or card miss the person. Blox is built around a **blocklist-first** model: identifiers are grouped into one profile automatically, you block once, and other merchants’ blocks can flag risk on your store.

## Step 1: Install Blox on Shopify

1. Open [Blox: Chargeback Blacklist](https://apps.shopify.com/blocklist) in the Shopify App Store.
2. Install on your store (free plan available; paid plans include a trial).
3. Blox starts grouping your customers into unified profiles right away. There is no matching logic to configure.

## Step 2: Block the customer who charged back

When you confirm a bad actor:

1. Search any identifier you already have: an email, a phone number, an address. Any one of them finds the profile.
2. **Block** the customer. The ban covers every account and identifier linked to that person.
3. Prefer blocking the *person* early rather than waiting for another paid order to cancel after the fact.

Blocking contributes to the community blocklist so other stores can see shared risk when the same identity appears.

## Step 3: Use holds and cancels before fulfillment

For high-risk matches (including customers blocked elsewhere):

- **Hold** the order for review when you want a human check.
- **Auto-cancel** high-risk orders before fulfillment when your policy allows it, so you don’t ship into a known chargeback or abuse pattern.

Exact automation depends on your Blox settings and plan. The goal is the same: stop loss **before** the package leaves, not after the dispute.

## Step 4: Duplicate accounts, handled automatically

Repeat offenders rotate emails. Blox links those accounts into a single identity on its own, so blocking one alias blocks the rest. You do not have to hunt for the duplicates or merge anything by hand.

## Step 5: Review network flags

When another merchant blocks someone who later shops with you, treat that as a signal to review, especially for chargeback history, return abuse, or refund abuse. You decide whether to hold, cancel, or proceed.

## Checklist

- [ ] Blox installed
- [ ] Known chargeback / abuse customers blocked
- [ ] Hold or auto-cancel rules set for high-risk matches
- [ ] Staff know to block on confirmed abuse, not only on gut feel

## When a blocklist beats a fraud score

Scores and filters are useful for “how risky is this checkout?” A **blocklist** answers “have we (or the network) already decided this customer is not welcome?” For repeat chargebacks and serial returners, that second question is usually the one that protects profit.

For a deeper comparison, read [How to block a customer on Shopify](../how-to-block-a-customer-on-shopify/), [Blocklist vs fraud filter: when to use each](../blocklist-vs-fraud-filter/), [FAQ: Shopify fraud, chargebacks, and blocklists](../../faq/), [Blox vs NoFraud, Signifyd, and Blockify](../../compare/), and [Blox vs Blockify](../../compare/blox-vs-blockify/).

## Next step

[Install Blox on Shopify](https://apps.shopify.com/blocklist) and block your first confirmed chargeback or refund abuser today.
