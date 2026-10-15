import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";

const customerSegmentationData = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">
            Customer Segmentation
          </h2>
          <p className="text-xs text-slate-400">Behavioral attributes across segments</p>
        </div>
      </div>

      <div className="h-72 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={customerSegmentationData}>
            <PolarGrid stroke="#E2E8F0" />
            <PolarAngleAxis dataKey="subject" stroke="#64748B" fontSize={11} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#CBD5E1" fontSize={10} />
            <Radar
              name="Segment A (VIPs)"
              dataKey="A"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.35}
            />
            <Radar
              name="Segment B (Regulars)"
              dataKey="B"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.35}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ paddingTop: "8px", fontSize: "12px", color: "#64748B" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E2E8F0",
                borderRadius: "0.75rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.08)",
                color: "#0F172A",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomerSegmentation;
