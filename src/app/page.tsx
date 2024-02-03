"use client";

import { GetPdfButton } from "@/components/drawer"
import { OrderButton } from "@/components/button"
import { MainImages } from "@/components/images";
import { TopNav } from "@/components/top";
import { BottomSection } from "@/components/bottom";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center  p-8 max-w-7xl mx-auto w-full">

      < TopNav />
      < MainImages />

      <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <OrderButton />
        <GetPdfButton />
      </div>

      < BottomSection />

    </main>
  );
}
