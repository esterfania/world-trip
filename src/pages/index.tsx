import { Header } from '../components/Header/index';
import { Banner } from '../components/BannerDefault/index';
import { GroupLinks } from '../components/GroupLinks';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Header />
      <Box>
        <Banner />
        <GroupLinks />
      </Box>
    </>
  );
}
