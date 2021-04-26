import { Header } from '../components/Header/index';
import { BannerDefault } from '../components/Banner/BannerDefault';
import { Group } from '../components/Group';
import { Box } from '@chakra-ui/react';
import { Slider } from '../components/Slider/index';
import { Footer } from '../components/Footer/index';
import { useEffect, useState } from 'react';
import { CityService } from '../services/CityService';
import { City } from '../models/City';

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const getCities = CityService.getCities;

  useEffect(() => {
    async function getData() {
      const response = await getCities();
      setCities(response.data);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <BannerDefault />
      <Box as='main' width='100%' maxWidth={1440} m='auto'>
        <Group />
        <Slider cities={cities} />
      </Box>
      <Footer />
    </>
  );
}
