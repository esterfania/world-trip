import { BannerCity } from '../components/Banner/BannerCity';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer/index';
import { Box } from '@chakra-ui/react';
import { CityInfo } from '../components/CityInfo';
import { CardList } from '../components/CardList/index';

export default function CityDetails() {
  return (
    <>
      <Header isVisibleBackButton />
      <BannerCity />
      <Box as='main' m='auto' mx={[4, 4, 24]}>
        <CityInfo />
        <CardList />
      </Box>
      <Footer />
    </>
  );
}
