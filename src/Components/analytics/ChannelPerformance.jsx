import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const channelData = [
  { name: "Organic Search", value: 4000 },
  { name: "Paid Search", value: 3000 },
  { name: "Direct", value: 2000 },
  { name: "Social Media", value: 2780 },
  { name: "Referral", value: 1890 },
  { name: "Email", value: 2390 },
];

const COLORS = ["#4F46E5", "#0EA5E9", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899"];

const ChannelPerformance = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">
            Channel Performance
          </h2>
          <p className="text-xs text-slate-400">Visitor acquisition by channel</p>
        </div>
      </div>

      <div className="h-72 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={channelData}
              cx="50%"
              cy="48%"
              innerRadius={50}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
            >
              {channelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "0.75rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.08)",
                color: "#0F172A",
              }}
              formatter={(value) => [`${value.toLocaleString()} visits`, "Traffic"]}
            />
            <Legend
              iconType="circle"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: "12px", fontSize: "12px", color: "#64748B" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChannelPerformance;
