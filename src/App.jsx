import { Routes, Route } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";
import ProductsPage from "./Pages/ProductPage";
import UsersPage from "./Pages/UsersPage";
import SalesPage from "./Pages/SalesPage";
import OrdersPage from "./Pages/OrdersPage";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import Sidebar from "./Components/common/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">
        {/* Subtle decorative background gradient circles */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-violet-100/50 blur-3xl" />
        </div>

        {/* Responsive Sidebar (desktop persistent + mobile drawer) */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-transparent">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/Users" element={<UsersPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/Sales" element={<SalesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/Orders" element={<OrdersPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
