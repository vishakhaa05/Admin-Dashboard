import React from "react";
import { User, Camera } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Admin Profile"}>
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
        <div className="relative group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            alt="Profile avatar"
            className="rounded-2xl w-20 h-20 object-cover ring-4 ring-indigo-50 shadow-md"
          />
          <div className="absolute inset-0 bg-slate-900/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera size={20} className="text-white" />
          </div>
        </div>

        <div className="text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <h3 className="text-lg font-bold text-slate-800">Sarah Jenkins</h3>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
              Super Admin
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">sarah.jenkins@nexusstore.com</p>
          <p className="text-xs text-slate-400 mt-1">Role: Global Store Manager • Joined Jan 2024</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition duration-200 shadow-sm shadow-indigo-200 text-center">
          Edit Profile Details
        </button>
        <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-2.5 px-5 rounded-xl transition duration-200 text-center">
          Change Avatar
        </button>
      </div>
    </SettingSection>
  );
};

export default Profile;
