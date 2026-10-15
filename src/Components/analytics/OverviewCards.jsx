import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";

const overviewData = [
  { name: "Total Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign, color: "#4F46E5" },
  { name: "Active Users", value: "45,678", change: 8.3, icon: Users, color: "#0EA5E9" },
  { name: "Total Orders", value: "9,876", change: -3.2, icon: ShoppingBag, color: "#F59E0B" },
  { name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye, color: "#10B981" },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {overviewData.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs sm:text-sm font-medium text-slate-500">{item.name}</h3>
              <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {item.value}
              </p>
            </div>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <item.icon size={24} style={{ color: item.color }} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1.5">
            <span
              className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full border ${
                item.change >= 0
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-rose-50 text-rose-700 border-rose-200"
              }`}
            >
              {item.change >= 0 ? (
                <ArrowUpRight size={14} className="mr-0.5" />
              ) : (
                <ArrowDownRight size={14} className="mr-0.5" />
              )}
              {Math.abs(item.change)}%
            </span>
            <span className="text-xs text-slate-400">vs last month</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
