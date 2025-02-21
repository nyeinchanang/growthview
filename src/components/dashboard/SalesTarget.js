import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const SalesTarget = () => {
  const targetPercentage = 82;
  const remainingPercentage = 100 - targetPercentage;

  const data = {
    datasets: [
      {
        data: [targetPercentage, remainingPercentage],
        backgroundColor: [
          "rgb(34, 197, 94)", // green-500
          "rgb(243, 244, 246)", // gray-100
        ],
        borderWidth: 1,
        cutout: "60%",
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

  const gaugeText = {
    id: "centerText",
    afterDatasetsDraw(chart) {
      const { ctx, data } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.textAlign = "center";

      // Percentage
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = document.documentElement.classList.contains("dark")
        ? "white"
        : "#1f2937";
      ctx.fillText(`${data.datasets[0].data[0]}%`, xCenter, yCenter + 5);
      ctx.restore();
    },
  };

  return (
    <div className="col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl">
      <h3 className={`font-semibold mb-6 text-gray-800 dark:text-white`}>
        Sales target
      </h3>

      <div className="relative w-[160px] h-[90px]">
        <Doughnut data={data} options={options} plugins={[gaugeText]} />
      </div>
    </div>
  );
};

export default SalesTarget;
