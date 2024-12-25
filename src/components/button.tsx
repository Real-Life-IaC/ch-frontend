'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function OrderButton() {
  return (
    <Button
      asChild
      className="flex h-20 w-full items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
    >
      <Link href="/todo" className="block flex items-center justify-center space-x-2 px-4 py-2">
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


export function PurchaseButton() {
  return (
    <Button
      asChild
      className="flex h-20 w-full items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
    >
      <Link href="/todo" target="_blank" className="block flex items-center justify-center space-x-2 px-4 py-2">
        {/* Shopping Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-12 w-12"
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
          <b>Purchase a copy</b>
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
      <Link href="https://github.com/sponsors/Real-Life-IaC/" target="_blank" className="block flex items-center justify-center space-x-2 px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-12 w-12 text-white dark:text-black"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.230 3.297-1.230.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
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
      <Link href="https://nubank.com.br/cobrar/1j8r44/676bee9c-f120-49be-a7ca-840e500a3b59" target="_blank" className="block flex items-center justify-center space-x-2 px-4 py-2">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-12 w-12 text-white"
        strokeWidth={0}
        fill="currentColor"
        viewBox="0 0 222.57 222.57"
        ><path d="M173.57,170.27c-8.73,0-16.95-3.4-23.12-9.57l-33.38-33.38c-2.34-2.35-6.43-2.34-8.77,0l-33.51,33.51c-6.18,6.17-14.39,9.57-23.12,9.57h-6.58l42.28,42.28c13.2,13.2,34.61,13.2,47.82,0l42.4-42.4h-4.02Z"/><path d="M51.67,52.18c8.73,0,16.95,3.4,23.12,9.57l33.51,33.51c2.41,2.41,6.35,2.42,8.77,0l33.38-33.39c6.18-6.17,14.39-9.57,23.12-9.57h4.02l-42.4-42.4c-13.21-13.21-34.62-13.21-47.82,0l-42.28,42.28h6.58Z"/><path d="M212.67,87.38l-25.62-25.62c-.56.23-1.17.37-1.82.37h-11.65c-6.02,0-11.92,2.44-16.17,6.7l-33.38,33.38c-3.12,3.12-7.23,4.69-11.33,4.69s-8.21-1.56-11.33-4.68l-33.51-33.51c-4.26-4.26-10.15-6.7-16.17-6.7h-14.32c-.61,0-1.18-.14-1.72-.35l-25.72,25.73c-13.21,13.21-13.21,34.61,0,47.82l25.72,25.72c.54-.2,1.11-.35,1.72-.35h14.32c6.02,0,11.92-2.44,16.17-6.7l33.51-33.5c6.06-6.05,16.61-6.05,22.66,0l33.38,33.38c4.26,4.26,10.15,6.7,16.17,6.7h11.65c.64,0,1.26.14,1.82.37l25.62-25.62c13.2-13.21,13.2-34.61,0-47.82"/></svg>
        {/* Button Text */}
        <span>
          <b>Send a PIX</b>
        </span>
      </Link>
    </Button>
  );
}
