import React from 'react';
import { GetPdfButton } from '@/components/drawer';
import { OrderButton } from '@/components/button';
import { MainImage } from '@/components/images';
import { TopNav } from '@/components/top';
import { BottomSection } from '@/components/bottom';
import { Footer } from '@/components/footer';

const Home: React.FC = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center p-8 bg-white dark:bg-slate-950">
      <TopNav />
      <MainImage />

      <div className="flex w-full mb-12 flex-col items-center justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <OrderButton />
        <GetPdfButton />
      </div>

      <BottomSection />

      <div className="w-4/5 flex items-center my-8 md:my-12">
        <hr className="flex-grow border-gray-300" />
        <span className="flex px-8 text-gray-500 text-2xl">
          <span className="mx-6">●</span>
          <span className="mx-6">●</span>
          <span className="mx-6">●</span>
        </span>
          <hr className="flex-grow border-gray-300" />
      </div>

      <div className="w-full mb-32 max-w-5xl mx-auto text-left space-y-6 mt-12 px-6 md:px-12">
        <h2 className="text-4xl font-bold mt-6 mb-6">What is this book about?</h2>
        <p className="text-base leading-8 text-justify">
          This book will show you how to build a modern software platform in Python using AWS CDK. Even if you use a different language, you will find this book useful because I focus on architecture patterns rather than syntax details. The book is divided into three parts: Foundations, Real-Life Examples, and Best Practices.
        </p>
        <p className="text-base leading-8 text-justify">
          I begin with an introduction to Infrastructure as Code (IaC) CDK to help you quickly learn and refresh some concepts. Then, we dive into a series of real-life implementations of various services and components that you can use to build your software platform. All examples are complete and fully functional, as I have personally deployed them. Finally, I discuss some best practices that I have learned from experience and implemented in the examples. You&#39;ll learn:
        </p>
        <ul className="list-disc list-inside text-base leading-7">
          <li>AWS CDK and IaC concepts.</li>
          <li>Cloud computing concepts and services, including the AWS Well Architected Framework.</li>
          <li>How to build a cloud-native software platform using CDK.</li>
          <li>Create constructs of code to build your cloud application.</li>
          <li>How to create a microservices architecture with CDK.</li>
        </ul>
        <p className="text-base leading-8 text-justify">
          In most cases, I will not discuss the pros and cons of different approaches or try to convince you to use one tool over another. I assume that you are already familiar with the WHATs and WHYs, and you are reading this book to learn the HOWs. I will share my opinionated best practices, but keep in mind that opinions can change based on new evidence or different contexts. My opinions may also be completely wrong. Keep this in mind while reading.
        </p>
        <p className="text-base leading-8 text-justify">
          Most books focus on syntax or general concepts, and the documentation for both AWS and CDK is excellent. Therefore, I do not believe that I should write a book to discuss those topics. Instead, I focus on the areas that can be challenging, such as connecting and orchestrating different cloud services. The book also includes diagrams and illustrations to help you understand the architecture and how each component fits into the system.
        </p>
        <p className="text-base leading-8 text-justify">
          By the end of this book, you will have a clear understanding of IaC with CDK and the confidence to build a scalable, secure, and easy-to-maintain software platform in AWS.
        </p>
      </div>
      < Footer />
    </main>
  );
};

export default Home;
