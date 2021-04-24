import { Header } from '../components/Header/index';
import { Banner } from '../components/BannerDefault/index';
import { Group } from '../components/Group';
import { Box } from '@chakra-ui/react';
import { Slider } from '../components/Slider/index';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Box width={1160} m='auto'>
        <Group />
        <Slider />
      </Box>
    </>
  );
}
