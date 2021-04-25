import { Flex, Text, Image } from '@chakra-ui/react';
export function BannerCity() {
  return (
    <Flex
      h={[150, 500]}
      position='relative'
      justifyContent={['center', 'flex-end']}
      align={['center', 'flex-start']}
      direction='column'
    >
      <Text
        fontSize={[28, 48]}
        fontWeight='600'
        position='absolute'
        zIndex='1'
        color='gray.200'
        pb={[0, 16]}
        pl={[0, 24]}
      >
        Dublin
      </Text>
      <Image
        src='./images/dublin.jpg'
        alt='Dublin'
        filter='brightness(50%)'
        objectFit='cover'
        w='100%'
        h='100%'
      />
    </Flex>
  );
}
