import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const handleDelete = (id) => {
    setFilteredUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const getRoleBadge = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Moderator":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Customer":
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
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
            Registered Users
          </h2>
          <p className="text-xs text-slate-400">
            Platform members, permissions and account status
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search users or role..."
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
                User
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3.5 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-sm text-slate-400">
                  No users found matching "{searchTerm}"
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white text-xs font-bold shadow-xs shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-semibold text-slate-800">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-600">
                    {user.email}
                  </td>

                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full border ${getRoleBadge(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                        user.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-rose-50 text-rose-700 border-rose-200"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 whitespace-nowrap text-right text-sm">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium px-2 py-1 hover:bg-indigo-50 rounded-lg transition-colors mr-2">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-rose-500 hover:text-rose-700 font-medium px-2 py-1 hover:bg-rose-50 rounded-lg transition-colors"
                    >
                      Delete
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

export default UsersTable;
