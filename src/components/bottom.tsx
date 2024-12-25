import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function BottomSection() {
  return (
    <div className="mb-32 mt-4 grid text-center lg:mb-10 lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:text-left">
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
            Explore the public GitHub repositories featuring the real-world examples and complete
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
        href="/sponsor/index.html"
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 314.12 390.62"
          fill="currentColor"
          className="mb-2 h-28 w-28 text-black dark:text-white"

          >
              <path d="M169.74,211.38h-.02c-2.95,3.1-7.11,5.04-11.72,5.04s-9.05-2.08-12.02-5.37L0,116.15l6.8,196.66,134.99,73.89q16.25,5.27,32.39-.34l130.23-71.96,9.71-198.24-144.39,95.24Z"/>
              <path d="M137.9,73.51c-3.44-3.36-7.77-5.79-12.61-6.92-7.15,1.29-13.67,4.35-19.14,8.68-6.1,4.83-10.88,11.26-13.68,18.67-1.79,4.75-2.78,9.9-2.78,15.28,0,3.39.39,6.69,1.13,9.86,3.51,4.05,8.22,7.04,13.57,8.42,6.8-1.32,13.04-4.23,18.31-8.33,6.93-5.4,12.18-12.86,14.83-21.45,1.24-4.03,1.92-8.31,1.92-12.76,0-3.97-.55-7.8-1.55-11.45ZM119.08,102.87c-5.53,0-10.02-4.49-10.02-10.02s4.49-10.02,10.02-10.02,10.02,4.49,10.02,10.02-4.49,10.02-10.02,10.02Z"/>
              <circle cx="121.53" cy="97.07" r="3.73"/>
              <path d="M222.98,93.94c-2.8-7.41-7.58-13.84-13.68-18.67-5.47-4.33-11.99-7.39-19.14-8.68-4.84,1.13-9.18,3.56-12.61,6.92-1,3.65-1.55,7.49-1.55,11.45,0,4.44.68,8.72,1.92,12.76,2.65,8.6,7.89,16.06,14.83,21.45,5.27,4.1,11.5,7.01,18.31,8.33,5.36-1.37,10.06-4.36,13.57-8.42.74-3.17,1.13-6.47,1.13-9.86,0-5.38-.99-10.53-2.78-15.28ZM196.37,102.87c-5.53,0-10.02-4.49-10.02-10.02s4.49-10.02,10.02-10.02,10.02,4.49,10.02,10.02-4.49,10.02-10.02,10.02Z"/>
              <circle cx="198.82" cy="97.07" r="3.73"/>
              <path d="M172.08,156.81c-5.53,0-10.02-4.49-10.02-10.02,0-3.47,1.77-6.53,4.45-8.33,1.7,1.33,3.83,2.13,6.15,2.13,5.53,0,10.02-4.49,10.02-10.02,0-.19-.02-.38-.03-.57-1.1-2.91-2.68-5.57-4.66-7.9-1.54-.97-3.37-1.54-5.33-1.54-2.31,0-4.43.8-6.12,2.12-1.76,2.89-4.93,4.82-8.55,4.82s-6.56-1.78-8.35-4.49c-1.76-1.53-4.04-2.45-6.55-2.45s-4.93.98-6.7,2.59c-1.15,1.5-2.15,3.12-2.97,4.85-.22.83-.35,1.69-.35,2.58,0,5.53,4.49,10.02,10.02,10.02,2.2,0,4.22-.72,5.86-1.92h0c2.51,1.82,4.15,4.77,4.15,8.11,0,5.53-4.49,10.02-10.02,10.02-3.06,0-5.8-1.38-7.64-3.55h-.74c4.69,7.75,13.19,12.93,22.91,12.93s17.58-4.8,22.36-12.07h-1.08c-1.79,1.66-4.18,2.69-6.81,2.69Z"/>
              <path d="M272.79,114.7c.27-2.47.41-4.98.41-7.53,0-17.66-6.55-33.78-17.35-46.08,8-10.95,12.9-24.3,13.38-38.78-2.85-5.64-6.91-10.56-11.82-14.45,0,0-11.91-7.86-19.7-7.86-14.78,0-26.76,11.98-26.76,26.76,0,3.91,1.66,10.97,1.66,10.97,10.41,12.3,23.35,22.4,38.02,29.48,6.77,10.76,10.69,23.49,10.69,37.14,0,12.11-3.08,23.49-8.5,33.42,6.76-3.45,13.62-6.7,20.53-9.75,0-.6.02-1.21.02-1.81,0-3.88-.2-7.72-.58-11.5Z"/>
              <path d="M158.13,213.79c9.27-12.75,20.29-24.39,32.55-34.99-7.79,1.66-15.87,2.54-24.16,2.54-1.06,0-2.12-.02-3.18-.05-4.09.44-8.23.67-12.44.67-8.57,0-16.92-.94-24.95-2.72,12.07,10.49,22.96,21.98,32.18,34.54Z"/>
              <path d="M101.79,26.76c0-14.78-11.98-26.76-26.76-26.76-7.8,0-19.7,7.86-19.7,7.86-4.91,3.89-8.96,8.81-11.82,14.45.49,14.78,5.59,28.38,13.88,39.45-10,12.09-16.03,27.59-16.03,44.51,0,4.81.49,9.5,1.41,14.04-.1,1.95-.17,3.92-.17,5.89,0,.64.01,1.28.02,1.92,6.5,2.84,12.95,5.86,19.3,9.05-5.53-10-8.69-21.5-8.69-33.74,0-13.66,3.92-26.39,10.69-37.15,13.92-7.02,26.21-16.78,36.19-28.57,0,0,1.66-7.2,1.66-10.97Z"/>
        </svg>
        <div className="mt-4 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold">
            Become a sponsor{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Did you enjoy reading the eBook? Sponsor the project by donating any amount!
          </p>
        </div>
      </a>
    </div>
  );
}
