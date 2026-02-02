'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

const navItems = [
  { label: 'Overview', path: '/' },
  { label: 'Calls', path: '/calls' },
  { label: 'AI Agent', path: '/agent' },
  { label: 'Flows', path: '/flows' },
  { label: 'Knowledge', path: '/knowledge' },
  { label: 'Numbers', path: '/numbers' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Team', path: '/team' },
  { label: 'Integrations', path: '/integrations' },
  { label: 'Billing', path: '/billing' },
  { label: 'Settings', path: '/settings' },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/60">
      <div className="px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20">
            <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Project Aura
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1 justify-center">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? pathname === '/'
                : pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300 transition-all"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Help */}
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>

          {/* Workspace Selector */}
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
              AC
            </div>
            <span className="text-sm font-medium text-slate-700 hidden lg:block">
              Acme Corp
            </span>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-semibold">
              JD
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
}