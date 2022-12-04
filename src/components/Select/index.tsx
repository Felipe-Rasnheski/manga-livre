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

    if (newValueSelected) {
      setValueSelected(newValueSelected)
      e.currentTarget.setAttribute('data-option', 'active')
    }

    if (lastSelected.length > 1) {
      const selected = document.getElementById(
        lastSelected[lastSelected.length - 1],
      )

      selected?.removeAttribute('data-option')
    }
  }

  function handleSelect() {
    const options = document.getElementById('options')

    const dataSelect = options?.getAttribute('data-select')

    const iconChevronDown = document.getElementById('ChevronDown')
    const iconChevronUp = document.getElementById('ChevronUp')

    if (dataSelect === 'close') {
      options?.setAttribute('data-select', 'open')

      iconChevronDown?.setAttribute('data-icon', '')
      iconChevronUp?.setAttribute('data-icon', 'hidden')
    } else {
      options?.setAttribute('data-select', 'close')

      iconChevronDown?.setAttribute('data-icon', 'hidden')
      iconChevronUp?.setAttribute('data-icon', '')
    }
  }

  return (
    <SelectContainer>
      <span data-select="close" className="floatMsg">
        Report Reason
      </span>
      <div className="select" onClick={handleSelect}>
        <span>{valueSelected}</span>
        <span>
          <BiChevronDown size={26} id="ChevronDown" data-icon="" />
          <BiChevronUp size={26} id="ChevronUp" data-icon="hidden" />
        </span>
      </div>
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
