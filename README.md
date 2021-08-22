# Matt Hamlin's Blog

A personal site and blog

## Running Locally

- `yarn`
- `yarn dev`

## Adding a Post

Run `yarn new-post title="<title>" slug="<slug>"` to bootstrap a new blog post!

## Deploying:

- `yarn deploy`

## Notes:

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
