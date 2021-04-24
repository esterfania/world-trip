import { Header } from '../components/Header/index';
import { Banner } from '../components/BannerDefault/index';
import { Group } from '../components/Group';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Header />
      <Box>
        <Banner />
        <Group />
      </Box>
    </>
  );
}
