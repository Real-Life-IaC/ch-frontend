'use client';

import { GetPdfButton } from '@/components/drawer';
import { OrderButton } from '@/components/button';
import { MainImage } from '@/components/images';
import { TopNav } from '@/components/top';
import { BottomSection } from '@/components/bottom';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full  max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
      <TopNav />
      <MainImage />

      <div className="flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <OrderButton />
        <GetPdfButton />
      </div>
      <BottomSection />
    </main>
  );
}
