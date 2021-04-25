import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { Card } from './Card';
export function CardList() {
  return (
    <Box>
      <Text fontWeight='500' fontSize={[24, 36]} my={[8, 16]}>
        Cidades +100
      </Text>
      <Flex wrap='wrap' justify={['center', 'space-between']} align='center'>
        <Card src='./images/dublin.jpg' title='Irlanda' description='Dublin' />
        <Card
          src='./images/riydh.jpg'
          title='Arábia Saudita'
          description='Riydh'
        />
        <Card src='./images/ammie.jpg' title='Vietnam' description='Vietnam' />
        <Card src='./images/italy.jpg' title='Itália' description='Veneza' />
        <Card src='./images/moscow.jpg' title='Rússia' description='Moscow' />
      </Flex>
    </Box>
  );
}
