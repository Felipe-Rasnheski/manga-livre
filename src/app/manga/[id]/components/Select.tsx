import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { SelectContainer } from './styles'

const lastSelected: string[] = []

export function Select() {
  const [valueSelected, setValueSelected] = useState('Choose Reason')

  function handleSetSelected(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    itemId: { id: string },
  ) {
    const newValueSelected = e.currentTarget.childNodes[0].nodeValue

    lastSelected.push(itemId.id)

    const selected = document.getElementById(
      lastSelected[lastSelected.length - 2],
    )

    selected?.removeAttribute('data-option')

    const options = document.getElementById('options')
    options?.setAttribute('data-select', 'close')

    if (newValueSelected) {
      setValueSelected(newValueSelected)
      e.currentTarget.setAttribute('data-option', 'active')
    }
  }

  function handleSelect() {
    const reportReason = document.getElementById('reportReason')
    reportReason?.setAttribute('data-report-reason', 'show')
    const valueSelected = document.getElementById('valueSelected')
    valueSelected?.setAttribute('data-report-reason', 'show')

    const options = document.getElementById('options')

    const dataSelect = options?.getAttribute('data-select')

    const iconChevronDown = document.getElementById('ChevronDown')
    const iconChevronUp = document.getElementById('ChevronUp')

    if (dataSelect === 'close') {
      options?.setAttribute('data-select', 'open')

      valueSelected?.setAttribute('data-select', 'open')

      iconChevronDown?.setAttribute('data-icon', '')
      iconChevronUp?.setAttribute('data-icon', 'hidden')
    } else {
      options?.setAttribute('data-select', 'close')

      valueSelected?.setAttribute('data-select', '')

      iconChevronDown?.setAttribute('data-icon', 'hidden')
      iconChevronUp?.setAttribute('data-icon', '')
    }
  }

  return (
    <SelectContainer>
      <span className="reportReason" id="reportReason" data-report-reason="">
        Report Reason
      </span>
      <button className="select" onClick={handleSelect}>
        <span
          className="valueSelected"
          id="valueSelected"
          data-select=""
          data-report-reason=""
        >
          {valueSelected}
        </span>
        <span>
          <BiChevronDown size={26} id="ChevronDown" data-icon="" />
          <BiChevronUp size={26} id="ChevronUp" data-icon="hidden" />
        </span>
      </button>
      <div data-select="close" className="options" id="options">
        <span
          onClick={(e) => handleSetSelected(e, { id: 'option1' })}
          id="option1"
        >
          Duplicate entry
        </span>
        <span
          onClick={(e) => handleSetSelected(e, { id: 'option2' })}
          id="option2"
        >
          Information to correct
        </span>
        <span
          onClick={(e) => handleSetSelected(e, { id: 'option3' })}
          id="option3"
        >
          Other
        </span>
        <span
          onClick={(e) => handleSetSelected(e, { id: 'option4' })}
          id="option4"
        >
          Troll entry
        </span>
      </div>
    </SelectContainer>
  )
}
