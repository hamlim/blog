# Personal Site Architecture:

## Codebase:

### File System:

```
app/     # Site code
lib/     # Shared code
styles/  # Compiled styles
ui/      # Components and hooks
public/  # Public assets
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
