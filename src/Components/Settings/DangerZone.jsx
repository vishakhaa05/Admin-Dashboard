import React from "react";
import { motion } from "framer-motion";
import { Trash2, AlertTriangle } from "lucide-react";

const DangerZone = () => {
  return (
    <motion.div
      className="bg-rose-50/70 border border-rose-200/90 rounded-2xl p-5 sm:p-6 mb-6 shadow-xs"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
          <Trash2 size={20} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-rose-900">
            Danger Zone
          </h2>
          <p className="text-xs text-rose-500">Destructive irreversible actions</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white border border-rose-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Delete Store Data & Accounts
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            Permanently erase all products, metrics, customers and database entries.
          </p>
        </div>

        <button
          type="button"
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs transition duration-200 shrink-0 text-center"
        >
          Delete Account
        </button>
      </div>
    </motion.div>
  );
};

export default DangerZone;
