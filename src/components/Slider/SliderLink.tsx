import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface SliderLinkProps {
  href: string;
  children: ReactElement;
}

export function SliderLink({ href, children }: SliderLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink>{children}</ChakraLink>
    </Link>
  );
}
