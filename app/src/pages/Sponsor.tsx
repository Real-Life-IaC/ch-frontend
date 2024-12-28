import React from 'react';
import { PixButton, OrderButton, SponsorButton } from '@/components/button';
import { SponsorImage} from '@/components/images';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';


const Sponsor: React.FC = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
      <Link to="/">
        <SponsorImage />
      </Link>

      <p className="flex items-center justify-center space-x-4 text-center lg:bg-none lg:text-4xl text-3xl">
        <span>
          <b>Did you enjoy the eBook? Here is how to contribute.</b>
        </span>
      </p>

      <div className="flex mt-16 w-full flex-col items-center justify-center space-y-8 md:flex-col md:space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <OrderButton />
        <SponsorButton />
        <PixButton />
      </div>

      <div className="mt-12 w-full lg:w-5/6">
        <p className="mb-6">I lost my job. That's how I started writing this book in November 2023.</p>

        <p className="mb-6">At that time, I had a grim picture of what would happen to the startup I was working on. Working on a book while unemployed had its pros and cons. On one hand, I had a full working day to write it. It was better than trying to fit it in after a day's work when my mind was already exhausted. However, because I was thinking about the book all the time, I would quickly become tired of it and procrastination became a problem. The anxiety of not having a job also took a toll on my mental health. In my case, I signed a job offer a few days after being laid off, but switching my work visa took much longer than expected. I focused on writing most of it while waiting for permission to work.</p>

        <p className="mb-6">Then I started working, and the book was forgotten for a whole year. The new position was demanding, and I had to learn a lot of new things (and had to use Terraform). Now, one year later, I'm back to writing it. I'm not unemployed again, no. But I did change jobs again. And because I joined a very early stage startup, I was able to use AWS CDK to apply all the patterns and best practices that I had previously written about.</p>

        <p className="mb-6">In hindsight, it was great to take this “time off”; using Terraform for a while and then moving back to CDK highlighted the reasons why I love it. I have also reviewed all the chapters that I previously wrote, corrected any mistakes, discovered that I was wrong about certain things, and enhanced it with new knowledge. In this new job, I was able to implement everything that I describe in my book while creating a real product for a real business. And I'm writing exactly about that: creating infrastructure as code that is battle-tested and that actually works in real-life projects.</p>

        <p className="mb-6">Now... Let's talk about what matters:</p>

        <p className="mb-6">The eBook is available for download free of charge. The content is exactly the same you would find in the paid version.</p>

        <p className="mb-6">If you like my work and want to support it, you're more than welcome to purchase a hardcopy or a digital edition.</p>

        <p className="mb-6">You can also be a patron with a one-off donation in the amount you think the book is worth. But no pressure, you don't need to pay anything.</p>
      </div>
      <Button
        asChild
        className="flex h-20 mt-16 mb-16 w-1/2 items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
      >
        <Link to="/">
          Back to Home
        </Link>
      </Button>
      < Footer />
    </main>
  );
};

export default Sponsor;
