'use client';

import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface RefreshIndicatorProps {
  refreshInterval: number; // in milliseconds
  onRefresh?: () => void;
}

export function RefreshIndicator({ refreshInterval, onRefresh }: RefreshIndicatorProps) {
  const [secondsLeft, setSecondsLeft] = useState(Math.floor(refreshInterval / 1000));
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Reset timer when interval changes
    setSecondsLeft(Math.floor(refreshInterval / 1000));

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Trigger refresh
          setIsRefreshing(true);
          setTimeout(() => setIsRefreshing(false), 500);
          
          if (onRefresh) {
            onRefresh();
          }
          
          return Math.floor(refreshInterval / 1000);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [refreshInterval, onRefresh]);

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <RefreshCw 
        className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`}
        aria-hidden="true"
      />
      <span className="tabular-nums">
        Updates in {secondsLeft}s
      </span>
    </div>
  );
}
