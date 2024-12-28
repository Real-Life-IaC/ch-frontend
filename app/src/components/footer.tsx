import { ModeToggle } from '@/components/mode-toggle';
import { DownloadsBadge } from '@/components/badge';

export function Footer() {
  return (
  <div className="flex right-8 mb-12 items-center space-x-8">
        <ModeToggle />
        <DownloadsBadge />
      </div>

  );
}
