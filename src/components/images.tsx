import * as React from 'react';
import Image from 'next/image';

export function MainImage() {
  return (
    <div className="mb-14 mt-10 flex flex-col items-center justify-center md:flex-row">
      <Image
        className="relative w-full rounded-3xl bg-white"
        src="/main-image.png"
        alt="Logo"
        width={300} // This will be the maximum width
        height={100} // This will be the maximum height
        unoptimized={true}
        priority
      />
    </div>
  );
}



export function SponsorImage() {
  return (
    <div className="mb-14 mt-10 flex flex-col items-center justify-center md:flex-row">
      <Image
        className="relative w-full rounded-3xl bg-white"
        src="/sponsor-image.jpg"
        alt="Book"
        width={300} // This will be the maximum width
        height={100} // This will be the maximum height
        unoptimized={true}
        priority
      />
    </div>
  );
}
