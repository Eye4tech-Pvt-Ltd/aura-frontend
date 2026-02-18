import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import ReduxProvider from '@/src/provider/redux-provider'
import { ModalProvider } from './context/ModalContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aura',
  description: 'Aura platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ModalProvider>
            <ToastContainer position="top-right" autoClose={3000} />
            {children}
          </ModalProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
