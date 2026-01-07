import { useState, useEffect } from 'react';

const NOTIFICATIONS_KEY = 'dayhaat_match_notifications';

interface MatchNotification {
  matchId: string;
  matchName: string;
  matchTime: string;
  notificationTime: number; // timestamp when notification should fire
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<MatchNotification[]>([]);
  const [permission, setPermission] = useState<NotificationPermission>('default');

  // Load notifications from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(NOTIFICATIONS_KEY);
    if (stored) {
      try {
        setNotifications(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse notifications:', error);
        setNotifications([]);
      }
    }

    // Check notification permission
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  }, [notifications]);

  // Check for notifications that need to fire
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      notifications.forEach((notification) => {
        if (notification.notificationTime <= now) {
          // Fire notification
          if (Notification.permission === 'granted') {
            new Notification('Match Starting Soon!', {
              body: `${notification.matchName} starts in 30 minutes`,
              icon: '/images/logo-dayhaat.png',
              tag: notification.matchId,
            });
          }
          
          // Remove fired notification
          setNotifications((prev) => 
            prev.filter((n) => n.matchId !== notification.matchId)
          );
        }
      });
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [notifications]);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      console.error('This browser does not support notifications');
      return false;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    return result === 'granted';
  };

  const addNotification = (matchId: string, matchName: string, matchTime: string) => {
    const matchDate = new Date(matchTime);
    const notificationTime = matchDate.getTime() - (30 * 60 * 1000); // 30 minutes before

    // Don't add if match is in the past or less than 30 minutes away
    if (notificationTime <= Date.now()) {
      return false;
    }

    setNotifications((prev) => {
      // Remove existing notification for this match
      const filtered = prev.filter((n) => n.matchId !== matchId);
      return [...filtered, { matchId, matchName, matchTime, notificationTime }];
    });

    return true;
  };

  const removeNotification = (matchId: string) => {
    setNotifications((prev) => prev.filter((n) => n.matchId !== matchId));
  };

  const hasNotification = (matchId: string) => {
    return notifications.some((n) => n.matchId === matchId);
  };

  return {
    notifications,
    permission,
    requestPermission,
    addNotification,
    removeNotification,
    hasNotification,
  };
}
