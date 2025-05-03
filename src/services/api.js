import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTodaySales = () => api.get('/sales/today');
export const fetchSalesOverview = () => api.get('/sales/overview');
export const fetchWeeklySales = () => api.get('/sales/weekly');
export const fetchSalesStats = () => api.get('/sales/stats');
export const fetchProfitStats = () => api.get('/sales/profit');
export const fetchProductClass = () => api.get('/products/classification');
export const fetchCustomerSatisfaction = () => api.get('/customers/satisfaction');
export const fetchRecentOrders = () => api.get('/orders/recent');
export const fetchSalesTargets = () => api.get('/sales/targets');

export default api;
