import {
  Image,
  Box,
  useBreakpointValue,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';

export function BannerDefault() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        backgroundImage='url(./images/banner.png)'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        h={[165, 335]}
        position='relative'
        justifyContent='center'
        direction='column'
      >
        <Stack margin={[4, 24]} spacing='4'>
          <Box color='gray.100' fontSize={[20, 36]} as='h2'>
            <Text>5 Continentes,</Text>
            <Text>infinitas possibilidades.</Text>
          </Box>
          <Box
            color='gray.200'
            as='span'
            fontSize={[14, 20]}
            w={['100%', '45%']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Box>
        </Stack>
      </Flex>
      {isWideVersion && (
        <Image
          src='./images/airplane.svg'
          position='absolute'
          loading='eager'
          top='150px'
          right='10%'
        />
      )}
    </>
  );
}
