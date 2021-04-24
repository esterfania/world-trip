import { Stack, Image, Text } from '@chakra-ui/react';

interface IconLinkProps {
  src: string;
  alt: string;
}

export function IconLink({ src, alt }: IconLinkProps) {
  return (
    <Stack align='center' justify='center' spacing='4' fontWeight='600'>
      <Image src={src} alt={alt} />
      <Text fontSize='24'>{alt}</Text>
    </Stack>
  );
}
