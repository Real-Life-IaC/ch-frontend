'use client';

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/ui/spinner";
import {downloadServiceApiUrl} from '@/Environment';

export function DownloadsBadge() {
  const [downloads, setDownloads] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(`${downloadServiceApiUrl}/statistics`);
        if (!response.ok) {
          throw new Error("Failed to fetch statistics");
        }
        const data = await response.json();
        setDownloads(data.downloaded);
      } catch (error) {
        console.error("Error fetching download statistics:", error);
        setDownloads(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <Badge className="pointer-events-none">
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <LoadingSpinner className="w-4 h-4" />
          <span> Downloads</span>
        </div>
      ) : (
        `${downloads} Downloads`
      )
      }
    </Badge>

  );
}
