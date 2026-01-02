import { useEffect, useRef, useState } from 'react';

interface UseAutoRefreshOptions {
  /**
   * Refresh interval in milliseconds
   * @default 30000 (30 seconds)
   */
  interval?: number;
  
  /**
   * Whether auto-refresh is enabled
   * @default true
   */
  enabled?: boolean;
  
  /**
   * Only refresh when tab is visible
   * @default true
   */
  onlyWhenVisible?: boolean;
}

/**
 * Custom hook for auto-refreshing data at regular intervals
 * Automatically pauses when tab is not visible to save resources
 * 
 * @example
 * ```tsx
 * const { isRefreshing, lastRefresh, forceRefresh } = useAutoRefresh(
 *   async () => {
 *     const data = await fetchLiveData();
 *     setData(data);
 *   },
 *   { interval: 30000 }
 * );
 * ```
 */
export function useAutoRefresh(
  callback: () => void | Promise<void>,
  options: UseAutoRefreshOptions = {}
) {
  const {
    interval = 30000, // 30 seconds default
    enabled = true,
    onlyWhenVisible = true,
  } = options;

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);

  // Update callback ref when it changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Track tab visibility
  useEffect(() => {
    if (!onlyWhenVisible) return;

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onlyWhenVisible]);

  // Execute refresh
  const executeRefresh = async () => {
    if (isRefreshing) return;

    try {
      setIsRefreshing(true);
      await callbackRef.current();
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Auto-refresh error:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Force refresh manually
  const forceRefresh = () => {
    executeRefresh();
  };

  // Setup interval
  useEffect(() => {
    if (!enabled || (onlyWhenVisible && !isVisible)) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Initial refresh
    executeRefresh();

    // Setup interval
    intervalRef.current = setInterval(() => {
      executeRefresh();
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [enabled, interval, isVisible, onlyWhenVisible]);

  return {
    isRefreshing,
    lastRefresh,
    forceRefresh,
    isVisible,
  };
}
