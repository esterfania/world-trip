import { Flex, IconButton, Icon } from '@chakra-ui/react';
import { Logo } from './Logo';
import { IoIosArrowBack } from 'react-icons/io';

interface HeaderProps {
  isVisibleBackButton?: boolean;
}

export function Header({ isVisibleBackButton = false }: HeaderProps) {
  return (
    <Flex
      w='100%'
      as='header'
      maxWidth={1480}
      h='20'
      mx='auto'
      px={['6', '8']}
      align='center'
    >
      {isVisibleBackButton && (
        <Flex justify='flex-start' w='50px'>
          <IconButton
            icon={<Icon as={IoIosArrowBack} />}
            fontSize='24'
            aria-label='back button'
            variant='ghost'
          />
        </Flex>
      )}
      <Flex justify='center' w='100%'>
        <Logo />
      </Flex>
    </Flex>
  );
}
