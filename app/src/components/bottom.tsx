import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { GitHubIcon, PandaIcon } from '@/components/icons';

export function BottomSection() {
  return (
    <div className="mb-32 mt-4 grid text-center lg:mb-10 lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:text-left">
      <Link
        to="https://github.com/Real-Life-IaC"
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
      >
      <GitHubIcon
        className="mb-2 h-28 w-28 text-black dark:text-white"
        fill="currentColor"
      />
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
      </Link>

      <Link
        to="https://www.linkedin.com/in/andresionek/"
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
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
      </Link>

      <Link
      to="/sponsor"
      className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
      <PandaIcon
        className="mb-2 h-28 w-28 text-black dark:text-white"
        fill="currentColor"/>
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
      </Link>

    </div>
  );
}
