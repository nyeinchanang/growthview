const CustomerSatisfaction = () => {
  return (
    <div className={`col-span-1 lg:col-span-4 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl`}>
      <h3 className={`font-semibold mb-4 text-gray-800 dark:text-white`}>Customer Satisfaction</h3>
      <div className="relative h-48">
        {/* Line chart representation */}
        <div className="absolute inset-0">
          <div className="flex items-end w-full h-full">
            <div className="relative w-full h-32">
              {/* Blue line */}
              <svg className="absolute inset-0" viewBox="0 0 100 40">
                <path
                  d="M0 35 L20 32 L40 38 L60 30 L80 36 L100 32"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
              </svg>
              {/* Green line */}
              <svg className="absolute inset-0" viewBox="0 0 100 40">
                <path
                  d="M0 30 L20 25 L40 35 L60 20 L80 28 L100 15"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className={`text-sm text-gray-600 dark:text-gray-300`}>Last Month</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className={`text-sm text-gray-600 dark:text-gray-300`}>This Month</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
