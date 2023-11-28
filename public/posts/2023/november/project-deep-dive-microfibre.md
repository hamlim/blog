I recently started building out a new side project that I am calling _microfibre
🧶_, it was started partially to scratch an itch to replace Twitter/X with
something a bit more personal. Additionally, I wanted to build a quick and easy
way to share short updates with my grandparents.

> Of note - microfibre is more of a personal product rather than a public social
> network, I've built it intentionally to only be used by myself, but that
> doesn't prevent others from creating similar versions of the same product!

## What is microfibre?

microfibre is essentially a bulletin board, it allows me to post short-form (but
not limited in length) text updates<FootnoteRef id="1" />, which then get
displayed on my personal site under the [feed view](/feed).

It's currently built using Cloudflare wrangler to power the API, Cloudflare D1
as the datastore, and a Next.js app as the posting client (as well as this
Next.js app powering my blog for rendering the feed). There's nothing magical
about the project - it's a fairly basic
<Abbr title="Acronym standing for Create Read Update Delete, often used to describe basic REST APIs">CRUD</Abbr>
API.

---

## Footnotes:

<Footnote id="1">Although I plan to support images and videos soon!</Footnote>
