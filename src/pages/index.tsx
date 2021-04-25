import { Header } from '../components/Header/index';
import { Banner } from '../components/BannerDefault/index';
import { Group } from '../components/Group';
import { Box } from '@chakra-ui/react';
import { Slider } from '../components/Slider/index';
import { Footer } from '../components/Footer/index';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Box as='main' width='100%' m='auto'>
        <Group />
        <Slider />
      </Box>
      <Footer />
    </>
  );
}
