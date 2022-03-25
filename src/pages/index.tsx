import Head from 'next/head';
import { ReactElement } from 'react';
import { Carousel } from '../components/Carousel';
import { CTA } from '../components/CTA';
import { Hero } from '../components/Hero';
import { HorizontalDivider } from '../components/HorizontalDivider';
import { SecondHero } from '../components/SecondHero';

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Hero />
      <SecondHero />
      <HorizontalDivider />
      <CTA />
      <Carousel />
    </>
  );
}
