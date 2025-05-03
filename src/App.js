import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { subscribeToPush } from "./utils/pushNotifications";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents refetching on window focus
      staleTime: 5 * 60 * 1000, // 5 minutes (minutes * seconds in a minute * milliseconds in a second)
      // If the same data is requested again, React Query will return the cached data without making a new network request.
      // After 5 minutes, the data becomes stale, and React Query may refetch it in the background when necessary
    },
  },
});

const App = () => {
  const VAPID_PUBLIC_KEY = 'BOMGMLJt5JvVtMOO3qTsKA6DvBo7ifAkeresU5d-zgybtAsvE_cpCaGDbow7aZj6qf8oMhTbvrksjzBTtLM34NE';
  const token = '2|NA54Z9CZ8BmyFtj4OfuKl3Aj7cetBFpip8eIQLhl67788d28';

  useEffect(() => {
    // if ('serviceWorker' in navigator && 'PushManager' in window) {
    //   Notification.requestPermission().then(permission => {
    //     if (permission === 'granted') {
    //       subscribeToPush(VAPID_PUBLIC_KEY, token);
    //     }
    //   });
    // }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
