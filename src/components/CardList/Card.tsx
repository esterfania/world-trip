import { Image, Box, Text, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import { MotionBox } from '../MotionBox';
import Link from 'next/link';

interface CardProps {
  src: string;
  description: string;
  title: string;
  id: number;
}

export function Card({ src, description, title, id }: CardProps) {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.100');

  return (
    <MotionBox
      h="280px"
      w="255px"
      direction="column"
      mb={['20px']}
      boxShadow="sm"
      borderBottomRadius="md"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image h="173" w="100%" src={src} alt={title} filter="brightness(70%)" borderTopRadius="md" loading="eager" />
      <Box border="1px" borderColor="yellow.300" borderTop="0" borderBottomRadius="md" bg={bg}>
        <Link href={`/${id}`}>
          <ChakraLink>
            <Text fontSize="20" fontWeight="600" color={color} py="4" ml="4" fontFamily="barlow">
              {title}
            </Text>
          </ChakraLink>
        </Link>
        <Text fontSize="16" fontWeight="500" color="gray.400" pb="6" ml="4" fontFamily="barlow">
          {description}
        </Text>
      </Box>
    </MotionBox>
  );
}
