'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import styles from '../../../../sass/css/mangaStyles.module.css'

import React, { useState } from 'react'
import { AiOutlineFlag } from 'react-icons/ai'
import { BiChevronDown, BiChevronUp, BiX } from 'react-icons/bi'

interface DialogReportProps {
  mangaId: string
  imageUrl: string
  title: string
}

const lastSelected: string[] = []

export function DialogReport({ mangaId, imageUrl, title }: DialogReportProps) {
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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <AiOutlineFlag size={28} title="Report" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.report}>
          <div className={styles.report__content}>
            <Dialog.Close asChild>
              <div className={styles.report__close}>
                <BiX size={34} />
              </div>
            </Dialog.Close>
            <Dialog.Title className={styles.report__title}>Report</Dialog.Title>
            <Dialog.Description asChild>
              <div className={styles.report__description}>
                <span>Reporting Title</span>
                <div className={styles.report__manga}>
                  <Image
                    src={imageUrl}
                    width={56}
                    height={80}
                    priority
                    alt=""
                  />
                  <div>
                    <div>{title}</div>
                    <span>id: {mangaId}</span>
                  </div>
                </div>
                <span className={styles.report__divider} />
                <div className={styles.report__reason}>
                  <span>Reason</span>
                  <div className={styles.report__select}>
                    <span
                      className={styles.report__select__reason}
                      id="reportReason"
                      data-report-reason=""
                    >
                      Report Reason
                    </span>
                    <button
                      className={styles.report__select__button}
                      onClick={handleSelect}
                    >
                      <span
                        className={styles.report__select__button__valueSelected}
                        id="valueSelected"
                        data-select=""
                        data-report-reason=""
                      >
                        {valueSelected}
                      </span>
                      <span>
                        <BiChevronDown
                          size={26}
                          id="ChevronDown"
                          data-icon=""
                        />
                        <BiChevronUp
                          size={26}
                          id="ChevronUp"
                          data-icon="hidden"
                        />
                      </span>
                    </button>
                    <div
                      data-select="close"
                      className={styles.report__select__options}
                      id="options"
                    >
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
                  </div>
                  <textarea
                    name="additional"
                    id="textarea"
                    cols={30}
                    rows={10}
                    placeholder="Additional Explanation"
                  ></textarea>
                </div>
              </div>
            </Dialog.Description>
            <div className={styles.report__cancelAndSend}>
              <button className={styles.report__send}>Send Report</button>
              <Dialog.Close asChild>
                <button className={styles.report__cancel}>Cancel</button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
