import React from "react";
import { motion } from "framer-motion";

const SettingSection = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 mb-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
          <Icon size={20} />
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-800">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default SettingSection;
