import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  { id: 1, name: "Wireless Earbuds Pro", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Minimalist Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Ultra Smart Watch Series 5", category: "Electronics", price: 199.99, stock: 26, sales: 650 },
  { id: 4, name: "Eco-Friendly Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Precision Coffee Maker", category: "Home", price: 79.99, stock: 18, sales: 720 },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setProducts(filtered);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
            Product Inventory
          </h2>
          <p className="text-xs text-slate-400">
            Manage your store catalog and stock levels
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search products or category..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3.5 top-2.5 text-slate-400" size={17} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200/80">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-5 py-3.5 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {products.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-sm text-slate-400">
                  No products found matching "{searchTerm}"
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-800">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm font-semibold text-slate-800">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        product.stock > 50
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : product.stock > 20
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-rose-50 text-rose-700 border-rose-200"
                      }`}
                    >
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-600">
                    {product.sales.toLocaleString()}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      className="text-indigo-600 hover:text-indigo-800 p-1.5 hover:bg-indigo-50 rounded-lg transition-colors mr-1"
                      title="Edit product"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-rose-500 hover:text-rose-700 p-1.5 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete product"
                    >
                      <Trash2 size={16} />
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

export default ProductsTable;
