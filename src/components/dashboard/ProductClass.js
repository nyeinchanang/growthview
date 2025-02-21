import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const productCategories = [
  { color: "rgb(59, 130, 246)", label: "Electronics", percentage: 25 },
  { color: "rgb(168, 85, 247)", label: "Fashion", percentage: 38 },
  { color: "rgb(234, 179, 8)", label: "Grocery", percentage: 17 },
  { color: "rgb(34, 197, 94)", label: "Other", percentage: 20 },
];

const ProductClass = () => {
  const data = {
    labels: productCategories.map(cat => cat.label),
    datasets: [
      {
        data: productCategories.map(cat => cat.percentage),
        backgroundColor: productCategories.map(cat => cat.color),
        borderColor: productCategories.map(cat => cat.color),
        borderWidth: 1,
        cutout: '60%',
        spacing: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="col-span-1 lg:col-span-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl">
      <h3 className="font-semibold mb-6 text-gray-800 dark:text-white">Product Class</h3>

      <div className="flex flex-col justify-between">
        <div className="flex gap-1 mb-2 md:mb-2">
          {productCategories.map((category) => (
            <div key={category.label} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: category.color }} />
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {category.label}
              </span>
            </div>
          ))}
        </div>

        <div className="relative w-[150px] h-[150px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProductClass;
