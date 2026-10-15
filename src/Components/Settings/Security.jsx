import React, { useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(false);

  return (
    <SettingSection icon={Lock} title={"Security & Authentication"}>
      <div className="space-y-1">
        <ToggleSwitch
          label={"Two-Factor Authentication (Requires 2FA code at login)"}
          isOn={twoFactor}
          onToggle={() => setTwoFactor(!twoFactor)}
        />
        <ToggleSwitch
          label={"Auto-lock Session after 15 minutes of inactivity"}
          isOn={sessionTimeout}
          onToggle={() => setSessionTimeout(!sessionTimeout)}
        />
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
          <ShieldCheck size={18} />
          <span>Security Score: Strong (92/100)</span>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2 px-4 rounded-xl transition duration-200 shadow-sm shadow-indigo-200"
        >
          Change Password
        </button>
      </div>
    </SettingSection>
  );
};

export default Security;
