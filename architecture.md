# Personal Site Architecture:

## Codebase:

### File System:

```
app/     # Site code
lib/     # Shared code
  types.ts  # Shared types across the site
styles/  # Compiled styles
ui/      # Components and hooks
public/  # Public assets
  feed.json # Most core data for my site
  posts/    # blog post content as markdown files (really MDX)
```

### Styles:

Instead of relying on the webpack plugin for Vanilla Extract (which is
coincidentally currently broken when using the app dir in Next), I'm decoupling
the two systems in this architecture. During builds (both for local dev and
production builds), I run a rollup script to compile out `.css.ts` files into
`.js` and `.css` pairs. Both files get moved to a roughly similar directory
structure within `/styles/`.

The `.js` file exports the classnames and also imports the required `.css` file.

Then within files that rely on those styles, I import the classname from the
`.js` file, that looks something like the following:

```
# partial file tree
ui/
  Footnotes.tsx
  Footnotes.css.ts
styles/
  ui/
    Footnotes.js
    Footnotes.css
```

```tsx
// within /ui/Footnotes.tsx
import { classname } from '@styles/ui/Footnotes'
;<div className={className} />
```

## Workflows:

This section will be a bit lofty at first I think, but I hope to make it a
reality and also make it super easy to account for multiple different ways to
contribute to my site.

The general concept is that creating new (dynamic) pages (like blog posts,
notebook entries, and the like), should mostly be driven by automated scripts. I
don't want to do a lot of manual work when creating pages, but also don't want a
lot of hand wavey magic that "just works" when built and deployed.

This way I could effectively move to other frameworks with relative ease if
needed, but I doubt I'd move away from MDX or Next in the near term.

So on these scripts, the basic workflows that I think I'll need to account for
are:

- Creating net new pages
  - New blog post
  - New notebook entry
- Promoting pages into a gallery (top 5/N posts on my blog)

I may have the need for more scripts in the future, but the way I think about it
now is that those scripts should bootstrap some initial files used by the site,
but also still be able to account for times where I may manually make changes to
those files (e.g. `public/feed.json`)

> Note: Considered using something in Go or Rust to write the scripts, but for
> now will opt for JS. I can always come back and refactor it to a different
> language
