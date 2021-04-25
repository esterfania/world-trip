import { Flex, Text, Box, Icon, IconButton, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

export function CityInfo() {
  return (
    <Flex aling='center' justifyContent='space-between' mx='32' my='16'>
      <Text fontWeight='400' fontSize='24' w='50%' textAlign='justify'>
        Dublin é uma cidade encantadora. Cidade jovem e vibrante, tem uma grande
        diversidade cultural mas mantém um toque de cidade do interior. Estude
        na capital da Irlanda e tenha uma experiência inesquecível em uma das
        capitais mais bacanas da Europa. Dublin tem o tamanho ideal para a sua
        vida na Europa.
      </Text>
      <Flex
        align='center'
        justify='space-between'
        w='40%'
        fontSize='24'
        fontWeight='600'
        textAlign='center'
      >
        <Box>
          <Text color='yellow.400' fontSize='48'>
            20M
          </Text>
          <Text>habitantes</Text>
        </Box>
        <Box>
          <Text color='yellow.400' fontSize='48'>
            0,894
          </Text>
          <Text>IDH</Text>
        </Box>
        <Box>
          <Text color='yellow.400' fontSize='48'>
            +600
          </Text>
          <Text>
            bares
            <Tooltip
              label='A cidade possui mais de 600 bares!'
              aria-label='A tooltip'
              placement='bottom'
              hasArrow
            >
              <IconButton
                icon={<Icon as={FiInfo} />}
                fontSize='16'
                color='gray.500'
                aria-label='hover me'
                variant='unstyled'
              />
            </Tooltip>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
