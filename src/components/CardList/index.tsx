import { Box, Text, Flex } from "@chakra-ui/react";
import { City } from "../../models/City";
import { Card } from "./Card";

interface CardListProps {
  cities: City[];
}

export function CardList({ cities }: CardListProps) {
  return (
    <Box>
      <Text fontWeight="500" fontSize={[24, 36]} my={[8, 16]}>
        Cidades +100
      </Text>
      <Flex wrap="wrap" justify={["center", "space-between"]} align="center">
        {cities.map((item) => (
          <Card
            key={item.id}
            src={item.image}
            title={item.title}
            description={item.subtitle}
            id={item.id}
          />
        ))}
      </Flex>
    </Box>
  );
}
