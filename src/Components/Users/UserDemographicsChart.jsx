import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const COLORS = ["#4F46E5", "#0EA5E9", "#10B981", "#F59E0B", "#8B5CF6"];

const userDemographicsData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 30 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

const UserDemographicsChart = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 lg:col-span-2"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">
            User Demographics
          </h2>
          <p className="text-xs text-slate-400">Distribution by age brackets</p>
        </div>
      </div>

      <div className="h-72 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userDemographicsData}
              cx="50%"
              cy="48%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {userDemographicsData.map((entry, index) => (
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
              formatter={(value) => [`${value}%`, "Share"]}
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

export default UserDemographicsChart;
