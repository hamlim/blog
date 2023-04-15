'use client'
import { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { themeCookie, themes } from './themes'

let options = themes.map((theme) => ({
  value: theme,
  name: theme,
  key: theme,
}))

export default function ThemeSelect({ initialTheme }) {
  let [selectedOption, setOption] = useState(
    options.find((opt) => opt.name === initialTheme),
  )

  useEffect(() => {
    let themeCookieTuple = document.cookie
      .split('; ')
      .filter((cookieTuple) => cookieTuple.includes(themeCookie))
    // If the cookie doesn't exist, set it and exit
    if (themeCookieTuple.length === 0) {
      document.cookie = `${themeCookie}=${selectedOption.value}`
      return
    }
    let cookieValue = themeCookieTuple[0].split('=')[1]
    if (cookieValue !== selectedOption.value) {
      document.cookie = `${themeCookie}=${selectedOption.value}`
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.location.reload()
        })
      })
    }
  }, [selectedOption])

  return (
    <Dropdown
      label="Select a theme:"
      options={options}
      selectedOption={selectedOption}
      onChange={(e) => {
        setOption(options.find((opt) => opt.name === e.target.value))
      }}
    />
  )
}
