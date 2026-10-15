import React from "react";
import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#4F46E5", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#0EA5E9", href: "/products" },
  { name: "Users", icon: User, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#8B5CF6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#64748B", href: "/settings" },
];

const Sidebar = () => {
  const {
    isMobileOpen,
    isCollapsed,
    closeMobileSidebar,
    toggleDesktopCollapse,
  } = useSidebar();
  const location = useLocation();

  const isCurrentActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.toLowerCase().startsWith(href.toLowerCase());
  };

  const navContent = (isMobile = false) => (
    <div className="h-full flex flex-col justify-between p-4">
      <div>
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-6 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-200 shrink-0">
              <Sparkles size={20} />
            </div>
            {(isMobile || !isCollapsed) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="whitespace-nowrap"
              >
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  Nexus<span className="text-indigo-600">Admin</span>
                </span>
                <p className="text-[11px] text-slate-400 font-medium -mt-1">
                  E-Commerce Suite
                </p>
              </motion.div>
            )}
          </div>

          {/* Close on Mobile, Collapse on Desktop */}
          {isMobile ? (
            <button
              onClick={closeMobileSidebar}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          ) : (
            <button
              onClick={toggleDesktopCollapse}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 space-y-1.5">
          {SIDEBAR_ITEMS.map((item) => {
            const active = isCurrentActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={isMobile ? closeMobileSidebar : undefined}
              >
                <motion.div
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "bg-indigo-50 text-indigo-700 font-semibold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      active ? "bg-white shadow-xs" : "bg-transparent"
                    }`}
                  >
                    <item.icon
                      size={20}
                      style={{ color: item.color }}
                      className="shrink-0"
                    />
                  </div>

                  {(isMobile || !isCollapsed) && (
                    <motion.span
                      className="ml-3 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.name}
                    </motion.span>
                  )}

                  {active && (isMobile || !isCollapsed) && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer info pill */}
      {(isMobile || !isCollapsed) && (
        <div className="mt-auto pt-4 border-t border-slate-100">
          <div className="bg-gradient-to-br from-indigo-50/80 to-sky-50/60 border border-indigo-100/80 rounded-xl p-3.5 text-center">
            <p className="text-xs font-semibold text-slate-800">
              Nexus Store v2.4
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              All systems online
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* 1. Desktop Persistent Sidebar */}
      <motion.aside
        className={`hidden lg:flex flex-col shrink-0 h-full bg-white border-r border-slate-200/80 z-30 transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-20" : "w-64"
        }`}
        animate={{ width: isCollapsed ? 80 : 256 }}
      >
        {navContent(false)}
      </motion.aside>

      {/* 2. Mobile / Tablet Drawer Sidebar with Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileSidebar}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-72 max-w-[85vw] h-full bg-white shadow-2xl z-10 flex flex-col"
            >
              {navContent(true)}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
