import type { Extension } from 'bright'
import { CollapseAnnotation } from './collapse'

export let collapse: Extension = {
  name: 'collapse',
  MultilineAnnotation: ({ children, query, brightProps }) => (
    <CollapseAnnotation
      query={query}
      color={brightProps.colors.editorLineNumber.foreground}
    >
      {children}
    </CollapseAnnotation>
  ),
}
