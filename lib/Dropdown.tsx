'use client'

import { Box } from '@ds-pack/daisyui'

export default function Dropdown({ options, selectedOption, onChange, label }) {
  return (
    <Box className="form-control">
      <Box is="label" className="label">
        <Box is="span" className="label-text">
          {label}
        </Box>
      </Box>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={onChange}
        value={selectedOption.value}
      >
        <option disabled defaultChecked>
          {label}
        </option>
        {options.map((opt) => (
          <option key={opt.key} value={opt.value}>
            {opt.value}
          </option>
        ))}
      </select>
    </Box>
  )
}
