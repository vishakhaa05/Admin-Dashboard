import React from "react";
import Header from "../Components/common/Header";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import StatCard from "../Components/common/StatCard";
import { motion } from "framer-motion";
import ProductTable from "../Components/Products/ProductTable";
import SalesOverviewChart from "../Components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../Components/overview/CategoryDistributionChart";

const ProductPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-50 min-h-screen">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value="1,234"
            color="#4F46E5"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value="89"
            color="#10B981"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value="23"
            color="#F59E0B"
          />
          <StatCard
            name="Top Revenue"
            icon={DollarSign}
            value="$543,240"
            color="#EF4444"
          />
        </motion.div>

        {/* PRODUCTS TABLE */}
        <ProductTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
