import {
  Flex,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
export function Footer() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.600", "gray.200");
  return (
    <>
      <Divider />

      <Flex
        as="footer"
        align="center"
        justify="center"
        w="100%"
        h="80px"
        bg={bg}
        color={color}
        boxShadow="xs"
      >
        <Text>
          Feito com <Icon as={FcLike} fontSize="24" /> por
          <Link href="https://github.com/esterfania" fontWeight="600">
            @esterfania
          </Link>
        </Text>
      </Flex>
    </>
  );
}
