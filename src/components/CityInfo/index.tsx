import { Flex, Text, Box, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { MotionBox } from "../MotionBox/index";

interface CityInfoProps {
  description: string;
}

export function CityInfo({ description }: CityInfoProps) {
  return (
    <Flex
      aling="center"
      justifyContent="space-between"
      my={[8, 16]}
      wrap="wrap"
      direction={["column", "row"]}
    >
      <Text
        fontWeight="400"
        fontSize={[14, 24]}
        w={["100%", "50%"]}
        textAlign="justify"
        mb={[4, 0]}
      >
        {description}
      </Text>
      <MotionBox
        align="center"
        justify="space-between"
        w={["100%", "40%"]}
        fontSize={[18, 24]}
        fontWeight="600"
        textAlign="center"
        wrap="wrap"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box>
          <Text color="yellow.300" fontSize={[24, 48]}>
            20M
          </Text>
          <Text>habitantes</Text>
        </Box>
        <Box>
          <Text color="yellow.300" fontSize={[24, 48]}>
            0,894
          </Text>
          <Text>IDH</Text>
        </Box>
        <Box>
          <Text color="yellow.300" fontSize={[24, 48]}>
            +600
          </Text>
          <Text>
            bares
            <Tooltip
              label="A cidade possui mais de 600 bares!"
              aria-label="A tooltip"
              placement="bottom"
              hasArrow
            >
              <IconButton
                icon={<Icon as={FiInfo} />}
                size="xs"
                color="gray.500"
                aria-label="hover me"
                variant="unstyled"
              />
            </Tooltip>
          </Text>
        </Box>
      </MotionBox>
    </Flex>
  );
}
