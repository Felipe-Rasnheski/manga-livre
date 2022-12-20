'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { DialogContent, DialogOverlay, SearchContainer } from './styles'

export function Search() {
  const [doingSearch, setDoingSearch] = useState(false)
  // const test = use(search('one piece'))

  function handleSearch(query: string) {
    if (doingSearch === true) return
    console.log(query)
    setDoingSearch(true)
    setTimeout(() => console.log(), 10000)
    setDoingSearch(false)
  }

  return (
    <SearchContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <span>Search</span>
            <BiSearch size={28} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Close asChild>
            <DialogOverlay />
          </Dialog.Close>
          <DialogContent>
            <div>
              <button>
                <input
                  onChange={(e) => handleSearch(e.currentTarget.value)}
                  autoFocus
                  type="text"
                  placeholder="Search"
                />
                <BiSearch size={28} />
              </button>
            </div>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </SearchContainer>
  )
}
