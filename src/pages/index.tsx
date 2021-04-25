import { Header } from '../components/Header/index';
import { BannerDefault } from '../components/Banner/BannerDefault';
import { Group } from '../components/Group';
import { Box } from '@chakra-ui/react';
import { Slider } from '../components/Slider/index';
import { Footer } from '../components/Footer/index';

export default function Home() {
  return (
    <>
      <Header />
      <BannerDefault />
      <Box as='main' width='100%' maxWidth={1240} m='auto'>
        <Group />
        <Slider />
      </Box>
      <Footer />
    </>
  );
}
