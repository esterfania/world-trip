import { Flex, IconButton } from '@chakra-ui/react';
import { Logo } from './Logo';
import { IoIosArrowBack } from 'react-icons/io';

interface HeaderProps {
  isVisibleBackButton: boolean;
}

export function Header({ isVisibleBackButton = false }: HeaderProps) {
  return (
    <Flex p='4' align='center'>
      {isVisibleBackButton && (
        <Flex justify='flex-start' w='50px'>
          <IconButton as={IoIosArrowBack} size='sm' aria-label='back button' />
        </Flex>
      )}
      <Flex justify='center' w='100%'>
        <Logo />
      </Flex>
    </Flex>
  );
}
