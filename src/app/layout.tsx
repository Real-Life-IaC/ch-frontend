import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '../lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Free eBook: Real-life IaC with AWS CDK',
  description:
    "Get your free eBook now and dive into the world of Infrastructure as Code (IaC) with 'Real-Life Infrastructure as Code with AWS CDK'. Perfect for developers and data engineers, this guide offers practical examples, best practices, and expert insights into building and managing cloud infrastructure using AWS CDK. Whether you're looking to streamline deployments, enhance scalability, or secure your cloud environments, this book equips you with the knowledge to leverage IaC principles effectively. Transform your development workflow and achieve more with less code.",
  keywords:
    'CDK, AWS, AWS CDK, Infrastructure as Code, Cloud Development Kit, CloudFormation, DevOps, Cloud, IaC, Terraform, Python, Cloud Best Practices',
  authors: [{ name: 'André Sionek', url: 'https://sionek.com' }],
  creator: 'André Sionek',
  publisher: 'André Sionek',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: 'https://real-life-iac.com',
    title: 'Free eBook: Real-life IaC with AWS CDK',
    description:
      "Get your free eBook now and dive into the world of Infrastructure as Code (IaC) with 'Real-Life Infrastructure as Code with AWS CDK'. Perfect for developers and data engineers, this guide offers practical examples, best practices, and expert insights into building and managing cloud infrastructure using AWS CDK. Whether you're looking to streamline deployments, enhance scalability, or secure your cloud environments, this book equips you with the knowledge to leverage IaC principles effectively. Transform your development workflow and achieve more with less code.",
    images: [{ url: 'https://real-life-iac.com/og-image.png' }],
    siteName: 'Real-life Infrastructure as Code with AWS CDK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free eBook: Real-life IaC with AWS CDK',
    description:
      "Get your free eBook now and dive into the world of Infrastructure as Code (IaC) with 'Real-Life Infrastructure as Code with AWS CDK'. Perfect for developers and data engineers, this guide offers practical examples, best practices, and expert insights into building and managing cloud infrastructure using AWS CDK. Whether you're looking to streamline deployments, enhance scalability, or secure your cloud environments, this book equips you with the knowledge to leverage IaC principles effectively. Transform your development workflow and achieve more with less code.",
    images: [{ url: 'https://real-life-iac.com/og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans antialiased relative bg-background-pattern bg-repeat bg-[length:60px] bg-left ',
          fontSans.variable
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-0"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
