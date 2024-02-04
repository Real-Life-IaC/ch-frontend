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
          <AvatarFallback>CN</AvatarFallback>
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
        href="/sample" // TODO: Add link to the PDF sample
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 284 318"
          fill="currentColor"
          className="mb-2 h-28 w-28 text-black dark:text-white"
        >
          <path d="M133.649 239.369l-87.65-106.168c-.199-.241-.251-.602-.725-1.8 42.183-8.581 65.01-35.935 73.567-77.513 1.423 1.631 2.602 2.891 3.68 4.233l88.89 110.488c2.142 2.649 2.168 4.711 1.032 7.554-7.542 18.864-19.381 34.751-35.677 46.526-11.878 8.583-25.323 14.997-38.31 22.517l-4.806-5.836zm-41.961-10.052l-46.063-56.971c-1.494-1.87-2.48-4.662-2.554-7.061-.289-9.452-.118-18.919-.118-29.432l3.356 3.796 86.47 104.758c1.072 1.302 2.045 3.157 2.073 4.771l.095 33.478-43.258-53.339zm113.006-75L139.117 72.79l5.569-6.809 95.982 110.115c-25.481 37.456-63.568 65.451-101.388 76.075-1.543-3.492.225-4.836 3.33-6.084 28.05-11.272 51.695-28.035 66.832-54.961 3.071-5.463 5.365-11.395 7.605-17.268.545-1.43-.016-3.863-.971-5.181-3.512-4.845-7.403-9.416-11.382-14.361zm-64.2 127.823c-3.826-5.885-1.988-11.249 3.963-13.259 32.102-10.84 64.577-20.782 93.849-38.524.522-.316 1.194-.384 2.434-.763 0 5.126.289 9.901-.189 14.597-.131 1.287-2.379 2.849-3.967 3.425l-92.833 33.421c-.938.337-1.879.668-3.256 1.102zm70.038-51.607c-22.234 13.954-46.658 21.615-71.119 29.263-1.96-3.549.976-3.757 2.999-4.615 10.845-4.599 21.832-8.899 32.491-13.895 17.187-8.056 30.482-21.286 43.904-34.253 4.891-4.725 9.56-9.68 14.454-14.655l12.89 11.66c-10.791 10.494-22.755 18.787-35.619 26.496zm12.786 2.736c-26.421 15.86-55.165 24.705-84.023 33.254l-.78-1.461c1.308-.73 2.541-1.679 3.936-2.154l27.856-9.304c23.022-7.811 43.889-19.654 63.402-34.016.916-.674 1.855-1.317 3.046-2.16l4.712 5.223-18.149 10.618z" />
        </svg>
        <div className="mt-4 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold">
            The content{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Read the table of contents and the first chapter for free. Get a taste of the content
            and the author&apos;s style before you buy it.
          </p>
        </div>
      </a>
    </div>
  );
}
