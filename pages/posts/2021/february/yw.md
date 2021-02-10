---
title: 'yw'
date: February 8th, 2021
tags:
  - 'Snippets'
  - 'Yarn'
  - 'monorepos'
  - 'Development Tips'
---

Almost a year or more ago I stumbled across this super useful bash function that
makes it incredibly easy to run scripts across a
[Yarn](https://yarnpkg.com/)-based monorepo. Since then I haven't looked back,
and have been slowly converting the rest of my team to adopt the same function
in their local workflows as well!

## Script:

```bash
yw() {
  yarn workspace $(yarn --json workspaces info | jq '.data' -r | jq "[keys][0] []" -r | fzf) $@
}
```

## Requirements:

- `jq`
- `fzf`

Both should be installable via `homebrew`: `brew install fzf jq`

## Installation:

Copy the above script and dump it into your `.bashrc` or `.zshrc`, or whatever
other config script your shell uses!

> Note: This script is only compatible with `yarn` v1.22 or later, I haven't
> tested it on `yarn` v2 yet

<Spacer />

---

<Spacer />
