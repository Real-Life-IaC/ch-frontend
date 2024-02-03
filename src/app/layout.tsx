import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "../lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const metadata: Metadata = {
  title: "Real-life IaC with AWS CDK",
  description: "Dive into the world of Infrastructure as Code (IaC) with 'Real-Life Infrastructure as Code with AWS CDK'. Perfect for developers and data engineers, this guide offers practical examples, best practices, and expert insights into building and managing cloud infrastructure using AWS CDK. Whether you're looking to streamline deployments, enhance scalability, or secure your cloud environments, this book equips you with the knowledge to leverage IaC principles effectively. Transform your development workflow and achieve more with less code.",
  keywords: "CDK, AWS, AWS CDK, Infrastructure as Code, Cloud Development Kit, CloudFormation, DevOps, Cloud, IaC, Terraform, Python, Cloud Best Practices",
  authors: [{name: "André Sionek", url: "https://sionek.com"}],
  creator: "André Sionek",
  publisher: "André Sionek",
  icons: {icon: "/favicon.ico"},
  openGraph: {
    type: "website",
    url: "https://real-life-iac-with-aws-cdk.vercel.app",
    title: "Real-life IaC with AWS CDK",
    description: "Dive into the world of Infrastructure as Code (IaC) with 'Real-Life Infrastructure as Code with AWS CDK'. Perfect for developers and data engineers, this guide offers practical examples, best practices, and expert insights into building and managing cloud infrastructure using AWS CDK. Whether you're looking to streamline deployments, enhance scalability, or secure your cloud environments, this book equips you with the knowledge to leverage IaC principles effectively. Transform your development workflow and achieve more with less code.",
    images: [{url: ""}], // TODO: Add image
    siteName: "Real-life Infrastructure as Code with AWS CDK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-life IaC with AWS CDK",
    description: "Dive into the world of Infrastructure as Code (IaC) with 'Real-Life Infrastructure as Code with AWS CDK'. Perfect for developers and data engineers, this guide offers practical examples, best practices, and expert insights into building and managing cloud infrastructure using AWS CDK. Whether you're looking to streamline deployments, enhance scalability, or secure your cloud environments, this book equips you with the knowledge to leverage IaC principles effectively. Transform your development workflow and achieve more with less code.",
    images: [{url: ""}], // TODO: Add image
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
