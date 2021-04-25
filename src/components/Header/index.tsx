import { Flex, IconButton, Icon, Box } from '@chakra-ui/react';
import { Logo } from './Logo';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import { SliderLink } from '../Slider/SliderLink';
interface HeaderProps {
  isVisibleBackButton?: boolean;
}

export function Header({ isVisibleBackButton = false }: HeaderProps) {
  return (
    <Box
      w='100%'
      position='sticky'
      top='0'
      zIndex='1'
      bg='gray.100'
      boxShadow='xs'
    >
      <Flex
        w='100%'
        as='header'
        h='20'
        mx='auto'
        px={['6', '8']}
        align='center'
        wrap='wrap'
        m='auto'
      >
        {isVisibleBackButton && (
          <SliderLink href='/'>
            <Flex justify='flex-start' w='50px'>
              <IconButton
                icon={<Icon as={IoIosArrowBack} />}
                fontSize='24'
                aria-label='back button'
                variant='ghost'
              />
            </Flex>
          </SliderLink>
        )}
        <Flex
          justify='center'
          align='center'
          width={'calc(100% - 50px)'}
          m='auto'
        >
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
