import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import {emailServiceApiUrl} from '@/Environment';

const Download: React.FC = () => {
  const { email } = useParams<{ email: string }>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [resubscribed, setResubscribed] = useState<boolean>(false);
  const [resubscribeLoading, setResubscribeLoading] = useState<boolean>(false);

  useEffect(() => {
  const unsubscribe = async () => {
    try {
      const response = await fetch(`${emailServiceApiUrl}/unsubscribe/${email}`, {
        method: 'POST'
      });

      if (!response.ok) {
        const errorMessage = "An error occurred while trying to unsubscribe. Please try again later.";
        setError(errorMessage);
        throw new Error(errorMessage);
      }

      setSuccess(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred. Please try again later.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
    unsubscribe();
  }, [email]);

  const handleResubscribe = async () => {
    setResubscribeLoading(true);
    try {
      const response = await fetch(`${emailServiceApiUrl}/resubscribe/${email}`, {
        method: 'POST',
      });

      if (!response.ok) {
        const errorMessage = 'An error occurred while trying to resubscribe. Please try again later.';
        setError(errorMessage);
        throw new Error(errorMessage);
      }

      setResubscribed(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred. Please try again later.';
      setError(errorMessage);
    } finally {
      setResubscribeLoading(false);
    }
  };


  if (isLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
        <div className="text-center">
          <LoadingSpinner className="w-16 h-16 mx-auto" />
          <h1 className="text-3xl font-bold mt-4">Unsubscribing...</h1>
        </div>
      </main>
    );
  }

  if (success) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">Unsubscribed</h1>
          <p className="text-lg mt-4">If you were subscribed, you have been successfully unsubscribed.</p>
          <p className="text-lg mt-4">If you unsubscribed by mistake, click on the button below to subscribe again.</p>
          <div className="mt-8">
            <Button
              className="flex h-20 mt-16 mb-16 w-1/2 items-center justify-center rounded-2xl bg-[#DB4F40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#ed6f63] md:text-2xl"
              type="button"
              disabled={resubscribed || resubscribeLoading}
              onClick={handleResubscribe}
            >
              {resubscribeLoading
                ? 'Resubscribing...'
                : resubscribed
                ? 'Resubscribed Successfully!'
                : 'Resubscribe'}
            </Button>
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
    </main>
  );
};

export default Download;
