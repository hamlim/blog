'use client';
import { useTheme } from 'next-themes';

export function ThemeWrapper(props) {
  let { theme } = useTheme();

  return <div data-theme={theme} {...props} />;
}
