import React from 'react';

const orders = [
  {
    name: "John Doe",
    avatar: "JD",
    city: "New York",
    date: "2023-09-05",
    status: "Completed",
    price: "₹ 2,345",
    avatarColor: "bg-blue-100 text-blue-600",
    statusColor: "text-green-500"
  },
  {
    name: "Jane",
    avatar: "J",
    city: "Chennai",
    date: "2023-09-05",
    status: "Pending",
    price: "₹ 1,234",
    avatarColor: "bg-green-100 text-green-600",
    statusColor: "text-yellow-500"
  },
  {
    name: "Robert",
    avatar: "R",
    city: "Chicago",
    date: "2023-09-05",
    status: "Cancelled",
    price: "₹ 3,456",
    avatarColor: "bg-red-100 text-red-600",
    statusColor: "text-red-500"
  }
];

const RecentOrders = () => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-6 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-800 dark:text-white">Recent Orders</h3>
          <button className="text-blue-500 text-sm">See all</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 dark:text-gray-400">
              <th className="text-left py-3 font-medium">Profile</th>
              <th className="text-left py-3 font-medium">City</th>
              <th className="text-left py-3 font-medium">Date</th>
              <th className="text-left py-3 font-medium">Status</th>
              <th className="text-left py-3 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.name} className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-2 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${order.avatarColor} flex items-center justify-center font-medium`}>
                    {order.avatar}
                  </div>
                  <span className="text-gray-800 dark:text-white">{order.name}</span>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{order.city}</span>
                  </div>
                </td>
                <td className="py-2 text-gray-600 dark:text-gray-300">{order.date}</td>
                <td className={`py-2 ${order.statusColor}`}>{order.status}</td>
                <td className="py-2 text-gray-800 dark:text-white font-medium">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
