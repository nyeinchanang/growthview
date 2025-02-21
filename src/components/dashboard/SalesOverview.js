import React from "react";

const salesData = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Total Sales",
    value: "₹ 37,446",
    change: "+18% from yesterday",
    bgColor: "bg-red-50",
    changeColor: "text-blue-500",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Total Orders",
    value: "365",
    change: "+27% from yesterday",
    bgColor: "bg-green-50",
    changeColor: "text-blue-500",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "New Customers",
    value: "36",
    change: "+8% from yesterday",
    bgColor: "bg-purple-50",
    changeColor: "text-blue-500",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Total Earnings",
    value: "₹ 16,285",
    change: "+23% from yesterday",
    bgColor: "bg-yellow-50",
    changeColor: "text-blue-500",
  },
];

const SalesOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {salesData.map((item) => (
        <div
          key={item.title}
          className={`${item.bgColor} p-5 rounded-2xl shadow-sm`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg shadow-sm bg-white">{item.icon}</div>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">{item.title}</h4>
            <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
            <p className={`text-sm ${item.changeColor}`}>{item.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesOverview;
