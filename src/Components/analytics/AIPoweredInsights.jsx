import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign, Sparkles } from "lucide-react";

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "#10B981",
    bgColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    insight:
      "Revenue is up 15% compared to last month, driven primarily by high-converting seasonal email campaigns.",
  },
  {
    icon: Users,
    color: "#0EA5E9",
    bgColor: "bg-sky-50 text-sky-600 border-sky-100",
    insight:
      "Customer retention improved by 8% following the launch of the tier-based VIP loyalty rewards system.",
  },
  {
    icon: ShoppingBag,
    color: "#8B5CF6",
    bgColor: "bg-purple-50 text-purple-600 border-purple-100",
    insight:
      'Product category "Electronics" shows the highest growth trajectory (+34%) based on recent Q3 purchase behavior.',
  },
  {
    icon: DollarSign,
    color: "#F59E0B",
    bgColor: "bg-amber-50 text-amber-600 border-amber-100",
    insight:
      "Dynamic pricing recommendations could potentially expand gross operating profit margins by 5-7%.",
  },
];

const AIPoweredInsights = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800">
              AI-Powered Insights
            </h2>
            <p className="text-xs text-slate-400">Automated intelligence & suggestions</p>
          </div>
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
          Live Analysis
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {INSIGHTS.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
          >
            <div
              className={`p-2 rounded-xl shrink-0 border mr-3.5 ${item.bgColor}`}
            >
              <item.icon size={20} />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5">
              {item.insight}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIPoweredInsights;
