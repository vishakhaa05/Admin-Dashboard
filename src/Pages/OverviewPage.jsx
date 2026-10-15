import React from "react";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import SalesOverviewChart from "../Components/overview/SalesOverviewChart";
import SalesChannelChart from "../Components/overview/SalesChannelChart";
import CategoryDistributionChart from "../Components/overview/CategoryDistributionChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-50 min-h-screen">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* STATS CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#4F46E5"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="1,234"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.8%"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>

        {/* CHARTS ROW 2 */}
        <SalesChannelChart />
      </main>
    </div>
  );
};

export default OverviewPage;
