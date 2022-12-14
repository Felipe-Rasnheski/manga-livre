'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { AiOutlineFlag } from 'react-icons/ai'
import { BiX } from 'react-icons/bi'
import { Select } from '../Select'
import { DialogClose, DialogContent, DialogOverlay } from './styles'

interface DialogReportProps {
  mangaId: string
  imageUrl: string
  title: string
}

export function DialogReport({ mangaId, imageUrl, title }: DialogReportProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <AiOutlineFlag size={28} title="Report" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <BiX size={28} />
          </DialogClose>
          <Dialog.Title className="title">Report</Dialog.Title>
          <Dialog.Description asChild>
            <div className="description">
              <span>Reporting Title</span>
              <div className="mangaReporting">
                <Image src={imageUrl} width={56} height={80} priority alt="" />
                <div>
                  <div>{title}</div>
                  <span>id: {mangaId}</span>
                </div>
              </div>
              <span className="divider" />
              <div className="reason">
                <span>Reason</span>
                <Select />
                <textarea
                  name="additional"
                  id="textarea"
                  className="textarea"
                  cols={30}
                  rows={10}
                  placeholder="Additional Explanation"
                ></textarea>
              </div>
            </div>
          </Dialog.Description>
          <div className="closeAndSend">
            <button className="send">Send Report</button>
            <Dialog.Close asChild>
              <button className="cancel">Cancel</button>
            </Dialog.Close>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
