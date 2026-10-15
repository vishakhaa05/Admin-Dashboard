import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
  { id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
  { id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
  { id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
  { id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
  { id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
  { id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
  { id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
  { id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Processing":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Shipped":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Pending":
      default:
        return "bg-amber-50 text-amber-700 border-amber-200";
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
            Recent Orders
          </h2>
          <p className="text-xs text-slate-400">
            Customer purchases and fulfillment status
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search order ID or customer..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3.5 top-2.5 text-slate-400" size={17} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200/80">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3.5 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-sm text-slate-400">
                  No orders found matching "{searchTerm}"
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-5 py-4 whitespace-nowrap text-sm font-bold text-slate-800">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-slate-700">
                    {order.customer}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusBadge(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-500">
                    {order.date}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      className="text-indigo-600 hover:text-indigo-800 p-1.5 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="View order details"
                    >
                      <Eye size={17} />
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersTable;
