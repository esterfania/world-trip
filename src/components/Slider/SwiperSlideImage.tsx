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
    <>
      <Flex
        align='center'
        justify='center'
        w='100%'
        h='100%'
        position='absolute'
        direction='column'
        zIndex='1'
      >
        <SliderLink href={'/1'}>
          <Heading color='gray.200' fontWeight='700' fontSize={[24, 48]} mb='4'>
            {headTitle}
          </Heading>
        </SliderLink>
        <Text
          fontWeight='700'
          color='gray.200'
          fontSize={[14, 24]}
          w='50%'
          textAlign='center'
        >
          {description}
        </Text>
      </Flex>
      <Image
        src={src}
        alt={alt}
        objectFit='cover'
        filter='brightness(50%)'
        h={['250px', '450px']}
        w='100%'
        m='auto'
      />
    </>
  );
}
