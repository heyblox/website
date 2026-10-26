---
title: "How to Block a Customer on Shopify"
description: "Shopify's Fraud Control app can block checkouts by email, IP or address. Here are its limits, and how Blox stops a blocked customer's next order."
pubDate: 2026-08-05
draft: false
faqs:
  - question: "Is there a way to block a customer on Shopify?"
    answer: "Yes. If your store uses Shopify Payments, Shopify's Fraud Control app can block checkouts that match an email address, IP address or address detail you enter. It only matches the exact details in your rules, so a customer who comes back with a new email gets through. A customer blocklist app like Blox blocks the customer instead, by email, phone, address or payment method, and holds or cancels their next order before fulfillment."
  - question: "How do I stop a blocked customer from ordering again under a new email?"
    answer: "Shopify's native rules match the exact email, IP or address you enter, so a new email is not covered. In Blox, customers who use several emails or accounts appear as one profile, and the block applies to the whole profile. Their next order is held for review or cancelled before fulfillment."
---

Yes, you can block a customer on Shopify, with limits. If your store uses Shopify Payments, Shopify's Fraud Control app can block checkouts that match an email address, IP address or address detail you enter, but only those exact details, so a new email gets around it. [Blox](https://apps.shopify.com/blocklist) blocks the customer instead: block them by email, phone, address or payment method, and their next order is held or cancelled before fulfillment.

## Why merchants need to block customers

Stores typically block people for:

- Chargebacks and friendly fraud
- Serial returns and refund abuse
- Discount or promo code abuse
- Harassment, threats, or bad-faith support contact
- Fake accounts and repeat “lost package” claims

If the same person returns under a new email, a one-off cancel does not protect the next order.

## Can you block a customer on Shopify?

Shopify has no single “block customer” button, but it gives you a few native options:

1. **Fraud Control checkout rules.** Shopify's Fraud Control app lets you write rules that block a checkout matching an email address, IP address, or address detail such as a ZIP code. The buyer sees an error that the checkout couldn't be completed, and the blocked checkout shows up in abandoned checkouts. Checkout rules are only available to stores using Shopify Payments.
2. **Shopify Flow.** Flow workflows can act on new orders, for example cancelling orders from customers on a block list you maintain.
3. **Cancel or refund the order** in Shopify admin so you do not fulfill a bad purchase. Cancelling does not stop the cardholder's bank from accepting a chargeback.
4. **Customer tags and notes** (for example `blocked` or `high-risk`) so staff can spot the customer later.

Where native options fall short:

- Rules match the exact email, IP or address you typed. A new email, a new address or a different network gets through.
- Checkout rules need Shopify Payments.
- Each store keeps its own list. You cannot see customers other merchants have already blocked.
- Tags and notes rely on staff noticing them before the order ships.

For many merchants, that gap is the whole problem.

## How to block a customer with Blox

Blox is a **customer blocklist** (also called a customer blacklist) for Shopify. You block the customer, not a single email, and Blox holds or cancels their next order before fulfillment.

### 1. Install Blox

Open [Blox: Block Customer Blacklist](https://apps.shopify.com/blocklist) and install it on your store. The Free plan covers stores with under 100 orders a month; paid plans start at $19/month with a 30-day trial. There are no per-transaction fees.

### 2. Find the customer

Search by email, phone number or address. Customers who use several emails or accounts appear as one profile, so you see the other accounts that person uses.

### 3. Block them

Block the customer in Blox. The block applies to the whole profile, not just the identifier you happened to search, so a new email does not reset it.

### 4. Choose hold vs cancel for future orders

Configure Blox so orders from blocked or high-risk customers are:

- **Held** for manual review, or
- **Cancelled** before fulfillment when your policy allows it

Blox stops the order before it ships, which is how a block becomes protection on the *next* order, not only a note on the last one.

## How to block customers automatically

You do not have to find every bad customer yourself:

- **Past chargebacks are imported on install.** Blox identifies the customers behind them. Turn on Chargeback Protection and their new orders are held or cancelled before fulfillment.
- **The community blocklist is on every plan, including Free.** Customers blocked by other Blox stores are flagged for you automatically, so you can review them before you ship.
- **Duplicate accounts are grouped for you.** A customer who switches emails still shows up as the same person, with nothing to merge by hand.

Rules stay simple and visible. There is no AI black box deciding who gets blocked.

## Native tools vs a blocklist

| Goal | Shopify native | Blox blocklist |
| --- | --- | --- |
| Stop one bad order | Cancel / refund | Hold or cancel before fulfillment |
| Block an exact email, IP or address | Fraud Control checkout rules (Shopify Payments) | Block by email, phone, address or payment |
| Stop the same person on a new email | Weak | Duplicate accounts grouped into one profile |
| Learn from other stores | No | Community blocklist, every plan |
| Catch past chargeback customers | Manual | Imported on install |

Use native tools for exact-match rules and documentation. Use a blocklist when you need the block to stick to the person.

## Related guides

- [What is a chargeback blacklist?](../chargeback-blacklist/)
- [How to block repeat chargeback customers with Blox](../how-to-block-repeat-chargeback-customers/)
- [Blocklist vs fraud filter: when to use each](../blocklist-vs-fraud-filter/)
- [FAQ: Shopify fraud, chargebacks, and blocklists](../../faq/)
- [Blox vs NoFraud, Signifyd, and Blockify](../../compare/)
- [Blox vs Blockify: block customers or block visitors?](../../compare/blox-vs-blockify/)

## Next step

[Install Blox on Shopify](https://apps.shopify.com/blocklist) and block the customer who is already costing you orders, returns, or chargebacks.
