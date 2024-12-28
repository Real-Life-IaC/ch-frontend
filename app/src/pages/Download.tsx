import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';

const downloadFile = (url: string): void => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.download = 'Real-Life Infrastructure as Code With AWS CDK.pdf';
  document.body.appendChild(link);
  console.log('Downloading file:', link);
  link.click();
  document.body.removeChild(link);
};

const Download: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
  const initiateDownload = async () => {
    try {
      const response = await fetch(`https://api.real-life-iac.com/download/${token}`);
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message;
        setError(errorMessage);
        throw new Error(errorMessage);
      }

      downloadFile(data.url);
      setSuccess(true);
    } catch (error) {
      // const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred. Please try again later.';
      // setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
    initiateDownload();
  }, [token]);

  if (isLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
        <div className="text-center">
          <LoadingSpinner className="w-16 h-16 mx-auto" />
          <h1 className="text-3xl font-bold mt-4">Validating your download...</h1>
        </div>
      </main>
    );
  }

  if (success) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">Download Successful!</h1>
          <p className="text-lg mt-4">Your file has been downloaded. Thank you for your interest!</p>
          <div className="mt-8">
            <Button
              asChild
              className="flex h-20 mt-16 mb-16 w-1/2 items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
            >
              <Link to="/">
                Back to Home
              </Link>
            </Button>
            < Footer />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex justify-center min-h-screen w-full max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#DB4F40] mb-8">Error</h1>
        <p className="mb-6 text-xl">{error}</p>
      </div>
      <Button
        asChild
        className="flex h-20 mt-16 mb-16 w-1/2 items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
      >
        <Link to="/">
          Back to Home
        </Link>
      </Button>
      < Footer />
    </main>
  );
};

export default Download;
