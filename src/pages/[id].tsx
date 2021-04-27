import { BannerCity } from '../components/Banner/BannerCity';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer/index';
import { Box } from '@chakra-ui/react';
import { CityInfo } from '../components/CityInfo';
import { CardList } from '../components/CardList/index';
import { City } from '../models/City';
import { api } from '../services/api';

import { GetServerSideProps } from 'next';

interface CityDetailsProps {
  city: City;
  cities: City[];
}

export default function CityDetails({ city, cities }: CityDetailsProps) {
  return (
    <>
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
