---
title: 'Snapshot Testing'
date: March 1st, 2019
tags:
  - 'Web Development'
  - 'Testing'
---

The other day I noticed this really succinct and to the point tweet about
snapshot tests from Mark Dalgleish:

<Tweet>
  <div lang="en" dir="ltr">
    Just deleted all component snapshot tests from our React component
    library—in favour of{" "}
    <a href="https://twitter.com/chromaui?ref_src=twsrc%5Etfw">@chromaui</a>{" "}
    screenshot tests.
    <br />
    <br />
    We were snapshotting component markup in isolation, outside of a browser, without
    styles. We weren&#39;t testing the output. We were testing implementation details.
  </p>
  &mdash; Mark Dalgleish (@markdalgleish) <a href="https://twitter.com/markdalgleish/status/1100164862796214272?ref_src=twsrc%5Etfw">
    February 25, 2019
  </div>
</Tweet>

The valuable insight here being the following:

> We were snapshotting component markup in isolation, outside of a browser,
> without styles. We weren't testing the output. We were testing implementation
> details.

When I started working with Jest and snapshot testing I thought it was one of
the coolest things ever. It felt like I was adding meaningful code coverage to
my code, when in reality I was only testing the implementation details of it.

Over time I started to realize that the tests I was adding were only adding more
friction to the work I was doing. Since then I have been slowly removing
snapshot tests from my code whenever I make a change that causes the snapshot
tests to fail.