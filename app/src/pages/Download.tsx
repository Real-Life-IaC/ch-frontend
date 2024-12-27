import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SponsorImage } from '@/components/images';
import { LoadingSpinner } from '@/components/ui/spinner';

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
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred. Please try again later.';
      setError(errorMessage);
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
            <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Go Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex justify-center min-h-screen w-full max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
      <div className="mt-16 text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-8">Error</h1>
        <p className="mb-6 text-xl">{error}</p>

      </div>
      <div className="w-1/3 mt-8">
        <Link to="/" className="block flex items-center justify-center space-x-2 px-4 py-2">
          <SponsorImage />
        </Link>
      </div>
    </main>
  );
};

export default Download;
