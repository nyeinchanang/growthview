import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodaySales } from '../../services/api';
import { format } from 'date-fns';

const TodaySales = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['todaySales'],
  //   queryFn: async () => {
  //     const response = await fetchTodaySales();
  //     return response.data;
  //   }
  // });

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-between items-center mb-6 animate-pulse">
  //       <div>
  //         <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
  //         <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
  //       </div>
  //       <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex justify-between items-center mb-6">
  //       <div>
  //         <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
  //           Error loading sales data
  //         </h3>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Today's Sales
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {'Sales Summary'}
        </p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {format(new Date(), 'EEE, dd-MM-yyyy')}
        </span>
      </div>
    </div>
  );
};

export default TodaySales;
