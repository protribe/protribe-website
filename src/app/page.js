import React, { Suspense } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import metadata from '@/utils/metadata';

const Section1 = React.lazy(() => import('@/components/landing/section1'));
const Section2 = React.lazy(() => import('@/components/landing/section2'));
const Section3 = React.lazy(() => import('@/components/landing/section3'));
const Section4 = React.lazy(() => import('@/components/landing/section4'));
const Section5 = React.lazy(() => import('@/components/landing/section5'));
const Section6 = React.lazy(() => import('@/components/landing/section6'));

export function generateMetadata() {
  return {
    title: "ProTribe - Career accelerator",
    description: "A compelling and SEO-friendly description of your landing page.",
  };
}

const Landing = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph (for social media sharing) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Favicon */}
        <link rel="icon" href={metadata.favicon} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.url} />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Landing;