import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 rounded-xl p-4 bg-white dark:bg-gray-800">
      <div className="mb-4 lg:mb-0">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Hello Gokul
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Welcome Back!</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
        <div className="relative w-full lg:w-auto">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full lg:w-64 xl:w-72 pl-10 pr-12 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />

          <button className="p-2 bg-white dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>

          <button className="p-2 bg-white dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600">
              <svg className="w-5 h-5" viewBox="0 0 36 36">
                <path fill="#FF9933" d="M0 4h36v8H0z" />
                <path fill="#FFFFFF" d="M0 12h36v8H0z" />
                <path fill="#138808" d="M0 20h36v8H0z" />
                <circle fill="#000080" cx="18" cy="16" r="3" />
                <path
                  fill="#000080"
                  d="M18 13l.5.9.8-.7.3 1 1-.4-.1 1 1-.1-.5.9.8.5-.8.5.5.9-1-.1.1 1-1-.4-.3 1-.8-.7-.5.9-.5-.9-.8.7-.3-1-1 .4.1-1-1 .1.5-.9-.8-.5.8-.5-.5-.9 1 .1-.1-1 1 .4.3-1 .8.7.5.9.5.9.8-.7.3-1-1 .4.1-1-1 .1.5-.9-.8-.5.8-.5-.5-.9 1 .1-.1-1 1 .4.3-1 .8.7z"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Eng (IND)
              </span>
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-1">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-medium text-lg">
                  G
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
