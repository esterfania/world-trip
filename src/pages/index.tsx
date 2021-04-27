import { Header } from "../components/Header/index";
import { BannerDefault } from "../components/Banner/BannerDefault";
import { Group } from "../components/Group";
import { Box } from "@chakra-ui/react";
import { Slider } from "../components/Slider/index";
import { Footer } from "../components/Footer/index";
import { City } from "../models/City";
import { GetServerSideProps } from "next";
import { api } from "../services/api";

interface HomeProps {
  cities: City[];
}

export default function Home({ cities }: HomeProps) {
  return (
    <>
      <Header />
      <BannerDefault />
      <Box as="main" width="100%" maxWidth={1440} m="auto">
        <Group />
        <Slider cities={cities} />
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const resCities = await fetch(`${api}/cities`);

  const cities = await resCities.json();
  return {
    props: {
      cities,
    },
  };
};
