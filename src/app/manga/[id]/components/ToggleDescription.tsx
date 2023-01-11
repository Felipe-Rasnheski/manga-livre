'use client'

import { useState } from 'react'

export function ToggleDescription() {
  const [overflowStatus, setOverflowStatus] = useState('hidden')

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
