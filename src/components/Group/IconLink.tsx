import { Stack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Tooltip } from '@chakra-ui/react';

interface IconLinkProps {
  src: string;
  alt: string;
}

export function IconLink({ src, alt }: IconLinkProps) {
  return (
    <Link href='/'>
      <Stack
        align='center'
        justify='center'
        fontWeight='600'
        _hover={{ filter: 'brightness(0.8)', cursor: 'pointer' }}
      >
        <Image src={src} alt={alt} />
        <Text fontSize='24'>{alt}</Text>
      </Stack>
    </Link>
  );
}
