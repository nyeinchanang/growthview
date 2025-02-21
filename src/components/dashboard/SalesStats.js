import React from 'react';

const SalesStats = () => {
  return (
    <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl">
      <h3 className="font-semibold mb-6 text-gray-800 dark:text-white">Sales</h3>
      <div className="space-y-2">
        <p className="text-3xl font-bold text-gray-800 dark:text-white">446</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Number of sales</p>
        <div className="flex items-center gap-2 mt-4">
          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-sm text-blue-500">+12.5%</span>
        </div>
      </div>
    </div>
  );
};

export default SalesStats;
