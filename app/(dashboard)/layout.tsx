import Sidebar from '@/components/user/common/Sidebar'
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 pt-16 min-h-screen bg-slate-50 w-full">
        {children}
      </main>
    </div>
  )
}
