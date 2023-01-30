A few years back now I wrote [a short blog post](/2021/february/yw) sharing a
shell function that made it easier to navigate Yarn v1 monorepos. I realized
today that I haven't updated that post with a new function that works for Yarn
berry (v2 and v3) releases.

Similar to that original snippet (which I've since re-named to `ywOld`) you'll
need to install `fzf` and `jq` via homebrew (`brew`), but once you've done that
you should be able to quickly run any script from any package without typing out
the whole workspace name or without changing into the directory for the
workspace.

```sh
yw() {
  yarn workspace $(yarn --json workspaces list | jq '.' -r | jq ".name" -r | fzf) $@
}
```

To "install" this, you can copy and paste the above snippet into your `.bashrc`
or `.zshrc` file (or whatever config file you use for your shell), and then
`source` that config (e.g. `source ~/.zshrc`) in your terminal and you should be
able to use it!

Example usage:

```sh
# To run the `test` script on a workspace of your choice:
yw test
```

I may eventually package this up into a helpful package that you can install
directly in your monorepo, akin to one of my older projects
[Zaps](https://github.com/hamlim/projects/blob/master/packages/zaps/README.md)
🤔.

<Spacer />

---

<Spacer />
