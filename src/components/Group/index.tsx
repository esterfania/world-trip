import { Flex, Heading, Text } from '@chakra-ui/react';
import { IconLinkList } from './IconLinkList';
import { Divider } from '../Divider';

export function Group() {
  const links = [
    { src: './images/cocktail.svg', alt: 'vida notura' },
    { src: './images/surf.svg', alt: 'praia' },
    { src: './images/building.svg', alt: 'moderno' },
    { src: './images/museum.svg', alt: 'clássico' },
    { src: './images/earth.svg', alt: 'e mais...' },
  ];

  return (
    <Flex justify='center' align='center' direction='column' w='100%'>
      <IconLinkList links={links} />
      <Divider />
      <Flex
        justify='center'
        align='center'
        mt={[8, 16]}
        mb={[8, 16]}
        px={[0, 32]}
      >
        <Heading
          as='h3'
          fontWeight='500'
          textAlign='center'
          fontSize={[20, 36]}
        >
          Vamos nessa?
          <Text>Então escolha seu continente</Text>
        </Heading>
      </Flex>
    </Flex>
  );
}
