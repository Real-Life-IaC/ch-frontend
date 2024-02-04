'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function OrderButton() {
  return (
    <Button
      asChild
      className="flex h-20 w-full items-center justify-center rounded-2xl bg-[#E6912B] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#f7a348] md:text-2xl"
    >
      <Link href="/login" className="block flex items-center justify-center space-x-2 px-4 py-2">
        {/* Shopping Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-8 h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-5 5a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
        {/* Button Text */}
        <span>
          <b>Buy it now!</b>
        </span>
      </Link>
    </Button>
  );
}
