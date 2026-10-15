import React from "react";
import Header from "../Components/common/Header";
import ConnectedAccounts from "../Components/Settings/ConnectedAccounts";
import DangerZone from "../Components/Settings/DangerZone";
import Notifications from "../Components/Settings/Notifications";
import Profile from "../Components/Settings/Profile";
import Security from "../Components/Settings/Security";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-slate-50 min-h-screen">
      <Header title="Settings" />
      <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6 pb-12">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
