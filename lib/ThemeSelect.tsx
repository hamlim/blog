'use client'
import { usePathname } from 'next/navigation'
import Dropdown from './Dropdown'
import { themes } from './themes'
import { selectTheme } from './ThemeSelect.action'

let options = themes.map((theme) => ({
  value: theme,
  name: theme,
  key: theme,
}))

export default function ThemeSelect({ initialTheme }) {
  let pathname = usePathname()

  return (
    <Dropdown
      label="Select a theme:"
      options={options}
      selectedOption={options.find((opt) => opt.name === initialTheme)}
      onChange={async (e) => {
        await selectTheme({
          option: e.target.value,
          currentPath: pathname,
        })
      }}
    />
  )
}
