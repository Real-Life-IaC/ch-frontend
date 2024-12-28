'use client';

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {CartIcon, PixIcon, GitHubIcon} from '@/components/icons';

export function OrderButton() {
  return (
    <Button
      asChild
      className="flex h-20 w-full items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-lg text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-xl lg:text-2xl"
    >
      <Link to="/todo" className="block flex items-center justify-center space-x-2 px-4 py-2">
        {/* Shopping Cart Icon */}
        <CartIcon
          className="mr-2 h-12 w-12"
          style={{ width: '48px', height: '48px' }}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
        {/* Button Text */}
        <span>
          <b>Order the Paperback!</b>
        </span>
      </Link>
    </Button>
  );
}

export function SponsorButton() {
  return (
    <Button
      asChild
      className="flex h-20 w-full items-center  justify-center rounded-2xl bg-[#343A40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#4a5056] dark:bg-white dark:text-black dark:hover:bg-[#D0D0D0] md:text-2xl"    >
      <Link to="https://github.com/sponsors/Real-Life-IaC/" target="_blank" className="block flex items-center justify-center space-x-2 px-4 py-2">
        <GitHubIcon
          fill="currentColor"
          style={{ width: '48px', height: '48px' }}
          className="mr-2 text-white dark:text-black"
        />
        {/* Button Text */}
        <span>
          <b>Become a sponsor</b>
        </span>
      </Link>
    </Button>
  );
}


export function PixButton() {
  return (
    <Button
      asChild
      className="flex h-20 w-full items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
    >
      <Link to="https://nubank.com.br/cobrar/1j8r44/676bee9c-f120-49be-a7ca-840e500a3b59" target="_blank" className="block flex items-center justify-center space-x-2 px-4 py-2">
        <PixIcon
        className="mr-2 text-white"
        style={{ width: '48px', height: '48px' }}
        strokeWidth={0}
        fill="currentColor"
        />
       {/* Button Text */}
        <span>
          <b>Send a PIX</b>
        </span>
      </Link>
    </Button>
  );
}
