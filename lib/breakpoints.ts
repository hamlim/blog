export function small(styles: Record<string, string | number>) {
  return {
    'screen and (min-width: 20em)': styles,
  };
}

export function medium(styles: Record<string, string | number>) {
  return {
    'screen and (min-width: 40em)': styles,
  };
}

export function large(styles: Record<string, string | number>) {
  return {
    'screen and (min-width: 60em)': styles,
  };
}

interface Breakpoints {
  small?: Record<string, string | number>;
  medium?: Record<string, string | number>;
  large?: Record<string, string | number>;
}

export function breakpoints({
  small: smallStyles,
  medium: mediumStyles,
  large: largeStyles,
}: Breakpoints) {
  return {
    '@media': {
      ...(smallStyles ? small(smallStyles) : {}),
      ...(mediumStyles ? medium(mediumStyles) : {}),
      ...(largeStyles ? large(largeStyles) : {}),
    },
  };
}
