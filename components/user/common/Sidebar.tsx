"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  Phone,
  Bot,
  GitBranch,
  BookOpen,
  Hash,
  BarChart3,
  Users,
  Plug,
  CreditCard,
  Settings,
  ChevronDown,
  Bell,
  HelpCircle,
  Search,
  LogOut,
} from "lucide-react";
import useLogout from "@/src/hooks/auth/useLogout";

const navItems = [
  { label: "Overview", path: "/user", icon: LayoutDashboard },
  { label: "Calls", path: "/user/calls", icon: Phone },
  { label: "AI Agent", path: "/user/agent", icon: Bot },
  { label: "Flows", path: "/user/flows", icon: GitBranch },
  { label: "Knowledge", path: "/user/knowledge", icon: BookOpen },
  { label: "Numbers", path: "/user/numbers", icon: Hash },
  { label: "Analytics", path: "/user/analytics", icon: BarChart3 },
  { label: "Team", path: "/user/team", icon: Users },
  { label: "Integrations", path: "/user/integrations", icon: Plug },
  { label: "Billing", path: "/user/billing", icon: CreditCard },
  { label: "Settings", path: "/user/settings", icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { logout, loadingLogout } = useLogout();

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/60 pl-64">
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-300 transition-all"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-red-500 rounded-full"></span>
            </button>

            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* Profile */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-semibold shadow-md">
                JD
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-slate-900">John Doe</p>
                <p className="text-xs text-slate-600">Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-slate-200/60 z-50">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-200/60">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-red-400 to-accent-red-600 flex items-center justify-center shadow-lg shadow-accent-red-500/30">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-slate-800">
                Project Aura
              </h1>
              <p className="text-xs text-slate-500">AI Call Center</p>
            </div>
          </div>

          {/* Workspace Selector */}
          <div className="px-4 py-4 border-b border-slate-200/60">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple-400 to-accent-purple-600 flex items-center justify-center text-white text-sm font-semibold shadow-md">
                AC
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Acme Corp</p>
                <p className="text-xs text-slate-600">Pro Plan</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <div className="space-y-1">
              {navItems?.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-primary-400 to-primary-500 text-white shadow-lg shadow-primary-500/30"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-slate-200/60">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-3 border border-slate-200">
              <p className="text-xs font-semibold text-slate-900 mb-1">
                Upgrade to Business
              </p>
              <p className="text-xs text-slate-600 mb-2">
                Unlock advanced features
              </p>
              <button className="w-full px-3 py-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-medium rounded-md hover:from-primary-600 hover:to-primary-700 transition-all shadow-md">
                Upgrade Now
              </button>
            </div>
            <div className="mt-4">
            <button
              onClick={logout}
              disabled={loadingLogout}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all w-full ${
                loadingLogout
                  ? "opacity-70 cursor-not-allowed"
                  : "cursor-pointer"
              } bg-gradient-to-r from-accent-red-500 to-accent-red-600 text-white hover:from-accent-red-600 hover:to-accent-red-700 shadow-lg shadow-accent-red-500/30 hover:shadow-accent-red-500/40 active:scale-[0.98]`}
            >
              <LogOut className="w-5 h-5" strokeWidth={2.5} />
              <span>{loadingLogout ? "Logging out..." : "Log out"}</span>
            </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar