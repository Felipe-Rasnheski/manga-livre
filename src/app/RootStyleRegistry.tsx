'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'
import { useStyledComponentsRegistry } from '../lib/styled-components'

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry()

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>
  })

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
