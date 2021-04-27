import { BannerCity } from '../components/Banner/BannerCity';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer/index';
import { Box } from '@chakra-ui/react';
import { CityInfo } from '../components/CityInfo';
import { CardList } from '../components/CardList/index';
import { City } from '../models/City';
import { api } from '../../environment';

import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface CityDetailsProps {
  city: City;
  cities: City[];
}

export default function CityDetails({ city, cities }: CityDetailsProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='UTF-8' />

        <meta property='og:image' content={city.image} />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='600' />

        <meta name='twitter:card' content='summary_large_image' />
        <title>{city.title}</title>
      </Head>
      <Header isVisibleBackButton />
      <BannerCity title={city.title} image={city.image} />
      <Box as='main' m='auto' mx={[4, 4, 24]}>
        <CityInfo description={city.description} />
        <CardList cities={cities} />
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`${api}/cities/${query.id}`);
  const resCities = await fetch(`${api}/cities`);

  const city = await res.json();
  const cities = await resCities.json();

  return { props: { city, cities } };
};
