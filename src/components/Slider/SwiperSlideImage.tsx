import { Image, Box, Text, Heading, Flex } from '@chakra-ui/react';

interface SwiperSlideProps {
  headTitle: string;
  description: string;
  src: string;
  alt: string;
}

export function SwiperSlideImage({
  src,
  alt,
  headTitle,
  description,
}: SwiperSlideProps) {
  return (
    <Box>
      <Flex
        align='center'
        justify='center'
        w='100%'
        h='100%'
        position='absolute'
        color='gray.100'
        direction='column'
        bg='gray.800'
        opacity='0.8'
      >
        <Heading color='gray.100' fontWeight='700' fontSize={[24, 48]} mb='4'>
          {headTitle}
        </Heading>
        <Text fontWeight='700' fontSize={[14, 24]} w='50%' textAlign='center'>
          {description}
        </Text>
      </Flex>
      <Image
        src={src}
        alt={alt}
        objectFit='cover'
        h={['250px', '450px']}
        w='100%'
        m='auto'
      />
    </Box>
  );
}
