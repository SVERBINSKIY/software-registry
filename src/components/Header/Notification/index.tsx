import React from 'react';

import { Calendar, Notification as NotificationSVG } from 'icons';

import './index.scss';

const Notification = () => {
  const notificationCount = 4;

  return (
    <div className="user__notification">
      <div className="user__notification__badge">
        <NotificationSVG isNotification={!!notificationCount} />
        <div className="user__notification__badge__count">{notificationCount}</div>
      </div>
      <div className="user__notification__badge"><Calendar /></div>
    </div>
  );
};

export default Notification;
