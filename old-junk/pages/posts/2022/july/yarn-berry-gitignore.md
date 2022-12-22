---
title: 'Yarn Berry Gitignore Settings'
date: July 21st, 2022
time: 7:47:36 AM
tags:
  - 'development'
  - 'yarn'
draft: false
highlight: false
---

<!-- prettier-ignore -->
I often google something like `yarn berry gitignore settings` and I usually end
up on the same old stack overflow post that then has an answer that links to a
random place on the Yarn website, where I usually need to jump through another
link or two until I find the [right documentation here](https://next.yarnpkg.com/getting-started/qa#which-files-should-be-gitignored).

So I figured I’d speed up my own time to find this information and publish it
for others to quickly find also!

## Zero Installs:

```bash
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

## Without Zero Installs:

```bash
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

<Spacer />

---

<Spacer />
