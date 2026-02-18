'use client'
import Dashboard from '@/components/user/dashboard'
import type { Metadata } from 'next'
import { use, useEffect } from 'react'
import { useSelector } from 'react-redux'

// export const metadata: Metadata = {
//   title: 'Dashboard | Aura',
//   description: 'Dashboard page for Aura',
//   icons: {
//     icon: {
//       url: '/logos/favicon.png',
//       type: 'image/png',
//     },
//     shortcut: { url: '/logos/favicon.png', type: 'image/png' },
//   },
// }

const DashboardPage = () => {
  const store = useSelector((state: any) => state.profile)
  useEffect(() => {
    console.log('store', store)
  }, [store])
  return (
    <>
      <Dashboard />
    </>
  )
}

export default DashboardPage
