'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { use } from 'react'
import { BiSearch } from 'react-icons/bi'
import { search } from '../../utils/search'
import { DialogContent, DialogOverlay, SearchContainer } from './styles'

// function handleSearch(query: string) { }

export function Search() {
  const searchData = use(search('one piece'))

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
                  // onChange={(e) => handleSearch(e.currentTarget.value)}
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
