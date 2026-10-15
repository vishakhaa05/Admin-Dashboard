import React from "react";
import Header from "../Components/common/Header";
import OverviewCards from "../Components/analytics/OverviewCards";
import RevenueChart from "../Components/analytics/RevenueChart";
import ChannelPerformance from "../Components/analytics/ChannelPerformance";
import ProductPerformance from "../Components/analytics/ProductPerformance";
import UserRetention from "../Components/analytics/UserRetention";
import CustomerSegmentation from "../Components/analytics/CustomerSegmentation";
import AIPoweredInsights from "../Components/analytics/AIPoweredInsights";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-50 min-h-screen">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* OVERVIEW METRIC CARDS */}
        <OverviewCards />

        {/* REVENUE VS TARGET CHART */}
        <RevenueChart />

        {/* MULTI-GRID METRIC CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        {/* AI INSIGHTS CARD */}
        <div className="pb-6">
          <AIPoweredInsights />
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
