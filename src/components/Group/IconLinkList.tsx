import {
  Stack,
  Image,
  Text,
  useBreakpointValue,
  Flex,
  UnorderedList,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

interface Links {
  src: string;
  alt: string;
}
interface IconLinkProps {
  links: Links[];
}

export function IconLinkList({ links }: IconLinkProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as={UnorderedList}
      justify='space-between'
      align='center'
      mx='0'
      my={[8, 24]}
      wrap='wrap'
      listStyleType='none'
      w={['80%', '100%']}
      px={[0, 16]}
    >
      {links.map((link, i) => (
        <Link href='/' key={i}>
          <ListItem
            fontWeight='600'
            _hover={{ filter: 'brightness(0.8)', cursor: 'pointer' }}
          >
            {isWideVersion ? (
              <Stack align='center' justify='space-arround'>
                <Image src={link.src} alt={link.alt} />
                <Text fontSize='24'>{link.alt}</Text>
              </Stack>
            ) : (
              <Flex aling='center' justify='center' m='auto'>
                <ListIcon as={BsDot} color='yellow.400' fontSize='32' />
                <Text fontSize='18'>{link.alt}</Text>
              </Flex>
            )}
          </ListItem>
        </Link>
      ))}
    </Flex>
  );
}
