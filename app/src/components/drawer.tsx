'use client';

import * as React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { downloadServiceApiUrl } from '@/Environment';
import { DownloadIcon } from '@/components/icons';
import { LoadingSpinner } from '@/components/ui/spinner';

export function GetPdfButton() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex w-full items-center justify-center rounded-2xl bg-[#343A40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#4a5056] dark:bg-white dark:text-black dark:hover:bg-[#D0D0D0] md:text-xl lg:text-2xl">
            <DownloadIcon
              className="mr-8 h-12 w-12"
              fill="none"
              style={{ width: '48px', height: '48px' }}
              stroke="currentColor"
              strokeWidth="2"
              />
              <span>
              <b>Download the eBook!</b>
              </span>
          </Button>
         </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="mb-4 text-2xl">Download Your Exclusive eBook!</DialogTitle>
            <DialogDescription className="mb-4 text-md text-bold">
              Learn Infrastructure as Code with AWS CDK.
            </DialogDescription>
            <DialogDescription className="mb-4">
              Fill in the form to receive a link to download the FREE eBook in your email. The content is exactly the same you&#39;ll find in the paperback version. If you enjoy reading it, please consider <a href='todo' className='text-[#DB4F40] font-bold hover:underline'>buying a copy</a>, or <a href='/sponsor' className='text-[#DB4F40] font-bold hover:underline'>sponsoring</a> the project!
            </DialogDescription>
          </DialogHeader>
          <ProfileForm className="mt-4 mb-4"/>
          <DialogDescription className="mt-4">
            By providing your email you agree to receive updates about the book <b>Real-Life Infrastructure as Code with AWS CDK</b> and other related content produced by me.
          </DialogDescription>
          <DialogDescription className="mt-4">
            Your privacy is important. No spam, no third parties.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="flex w-full items-center justify-center rounded-2xl bg-[#343A40] px-6 py-10 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#4a5056] dark:bg-white dark:text-black dark:hover:bg-[#D0D0D0] md:text-xl lg:text-2xl">
          <DownloadIcon
            className="mr-8 h-12 w-12"
            fill="none"
            style={{ width: '48px', height: '48px' }}
            stroke="currentColor"
            strokeWidth="2"
            />
            <span>
            <b>Download the eBook!</b>
            </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-2 text-xl">Download Your Exclusive eBook!</DrawerTitle>
          <DrawerDescription className="mb-2 text-md text-bold">
              Learn Infrastructure as Code with AWS CDK.
          </DrawerDescription>
          <DrawerDescription className="mb-2">
            Fill in the form to receive a link to download the FREE eBook in your email. The content is exactly the same you&#39;ll find in the paperback version. If you enjoy reading it, please consider <a href='todo' className='text-[#DB4F40] font-bold hover:underline'>buying a copy</a>, or <a href='/sponsor' className='text-[#DB4F40] font-bold hover:underline'>sponsoring</a> the project!
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4 mt-2 mb-2" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <DrawerDescription className="mt-4">
            By providing your email you agree to receive updates about the book <b>Real-Life Infrastructure as Code with AWS CDK</b> and other related content produced by me.
          </DrawerDescription>
          <DrawerDescription className="mt-4">
            Your privacy is important. No spam, no third parties.
          </DrawerDescription>
        </DrawerFooter>

      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  // Email validation function
  const validateEmail = (inputEmail: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputEmail);
  };

  // Validade the name is not empty
  const validateName = (inputName: string) => {
    return inputName.length > 0;
  };

  const handleEmailChange = (event: { target: { value: any } }) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Validate email in real-time
    if (validateEmail(inputEmail)) {
      setValidationError(''); // Clear error message
    } else {
      setValidationError('Please enter a valid email address.');
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setSuccessMessage('');
    setApiError('');
    setValidationError('');

    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!validateName(name)) {
      setValidationError('Please enter your name.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${downloadServiceApiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Check your email now to get your book.');
      } else {
        const errorData = await response.json();
        setApiError(errorData.message || 'An unexpected error occurred.');
      }
    } catch (error) {
      setApiError('Failed to connect to the API. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={cn('grid items-start gap-4', className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          type="name"
          id="name"
          placeholder="Jane Doe"
          value={name}
          onChange={handleNameChange}
          disabled={loading}
      />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Your Best Email Address</Label>
        <Input
          type="email"
          id="email"
          placeholder="jane.doe@example.com"
          value={email}
          onChange={handleEmailChange}
          disabled={loading}
        />
      </div>
      {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
      {apiError && <div style={{ color: 'red' }}>{apiError}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {loading && <div style={{ color: 'grey' }}>I'm sending the eBook to your email.</div>}
      <Button
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#343A40] px-6 py-6 text-xl text-white transition-colors duration-150 ease-in-out hover:bg-[#4a5056] dark:bg-white dark:text-black dark:hover:bg-[#D0D0D0] md:text-xl"
        type="submit"
        disabled={loading}
      >
        {loading ?  (
        <>
          <LoadingSpinner /> {/* Add the spinner */}
          Please wait...
        </>
      ) : 'Send me the eBook!'}
      </Button>
    </form>
  );
}
