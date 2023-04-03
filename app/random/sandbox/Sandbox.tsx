'use client'
import { Box } from '@ds-pack/daisyui'
import { Component, useState } from 'react'

function run(code) {
  let [last, ...rest] = code.split('\n').reverse()

  let func = new Function(rest.reverse().join('\n') + `return ${last}`)

  return func()
}

class EB extends Component<{ children: any }> {
  static getDerivedStateFromError(err) {
    return {
      ready: false,
    }
  }
  state = {
    ready: true,
  }
  render() {
    if (this.state.ready) {
      return this.props.children
    }
    return null
  }
}

export default function Sandbox() {
  let [code, setCode] = useState('')

  let res
  try {
    res = run(code)
  } catch {}

  return (
    <Box className="grid grid-cols-2 gap-2">
      <textarea
        className="min-h-full min-w-full border-2 border-green-400 border-solid rounded p-2"
        value={code}
        onChange={({ target: { value } }) => setCode(value)}
      ></textarea>
      <Box is="pre">
        <EB>{res}</EB>
      </Box>
    </Box>
  )
}
