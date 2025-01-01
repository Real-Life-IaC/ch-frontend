import React from 'react';
import { Footer } from '@/components/footer';

const ComingSoon: React.FC = () => {
  return (
    <main className="mx-auto flex justify-center min-h-screen w-full max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Coming Soon!</h1>
          <p className="text-lg mt-4">The paperback version will be available for purchase in a couple of days!</p>
        </div>
        <div className="flex flex-col items-center mt-8">
        < Footer/>
        </div>

      </main>
    );
  };

export default ComingSoon;
