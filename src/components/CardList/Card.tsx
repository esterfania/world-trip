import { Image, Box, Text } from '@chakra-ui/react';
import { MotionBox } from '../MotionBox';

interface CardProps {
  src: string;
  description: string;
  title: string;
}

export function Card({ src, description, title }: CardProps) {
  return (
    <MotionBox
      h='280px'
      w='255px'
      direction='column'
      mb={['20px']}
      boxShadow='sm'
      borderBottomRadius='md'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        h='173'
        w='100%'
        src={src}
        alt={title}
        filter='brightness(70%)'
        borderTopRadius='md'
      />
      <Box
        border='1px'
        borderColor='yellow.400'
        borderTop='0'
        borderBottomRadius='md'
        bg='white'
      >
        <Text
          fontSize='20'
          fontWeight='600'
          color='gray.700'
          py='4'
          ml='4'
          fontFamily='barlow'
        >
          {title}
        </Text>
        <Text
          fontSize='16'
          fontWeight='500'
          color='gray.400'
          pb='6'
          ml='4'
          fontFamily='barlow'
        >
          {description}
        </Text>
      </Box>
    </MotionBox>
  );
}
