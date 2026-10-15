import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/common/Header";
import StatCard from "../Components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../Components/Sales/SalesOverviewChart";
import SalesByCategoryChart from "../Components/Sales/SalesByCategoryChart";
import DailySalesTrend from "../Components/Sales/DailySalesTrend";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-50 min-h-screen">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* SALES STATS */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#4F46E5"
          />
          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#0EA5E9"
          />
        </motion.div>

        {/* SALES OVERVIEW AREA CHART */}
        <SalesOverviewChart />

        {/* SALES BREAKDOWN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
