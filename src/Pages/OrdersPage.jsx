import React from "react";
import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { ShoppingBag, Clock, CheckCircle, DollarSign } from "lucide-react";
import DailyOrders from "../Components/Orders/DailyOrders";
import OrderDistribution from "../Components/Orders/OrderDistribution";
import OrdersTable from "../Components/Orders/OrdersTable";

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

const Orders = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-50 min-h-screen">
      <Header title="Orders" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#4F46E5"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color="#10B981"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#0EA5E9"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DailyOrders />
          <OrderDistribution />
        </div>

        {/* ORDERS TABLE */}
        <OrdersTable />
      </main>
    </div>
  );
};

export default Orders;
