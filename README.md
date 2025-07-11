> [!WARNING]
> This is an archive of an older version of my personal site
> Which currently lives here: [https://github.com/hamlim/blog-2025](https://github.com/hamlim/blog-2025)


# Matt Hamlin's Blog

A personal site and blog

## Setup

- Node >= 18
- Bun >= 1

## Running Locally

- `bun install`
- `bun run dev`

## Adding a Post

Run `bun new-post title="<title>" slug="<slug>" tags="<comma separated list>"`
to bootstrap a new blog post!

## Adding a Note

Run `bun new-note title="<title>" slug="<slug>" tags="<comma separated list>"`
to bootstrap a new note!

## Adding a Book

Run
`bun new-book title="<title>" author="<author>" url="<url>" status="<reading|read|to-read>"`!

## Deploying:

- `bun deploy`

## Blog Features:

### Live Code Editor:

Powered by [Sandpack](https://sandpack.codesandbox.io/), a code block can opt
into a live experience via the following comment at the top of the block:

```tsx
// ==live==
```

Then followed by space-separated, equals-separated pairs of key-value props for
the Sandpack component. The code within the fence will be set as the `/App.js`
entry within the editor.

TODO: Figure out multi-file demos, maybe just expose the component to blog
posts/notebook entries...
