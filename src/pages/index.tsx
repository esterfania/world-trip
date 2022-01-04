import { Header } from '../components/Header/index';
import { BannerDefault } from '../components/Banner/BannerDefault';
import { Group } from '../components/Group';
import { Box } from '@chakra-ui/react';
import { Slider } from '../components/Slider/index';
import { Footer } from '../components/Footer/index';
import { City } from '../models/City';
import { GetServerSideProps } from 'next';
import { api } from '../../environment';
import Head from 'next/head';

interface HomeProps {
  cities: City[];
}

export default function Home({ cities }: HomeProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />

        <title>Home | worldtrip</title>
        <meta property="og:description" content="worldtrip" />
        <meta property="og:url" content="https://world-trip-esterfania.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="worldtrip" />

        <meta property="og:image" content="./images/banner.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://world-trip-esterfania.vercel.app/" />
        <meta property="twitter:url" content="https://world-trip-esterfania.vercel.app/" />
        <meta name="twitter:title" content="worldtrip" />
        <meta name="twitter:description" content="worldtrip" />
        <meta name="twitter:image" content="./images/banner.png" />

        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta property="article:author" content="Esterfania" />
        <link rel="icon" type="image/png" href="./favicon.ico" />
      </Head>
      <Header />
      <BannerDefault />
      <Box as="main" width="100%" maxWidth={1440} m="auto">
        <Group />
        <Slider cities={cities} />
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const resCities = await fetch(`${api}/cities`);

  const cities = await resCities.json();
  return {
    props: {
      cities,
    },
  };
};
