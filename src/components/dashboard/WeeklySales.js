import React from 'react';

const weeklyData = [
  { height: 'h-32', color: 'bg-red-500', day: 'Mon' },
  { height: 'h-40', color: 'bg-blue-500', day: 'Tue' },
  { height: 'h-24', color: 'bg-yellow-500', day: 'Wed' },
  { height: 'h-36', color: 'bg-green-500', day: 'Thu' },
  { height: 'h-28', color: 'bg-purple-500', day: 'Fri' },
  { height: 'h-44', color: 'bg-pink-500', day: 'Sat' }
];

const WeeklySales = () => {
  return (
    <div className="col-span-1 lg:col-span-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl">
      <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">Weekly Sales</h3>
      <div className="h-48 flex items-end space-x-2">
        {weeklyData.map((bar, idx) => (
          <div key={idx} className="flex-1 flex flex-col justify-end">
            <div className={`${bar.height} ${bar.color} rounded-t-lg w-full`}></div>
            <p className="text-xs mt-2 text-center text-gray-600 dark:text-gray-400">
              {bar.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySales;
