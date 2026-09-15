---
title: "What is a chargeback blacklist?"
description: "A chargeback blacklist is a list of customers known for disputes, return fraud, and support abuse. See what it does and when Shopify merchants use one."
pubDate: 2026-09-15
draft: false
faqs:
  - question: "What is a chargeback blacklist?"
    answer: "A chargeback blacklist is a list of customers a merchant will not fulfill again because of chargebacks, friendly fraud, return fraud, customer support abuse, or a pattern of payment disputes. The point is to stop the next order before it ships, not to document the last one."
  - question: "How does a chargeback blacklist work?"
    answer: "You add a confirmed abuser to the list. The next time that person tries to buy, the order is held or cancelled before fulfillment. A useful list still works if they come back under a new email."
  - question: "Does a chargeback blacklist stop friendly fraud and return fraud?"
    answer: "It stops the people you have already seen. Friendly fraud, return fraud, and support abuse are often repeat behaviors: the same shopper causes a loss, then orders again. A chargeback blacklist is built for that loop. It does not score a first-time shopper with no history."
  - question: "Is a chargeback blacklist the same as a fraud filter?"
    answer: "No. A fraud filter scores how risky a checkout looks. A chargeback blacklist enforces a decision you have already made about a person. Filters help on unknown traffic. Blacklists help when the customer is known."
  - question: "How do I add a customer to a chargeback blacklist on Shopify?"
    answer: "Native Shopify tags and notes do not stop a new email. Add the customer to a chargeback blacklist so the next order can be held or cancelled before it ships."
---

A **chargeback blacklist** is a list of shoppers a store has already decided not to sell to again. That usually means chargebacks, friendly fraud, return fraud, or customer support abuse — not a one-off cancelled order. The list’s job is simple: the next time that person tries to buy, the order is held or cancelled **before fulfillment**.

Merchants also call this a customer blocklist. Same idea: remember the person, not just the order.

## What a chargeback blacklist does

A useful chargeback blacklist does four things:

1. **Records a decision.** You are not relying on a staff note or a customer tag that only matches one email.
2. **Stops the next shipment.** Holds and cancels happen before the warehouse, not after the dispute, the return, or the next support spiral.
3. **Follows the person.** Repeat abusers rarely reuse the same email. The list has to survive a new account.
4. **Surfaces known risk.** If another merchant has already banned that person, you can review before you ship.

What it does *not* do: score brand-new traffic, or reimburse a chargeback after the fact. Those are fraud filters and chargeback guarantees. A blacklist is memory.

## Why merchants keep one

Chargebacks are expensive even when you “win.” You lose the product, the shipping, the fees, and the time. You also add another dispute to the ratio your processor and card networks watch.

Return fraud and support abuse are quieter, but they add up the same way: lost margin, burned inventory, and hours your team does not get back.

The painful cases are rarely one-off. Stores typically see:

- Friendly fraud: the buyer received the order, then disputed it as “not recognized” or “item not received”
- Return fraud: keep the product, or cycle new items, while claiming a refund
- Customer support abuse: threats, bad-faith tickets, or a pattern of contact that is not worth the next order
- A chargeback, then a new order under a slightly different email
- Refund and return abuse that later turns into a dispute
- The same person hitting more than one store in a category

A fraud score can look fine on a fresh account. A chargeback blacklist exists for the shopper you, or another merchant, already know.

## Who typically needs a chargeback blacklist

You probably do not need a dedicated list if losses are rare and never the same person twice. You probably do if:

- You have lost more than one dispute to the same shopper
- Return fraud or serial returns keep hitting the same identities
- Support abuse is costing more than the orders are worth
- You sell products that are easy to dispute or easy to return (electronics, supplements, collectibles, high-ticket)
- You already tag “bad” customers and they still get through
- New accounts keep showing the same details as a prior chargeback, return, or abuse case

If the problem is *repeat* people, a score on each checkout is the wrong primary control.

## What a store-only list usually misses

Most stores start with Shopify tags, a spreadsheet, or a cancelled-order note. That is a start. It usually fails in the same places:

| Control | What it catches | What it misses |
| --- | --- | --- |
| Cancel / refund one order | This purchase | The next one |
| Customer tag or note | The same email coming back | A new email, phone, or checkout |
| Private store list | Repeat abuse on *your* store | The same person on a neighboring store |
| Fraud filter / risk score | Suspicious new checkouts | A known abuser who looks “new” |

If the blacklist only matches one identifier, it is a reminder, not protection. Repeat chargeback customers, return fraudsters, and support abusers rotate details on purpose.

## Chargeback blacklist vs fraud filter vs guarantee

These tools answer different questions:

- **Fraud filter:** How risky is this checkout?
- **Chargeback guarantee:** If this approved order is disputed, who pays?
- **Chargeback blacklist:** Have we already decided this *person* is not welcome?

Use a filter on unknown traffic. Use a guarantee if you want insurance on orders a provider approved. Use a chargeback blacklist when the job is stopping a known disputer, return fraudster, or support abuser before fulfillment.

Many stores run more than one. The gap is almost always the blacklist: scoring and insurance do not remember the customer the way a ban does.

For a longer comparison, see [Blocklist vs fraud filter: when to use each](../blocklist-vs-fraud-filter/).

## Chargeback blacklist vs the MATCH list

Two different lists share similar language:

- A **chargeback blacklist** is a merchant tool. You refuse customers who dispute orders, run return fraud, or abuse support.
- The **MATCH list** (Terminated Merchant File) is a processor tool. Card networks flag *merchants* with excessive chargebacks.

You do not add customers to MATCH. Keeping a customer chargeback blacklist is one way stores try to keep their own dispute rates down. It does not replace processor monitoring.

## What to look for

A list only helps if it can enforce the decision you already made. In practice that means:

- The ban still holds when the shopper uses a new email
- The next order can be stopped before it ships
- Staff can explain why someone is on the list
- You are not the only store that has to discover the same person from scratch

That is the job [Blox](https://apps.shopify.com/blocklist) is built for: a chargeback blacklist for Shopify merchants.

## How merchants use a chargeback blacklist

A typical workflow is:

1. Confirm the abuse (a lost chargeback, return fraud, support abuse, or a serial returner you will not serve again).
2. Add that customer to the blacklist.
3. Stop matching orders before they ship.

For the Shopify walkthrough, see [How to block repeat chargeback customers with Blox](../how-to-block-repeat-chargeback-customers/) and [How to block a customer on Shopify](../how-to-block-a-customer-on-shopify/).

## Related reading

- [How to block a customer on Shopify](../how-to-block-a-customer-on-shopify/)
- [How to block repeat chargeback customers with Blox](../how-to-block-repeat-chargeback-customers/)
- [Blocklist vs fraud filter: when to use each](../blocklist-vs-fraud-filter/)
- [FAQ: Shopify fraud, chargebacks, and blocklists](../../faq/)
- [Blox vs NoFraud, Signifyd, and Blockify](../../compare/)

## Next step

If the same people keep charging back, running return fraud, or burning your support team, the control that matches the problem is a list that remembers the person. [Install Blox on Shopify](https://apps.shopify.com/blocklist).
