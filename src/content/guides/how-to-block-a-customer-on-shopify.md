---
title: "How to block a customer on Shopify"
description: "How Shopify merchants block customers, from native tools to a durable blocklist that stops repeat abusers across emails and accounts."
pubDate: 2026-08-05
draft: false
---

Shopify makes it easy to cancel an order. Blocking a *customer* so they cannot keep costing you money is harder. This guide covers what you can do natively, where those options fall short, and how to put a lasting block in place with [Blox](https://apps.shopify.com/blocklist).

## Why merchants need to block customers

Stores typically block people for:

- Chargebacks and friendly fraud
- Serial returns and refund abuse
- Discount or promo code abuse
- Harassment, threats, or bad-faith support contact
- Fake accounts and repeat “lost package” claims

If the same person returns under a new email, a one-off cancel does not protect the next order.

## What you can do in Shopify without an app

Native options help for light control, but they are not a full blocklist:

1. **Cancel or refund the order** in Admin so you do not fulfill a bad purchase.
2. **Add a customer tag** (for example `blocked` or `high-risk`) so staff can spot them later.
3. **Leave an internal note** on the customer profile for your team.
4. **Use Shopify’s fraud / risk indicators** on the order as a review signal.

What native tools usually do *not* do well:

- Stop the same person when they check out with a different email or phone
- Share known bad actors across other stores
- Auto-hold or auto-cancel the next order based on a prior ban
- Link address and payment identity to the person you already blocked

Tags and notes only work if the shopper reuses the exact same details. Most repeat abusers do not.

For many merchants, that gap is the whole problem.

## How to block a customer with Blox

Blox is a **customer blocklist** for Shopify. Blox automatically groups every identifier it sees, so email, phone, address, and payment all resolve to one customer profile.

### 1. Install Blox

Open [Blox: Chargeback Blacklist](https://apps.shopify.com/blocklist) and install it on your store. A free plan is available; paid plans include a trial.

### 2. Find the customer

Search any single identifier you already have. One email, phone number, or address is enough to pull up the full profile, including the other accounts that person uses.

### 3. Block them

Block the customer in Blox. The block applies to the whole profile, not just the identifier you happened to search, so a new email does not reset it.

### 4. Choose hold vs cancel for future matches

Configure Blox so high-risk or blocked matches are:

- **Held** for manual review, or
- **Auto-canceled** before fulfillment when your policy allows it

That is how a block becomes protection on the *next* order, not only documentation on the last one.

### 5. Duplicate accounts are handled for you

Abusers rotate emails. Blox links those accounts automatically, so there is nothing to reconcile by hand and “new customer” does not mean “clean slate.”

## Native tools vs a blocklist

| Goal | Shopify native | Blox blocklist |
| --- | --- | --- |
| Stop one bad order | Cancel / refund | Cancel / hold with rules |
| Warn your team later | Tags and notes | Block + network flags |
| Stop new emails / aliases | Weak | Automatic identity linking |
| Learn from other stores | No | Community blocklist |
| Enforce before fulfillment | Manual process | Hold / auto-cancel |

Use native tools for process and documentation. Use a blocklist when you need the ban to stick.

## Related guides

- [How to block repeat chargeback customers with Blox](../how-to-block-repeat-chargeback-customers/)
- [Blocklist vs fraud filter: when to use each](../blocklist-vs-fraud-filter/)
- [Blox vs NoFraud, Signifyd, and Blockify](../../compare/)
- [Blox vs Blockify: blocklist-first vs fraud scoring](../../compare/blox-vs-blockify/)

## Next step

[Install Blox on Shopify](https://apps.shopify.com/blocklist) and block the customer who is already costing you orders, returns, or chargebacks.
