import { Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FcLike } from 'react-icons/fc';
export function Footer() {
  return (
    <Flex
      as='footer'
      align='center'
      justify='center'
      w='100%'
      h='80px'
      bg='gray.100'
      boxShadow='xs'
    >
      <Text>
        Feito com <Icon as={FcLike} fontSize='24' /> por
        <Link
          href='https://github.com/esterfania'
          color='yellow.500'
          fontWeight='700'
        >
          @esterfania
        </Link>
      </Text>
    </Flex>
  );
}
