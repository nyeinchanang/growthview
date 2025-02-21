import React from "react";
import CustomerSatisfaction from "./components/dashboard/CustomerSatisfaction";
import ProductClass from "./components/dashboard/ProductClass";
import ProfitStats from "./components/dashboard/ProfitStats";
import RecentOrders from "./components/dashboard/RecentOrders";
import SalesOverview from "./components/dashboard/SalesOverview";
import SalesStats from "./components/dashboard/SalesStats";
import SalesTarget from "./components/dashboard/SalesTarget";
import TodaySales from "./components/dashboard/TodaySales";
import WeeklySales from "./components/dashboard/WeeklySales";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 mt-16 lg:mt-0">
        <Header />

        {/* Today's Sales */}
        <div className="mb-8 rounded-xl p-4 lg:p-6 bg-white dark:bg-gray-800">
          <TodaySales />
          <SalesOverview />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          <WeeklySales />
          <SalesStats />
          <ProfitStats />
          <ProductClass />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 mt-6">
          <CustomerSatisfaction />
          <RecentOrders />
          <SalesTarget />
        </div>
      </main>
    </div>
  );
};

export default App;
