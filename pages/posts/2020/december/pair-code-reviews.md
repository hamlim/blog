Code Review has been a vital part of every development teams workflow, not only
is it valuable to ensure the code is validated, both for syntax and business
logic errors but also for enforcing consistent maintainable patterns. Another
often under-discussed value proposition of a code review process is the teaching
and learning opportunities present for both the author of the code and for the
reviewer.

Historically at Wayfair, most code reviews have been asynchronous,
semi-secretive, and usually seen as a slowdown to the code author. Many
developers look at code review as something that they throw into a queue on
slack, sort of like throwing the PR over a wall and waiting for someone on the
other side to review it and throw it back to them.

When code reviews work like this, it's easy to see why developers see the
process as a development slowdown and an arbitrary process.

To help shorten the feedback cycle of code reviews on our team, something we've
trialed a few times recently has been to do something we call "Pair Code
Reviews". This might not be all that new of a concept for many engineering
organizations, but it's relatively new to our team.

We've seen several key benefits of this strategy, but there are some trade-offs
as well, as with any piece of advice your mileage may vary! Before diving into
the benefits and trade-offs let me back up a bit and explain what this workflow
looks like.

Rarely do we follow the exact same process when doing pair code reviews, but
frequently they look like:

When an engineer has a pull request ready for review, they may reach out to
another engineer that they had collaborated with (either through
[[Pair Programming]] or some shared debugging) or had also been knowledgable of
the ticket they were working on to schedule a pair review.

During the call, usually the author will be running the code locally so they can
screen share the visual changes to the reviewer, and then the reviewer will
screen share as they walk through the changes within the pull request.

I've found that doing both of these during a video call helps to do two primary
things:

1. The code reviewer now has a decent understanding of what the change is
   intending to do to the UI
2. The code reviewer and author can have an immediate discussion about the
   changes, collapsing what might be a 24 hour long feedback cycle down to
   seconds

Not only does it help build up an understanding of the scope of the change, but
it also lets both the reviewer and the author to have a conversation about the
change instead of a back and forth dialog interspersed throughout there day.

So, if you happen to be sold on this workflow already, and are now excited to
try this out for every code review your team does, I'd caution you that there
are both times where this workflow shouldn't be used, and trade-offs to
acknowledge when using this workflow.

Generally, I'd avoid this for quick and fast pull requests, changes that are
self-explanatory, or changes that would take fewer than 10 minutes to fully
review. Additionally, I'd recommend avoiding this workflow for time-sensitive
PRs, for example production criticals.

One notable trade-off to also be aware of is that when the majority of your code
review feedback is discussed during these pair code reviews, any team member not
present during that call may miss out on some institutional knowledge and
learning opportunities, I have some ideas on how to overcome this trade off but
will save those for a follow up post.

<Spacer />

---

<!-- prettier-ignore -->
I'd love to hear more about how your team handles and manages code reviews,
reach out on [Twitter](https://twitter.com/immatthamlin) or via <ExternalLink href="mailto:matthewjameshamlin@gmail.com?subject=Code Reviews">email</ExternalLink>!
