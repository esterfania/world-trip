import {
  Flex,
  IconButton,
  Icon,
  Box,
  useColorModeValue,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import { SliderLink } from '../Slider/SliderLink';
import { BiSun } from 'react-icons/bi';
interface HeaderProps {
  isVisibleBackButton?: boolean;
}

export function Header({ isVisibleBackButton = false }: HeaderProps) {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.600', 'gray.200');

  const { toggleColorMode } = useColorMode();

  return (
    <Box w='100%' position='sticky' top='0' zIndex='2' bg={bg} color={color}>
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
          width={'calc(100% - 100px)'}
          m='auto'
        >
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </Flex>
        <IconButton
          aria-label='light or dark mode'
          icon={<Icon as={BiSun} />}
          variant='unstyled'
          onClick={toggleColorMode}
        />
      </Flex>
      <Divider />
    </Box>
  );
}
