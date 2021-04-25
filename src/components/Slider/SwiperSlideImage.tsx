import { Image, Box, Text, Flex, Heading } from '@chakra-ui/react';
import { SliderLink } from './SliderLink';

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
        <SliderLink href={'/cities'}>
          <Heading color='gray.100' fontWeight='700' fontSize={[24, 48]} mb='4'>
            {headTitle}
          </Heading>
        </SliderLink>
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
