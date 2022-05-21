# Matt Hamlin's Blog

A personal site and blog

## Setup

- Node >= 16
- pnpm >= 7

## Running Locally

- `pnpm install`
- `pnpm dev`

## Adding a Post

Run `pnpm new-post title="<title>" slug="<slug>"` to bootstrap a new blog post!

## Deploying:

- `pnpm deploy`

## Notes:

### What is `@ui/components`?

This is a small shim / interop package name that aliases to a version of
`@ds-pack/components`. It allows me to swap out packages without needing to go
through and update imports across my blog!

### Layout

- Breakpoints:
  - `20em`
  - `40em`
  - `60em`
  - `80em`

Main content well:

```jsx
maxWidth={['94vw', '80vw', , '70ch']}
minWidth={['94vw', '80vw', , '70ch']}
```

- < 40em - 94vw
- 40em < x < 80em - 80vw
- \> 80em - 70ch

### Frontmatter

```yml
title: 'string'
date: string # format of `MONTH DD[th | st | rd], YEAR`
tags:
  - 'string' # Usually capitalized
highlight: boolean # Optional
draft: boolean # Optional
```

### Notes:

- Can't use a `src` directory since preval imports don't seem to resolve
  correctly if the file is outside of the src directory
