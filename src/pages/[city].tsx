import { BannerCity } from '../components/Banner/BannerCity';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer/index';
import { Box } from '@chakra-ui/react';
import { CityInfo } from '../components/CityInfo';

export default function CityDetails() {
  return (
    <>
      <Header isVisibleBackButton />
      <BannerCity />
      <Box as='main'>
        <CityInfo />
      </Box>
      <Footer />
    </>
  );
}
