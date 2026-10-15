import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus, Check } from "lucide-react";

const INITIAL_ACCOUNTS = [
  {
    id: 1,
    name: "Google",
    handle: "google.nexus/sarah",
    connected: true,
    initial: "G",
    color: "#EA4335",
    bgColor: "bg-red-50 text-red-600",
  },
  {
    id: 2,
    name: "Meta / Facebook",
    handle: "Not connected",
    connected: false,
    initial: "M",
    color: "#1877F2",
    bgColor: "bg-blue-50 text-blue-600",
  },
  {
    id: 3,
    name: "X / Twitter",
    handle: "@sarah_nexus",
    connected: true,
    initial: "X",
    color: "#0F172A",
    bgColor: "bg-slate-100 text-slate-800",
  },
  {
    id: 4,
    name: "GitHub",
    handle: "nexus-admin-bot",
    connected: true,
    initial: "GH",
    color: "#24292F",
    bgColor: "bg-slate-100 text-slate-800",
  },
];

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(INITIAL_ACCOUNTS);

  const toggleConnect = (id) => {
    setConnectedAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id ? { ...acc, connected: !acc.connected } : acc
      )
    );
  };

  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      <div className="divide-y divide-slate-100">
        {connectedAccounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between py-3.5"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${account.bgColor}`}
              >
                {account.initial}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {account.name}
                </p>
                <p className="text-xs text-slate-400">
                  {account.connected ? account.handle : "Disconnected"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => toggleConnect(account.id)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl transition duration-200 ${
                account.connected
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                  : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              {account.connected ? (
                <span className="flex items-center gap-1">
                  <Check size={13} /> Connected
                </span>
              ) : (
                "Connect"
              )}
            </button>
          </div>
        ))}
      </div>

      <button className="mt-4 flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800 py-2 transition duration-200">
        <Plus size={16} className="mr-1.5" /> Link another account
      </button>
    </SettingSection>
  );
};

export default ConnectedAccounts;
