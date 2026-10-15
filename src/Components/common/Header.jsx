import React from "react";
import { Menu, Bell, Search, ChevronDown } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

const Header = ({ title }) => {
  const { toggleMobileSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="flex items-center justify-between">
        {/* Left side: Hamburger (mobile only) + Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleMobileSidebar}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 -ml-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Menu size={22} />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {title}
            </h1>
          </div>
        </div>

        {/* Right side: Search, Notification Bell, User Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Quick Search (visible on sm+) */}
          <div className="hidden sm:flex items-center relative">
            <Search className="absolute left-3 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Quick search..."
              className="bg-slate-100/80 hover:bg-slate-100 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-9 pr-4 py-1.5 w-44 md:w-56 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all border border-transparent focus:border-indigo-300"
            />
          </div>

          {/* Notifications button */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
          </button>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-slate-200" />

          {/* User Profile avatar */}
          <div className="flex items-center gap-2.5 pl-1 cursor-pointer group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Admin avatar"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/30 group-hover:ring-indigo-500 transition-all shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-slate-800 leading-tight">
                Sarah Jenkins
              </p>
              <p className="text-xs text-indigo-600 font-medium">Store Admin</p>
            </div>
            <ChevronDown size={14} className="hidden md:block text-slate-400 group-hover:text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
