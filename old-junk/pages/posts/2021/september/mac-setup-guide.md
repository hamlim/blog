---
title: 'Mac Setup Guide'
date: September 4th, 2021
time: 1:20:15 PM
tags:
  - 'Guides'
draft: false
highlight: false
---

I recently wiped my hard drives and freshly installed macOS Big Sur on my work
laptop, and found it incredibly refreshing in a smaller form of
[starting fresh](../august/start-fresh) with my daily tools.

I had been thinking about this a bit only a couple of weeks earlier so I was
already kind of prepared to set up my laptop from fresh but there were a few
things that I had forgotten about until I needed them. I figured it would be
useful to write up some of the things I did so I can revisit this post in the
future and remember the things that I like to use on my computer.

> Note: This post is still in progress!

## CLI Tooling:

I couldn't think of a better title for this section but I consider this to
encapsulate my CLI tooling that I rely on for being relatively productive when
it comes to working within codebases.

First let's cover some fundamentals:

- Install <ExternalLink href="https://brew.sh/">Homebrew</ExternalLink>
  - We'll use this to install other tools below!
- Install <ExternalLink href="https://ohmyz.sh/">Oh My ZSH</ExternalLink>

### Configuring My Environment:

**Configure Git:**

_TODO: Move these to a dotfiles repo!_

```bash
git config --global user.name "<name>"
git config --global user.email "<email>"
# Make sure to install VSCode Insiders and add vscode to the PATH
git config --global core.editor "code-insiders --wait"
```

<!-- **Configure Shell:**

Create a `~/.aliases` file and add the following:

```bash

``` -->

## CLI Tooling:

```sh
# The basics: node, yarn, pnpm, fzf, jq
brew install node yarn pnpm fzf jq bat exa gh fig fnm
```

## GUI Tooling:

These are all the "visual" tools that I tend to use on my mac, this software
list may change over time but these are the essentials that I use today.

- Install <ExternalLink href="https://www.google.com/chrome/canary/">Chrome
  Canary</ExternalLink>
- Install <ExternalLink href="https://mimestream.com/">Mimestream</ExternalLink>
- Install <ExternalLink href="https://code.visualstudio.com/insiders/">VSCode
  Insiders</ExternalLink>
  - Make sure to setup sync and enable the CLI tools so we can use
    `code-insiders` to open vscode from the terminal
- Install <ExternalLink href="https://www.raycast.com/">Raycast</ExternalLink>
  - Additionally, go into System Preferences > Keyboard > Shortcuts and disable
    the `Cmd + Space` keyboard setting for spotlight and set that to the Raycast
    keyboard shortcut.
- Install&nbsp;<ExternalLink href="https://rectangleapp.com/">Rectangle</ExternalLink>
  - Choose the Spectacle keybinds if you don't want to be confused 😆
- Install
  <ExternalLink href="https://www.dropbox.com/capture">Dropbox</ExternalLink>
- Install <ExternalLink href="https://thebrowser.company/">Dropbox
  Capture</ExternalLink>
- Install <ExternalLink href="">Arc</ExternalLink>
- Install{'
  '}<ExternalLink href="https://www.notion.so/desktop">Notion</ExternalLink>

<Spacer />

---

<Spacer />
