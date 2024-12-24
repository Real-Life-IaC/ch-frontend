'use client';

import { PixButton, PurchaseButton, SponsorButton } from '@/components/button';
import { SponsorImage} from '@/components/images';
import { TopSponsorNav } from '@/components/top';

export default function SponsorPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
      <TopSponsorNav />
      <SponsorImage />

      <div className="flex w-full flex-col items-center justify-center space-y-8 md:flex-col md:space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <PurchaseButton />
        <SponsorButton />
        <PixButton />
      </div>
      <div className="mt-12 w-full lg:w-5/6">
        <p className="mb-6">I lost my job. That&#39;s how I started writing a book in November 2023.</p>

        <p className="mb-6">At that time, I had a grim picture of what would happen to the startup I was working on. Working on a book while unemployed had its pros and cons. On one hand, I had a full working day to write it. It was better than trying to fit it in after a day&#39;s work when my mind was already exhausted. However, because I was thinking about the book all the time, I would quickly become tired of it and procrastination became a problem. The anxiety of not having a job also took a toll on my mental health. In my case, I signed a job offer a few days after being laid off, but switching my work visa took much longer than expected. I focused on writing most of it while waiting for permission to work.</p>

        <p className="mb-6">Then I started working, and the book was forgotten for a whole year. The new position was demanding, and I had to learn a lot of new things (and had to use Terraform). Now, one year later, I&#39;m back to writing it. I&#39;m not unemployed again, no. But I did change jobs again. And because I joined a very early stage startup, I was able to use AWS CDK to apply all the patterns and best practices that I had previously written about.</p>

        <p className="mb-6">In hindsight, it was great to take this “time off”; using Terraform for a while and then moving back to CDK highlighted the reasons why I love it. I have also reviewed all the chapters that I previously wrote, corrected any mistakes, discovered that I was wrong about certain things, and enhanced it with new knowledge. In this new job, I was able to implement everything that I describe in my book while creating a real product for a real business. And I&#39;m writing exactly about that: creating infrastructure as code that is battle-tested and that actually works in real-life projects.</p>

        <p className="mb-6">Now... Let&#39;s talk about what matters:</p>

        <p className="mb-6">The book is free and a pdf version is available for download, free of charge.</p>

        <p className="mb-6">If you like my work and want to support it, you&#39;re more than welcome to purchase a hardcopy or a digital edition.</p>

        <p className="mb-6">You can also be a patron with a one-off donation in the amount you think the book is worth. But no pressure, you don&#39;t need to pay anything.</p>
      </div>
    </main>
  );
}