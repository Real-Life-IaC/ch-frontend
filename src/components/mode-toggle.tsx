'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';

// Create a switch component to toggle between light and dark mode
export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="relative flex items-center justify-center gap-2">
      {/* Sun Icon - Show in light mode, hide in dark mode */}
      <SunIcon className="dark:visibility-hidden h-[1.2rem] w-[1.2rem] transition-opacity duration-300 ease-in-out dark:opacity-0" />

      {/* Switch Component */}
      <div className="z-10">
        <Switch
          aria-label="Toggle dark mode"
          onCheckedChange={(checked) => {
            setTheme(checked ? 'dark' : 'light');
          }}
        />
      </div>

      {/* Moon Icon - Hide in light mode, show in dark mode */}
      <MoonIcon className="visibility-hidden dark:visibility-visible h-[1.2rem] w-[1.2rem] opacity-0 transition-opacity duration-300 ease-in-out dark:opacity-100" />
    </div>
  );
}
