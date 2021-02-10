# Matt Hamlin's Blog

A personal site and blog

## Running Locally

- `yarn`
- `yarn dev`

## Adding a Post

- Create mdx file in the `pages/posts/` directory
- Add route object to `posts.tsx`
- Done

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
```
