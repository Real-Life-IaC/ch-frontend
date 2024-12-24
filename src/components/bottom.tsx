import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function BottomSection() {
  return (
    <div className="mb-16 mt-16 grid text-center lg:mb-2 lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:text-left">
      <a
        href="https://github.com/Real-Life-IaC"
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-2 h-28 w-28 text-black dark:text-white"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.230 3.297-1.230.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <div className="mt-4 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold">
            The code{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore the GitHub public repositories featuring the real-world examples and complete
            code from the book.
          </p>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/andresionek/"
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar className="mb-2 h-28 w-28">
          <AvatarImage src="/andre.png" alt="Andre Sionek" />
          <AvatarFallback>Andre Sionek</AvatarFallback>
        </Avatar>
        <div className="mt-4 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold">
            The author{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            André Sionek is a Lead Software & Data Engineer with expertise in AWS CDK and CI/CD.
            Passionate about developer experience and automation.
          </p>
        </div>
      </a>

      <a
        href="/sponsor"
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <Avatar className="mb-2 h-28 w-28">
          <AvatarImage src="/book.jpg" alt="Book" />
          <AvatarFallback>Book</AvatarFallback>
        </Avatar>
        <div className="mt-4 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold">
            Become a sponsor{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Did you enjoy reading the book? Sponsor the project by donating any amount!
          </p>
        </div>
      </a>
    </div>
  );
}
