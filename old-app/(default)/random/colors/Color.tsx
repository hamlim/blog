'use client';

import { Tapable } from '@recipes/tapable';

export default function ColorSwatch({ color, ...props }) {
  return (
    <Tapable
      onClick={() => {
        // @TODO - add some kind of UX to let the user know that they
        // copied the value!
        if (
          typeof navigator.clipboard !== 'undefined'
          && typeof navigator.clipboard.writeText === 'function'
        ) {
          navigator.clipboard.writeText(color.hex);
        } else {
          let input = document.createElement('input');
          input.value = color.hex;
          input.select();
          document.execCommand('copy');
        }
      }}
      {...props}
    />
  );
}
