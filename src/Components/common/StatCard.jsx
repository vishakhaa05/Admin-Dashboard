import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  // Normalize color in case '#' is omitted (e.g. '6366F1' -> '#6366F1')
  const safeColor = color?.startsWith("#") ? color : `#${color || "4F46E5"}`;

  return (
    <motion.div
      className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300/80 transition-all duration-200"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
            {name}
          </span>
          <p className="mt-1.5 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {value}
          </p>
        </div>

        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
          style={{
            backgroundColor: `${safeColor}15`, // ~8% opacity tint
          }}
        >
          <Icon size={24} style={{ color: safeColor }} />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
