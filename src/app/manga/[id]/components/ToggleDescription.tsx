'use client'

import { useCallback, useEffect, useState } from 'react'

export function ToggleDescription() {
  const [overflowStatus, setOverflowStatus] = useState('hidden')

  const isOverflowing = useCallback(() => {
    const container = document.getElementById('contentDescription')

    let isOverflowing: boolean = false

    if (container?.clientHeight !== undefined) {
      isOverflowing = container.scrollHeight > container.clientHeight
    }

    if (!isOverflowing) {
      const content = document.getElementById('contentDescription')
      content?.setAttribute('data-overflow', 'isNotOverflowing')
      setOverflowStatus('')
    }
  }, [])

  function handleShowAll() {
    const content = document.getElementById('contentDescription')
    content?.setAttribute('data-overflow', 'show')
    setOverflowStatus('show')
  }

  function handleHiddenAll() {
    const content = document.getElementById('contentDescription')
    content?.removeAttribute('data-overflow')
    setOverflowStatus('hidden')
  }

  useEffect(() => isOverflowing(), [isOverflowing])

  return (
    <>
      {overflowStatus === 'hidden' && (
        <button onClick={handleShowAll}>Show All</button>
      )}
      {overflowStatus === 'show' && (
        <button onClick={handleHiddenAll}>Hidden</button>
      )}
    </>
  )
}
