// src/hooks/useBuilds.ts
import { useState, useEffect } from 'react';
import type { VersionsRecord } from '../types/build';
import { fetchBuilds } from '../mock/dashboardData';

export const useBuilds = (activeTab: string) => {
  const [builds, setBuilds] = useState<VersionsRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setBuilds(null);

    const loadData = async () => {
      try {
        const results = await fetchBuilds(activeTab);
        if (isMounted) setBuilds(results);
      } catch (error) {
        console.error("Error fetching builds:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  return { builds, isLoading };
};