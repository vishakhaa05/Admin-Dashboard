import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
    orderAlerts: true,
  });

  return (
    <SettingSection icon={Bell} title={"Notification Preferences"}>
      <div className="space-y-1">
        <ToggleSwitch
          label={"Push Notifications (Instant in-app alerts)"}
          isOn={notifications.push}
          onToggle={() =>
            setNotifications({ ...notifications, push: !notifications.push })
          }
        />
        <ToggleSwitch
          label={"Email Notifications (Weekly digest & summaries)"}
          isOn={notifications.email}
          onToggle={() =>
            setNotifications({ ...notifications, email: !notifications.email })
          }
        />
        <ToggleSwitch
          label={"SMS Alerts (Critical security and server events)"}
          isOn={notifications.sms}
          onToggle={() =>
            setNotifications({ ...notifications, sms: !notifications.sms })
          }
        />
        <ToggleSwitch
          label={"Order Alerts (Real-time customer purchase notifications)"}
          isOn={notifications.orderAlerts}
          onToggle={() =>
            setNotifications({
              ...notifications,
              orderAlerts: !notifications.orderAlerts,
            })
          }
        />
      </div>
    </SettingSection>
  );
};

export default Notifications;
