'use client'
import ConfirmModal from '@/components/common/modals/ModalConfirm'
import { createContext, useContext, useState, ReactNode } from 'react'

type ModalContextType = {
  openModal: (text: string, onConfirm: () => void, confirmText?: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [confirmText, setConfirmText] = useState('Confirm')
  const [onConfirmFn, setOnConfirmFn] = useState<() => void>(() => {})

  const openModal = (
    text: string,
    onConfirm: () => void,
    confirmText = 'Confirm'
  ) => {
    setText(text)
    setOnConfirmFn(() => onConfirm)
    setConfirmText(confirmText)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <ConfirmModal
          text={text}
          confirmText={confirmText}
          onConfirm={onConfirmFn}
          onCancel={closeModal}
        />
      )}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)!
