import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">
            Sales Overview
          </h2>
          <p className="text-xs text-slate-400">Monthly revenue trends</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
          +18.4% YoY
        </span>
      </div>

      <div className="h-72 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} />
            <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "0.75rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.08)",
                color: "#0F172A",
              }}
              itemStyle={{ color: "#4F46E5", fontWeight: 600 }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{ fill: "#4F46E5", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 7, fill: "#4F46E5", stroke: "#EEF2FF", strokeWidth: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
