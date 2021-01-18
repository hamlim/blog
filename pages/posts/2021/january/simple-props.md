A few recent experiments that I've been thinking on have all been around
exploring CSS variables or custom properties, from those explorations I just
published a new package called
[`simple-props`](https://github.com/ds-pack/simple-props).

<!-- prettier-ignore -->
This package is heavily inspired by <TwitterMention>roginfarrer</TwitterMention>'s [system-props](https://github.com/roginfarrer/system-props) package (both in
function and implementation), but instead of deriving a value from a theme
object it derives CSS variables representing the value provided.

Let's see this in action, first with a pretty minimal setup:

```tsx
import createSimpleProps from 'simple-props'

let simpleProps = createSimpleProps({
  props: {
    color: true,
    bg: {
      scale: 'color',
      property: 'backgroundColor',
    },
  },
})
```

In the above snippet, we've configured `simpleProps` to handle processing of
both a `color` prop and a `bg` prop, for example:

```tsx highlight=6
function Box(props) {
  let styles = simpleProps(props)
  return <div style={styles} {...props} />
}

render(
  <Box color="primary" bg="background">
    Hello World!
  </Box>,
)
```

The `color` and `bg` props in the above example may generate styles that look
like:

```tsx highlight=2-3
<div
  style={{
    color: 'var(--color-primary)',
    backgroundColor: 'var(--color-background)',
  }}
/>
```

> Note: The `simple-props` library doesn't manage creating or defining the above
> CSS variables being used, that part is left up to the implementer

Color and background-color are both fairly basic style props that you could
support, but you could support any prop at all through the config.

## TODO

```tsx
import createSimpleProps from 'simple-props'

// We call `createSimpleProps` with some config
// All of this is optional besides the `props` config
let simpleProps = createSimpleProps({
  // a mapping of prop name to either a boolean or an object
  props: {
    // means that the styles generated will support processing
    // a color prop that outputs: { color: `var(--color-[value])` }
    color: true,
    bg: {
      // the variable scale to reference
      scale: 'color',
      // the CSS property to apply the styles as
      property: 'backgroundColor',
    },
  },
  // An array of supported breakpoint values
  breakpoints: [400, 800, 1600],
  // A mapping of pseudo-prop name to pseudo-selector
  pseudoProps: {
    _hover: '&:hover',
    _focus: '&:focus',
  },
})

// what we get back is a function that we can call with some props:
let styles = simpleProps({
  color: 'primary',
})

function Component() {
  return <div style={styles}>Hello World!</div>
}
```

The above snippet is a fairly basic implementation
