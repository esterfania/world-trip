import { HStack } from '@chakra-ui/react';
import { IconLink } from './IconLink';

export function GroupLinks() {
  const links = [
    { src: './images/cocktail.svg', alt: 'vida notura' },
    { src: './images/surf.svg', alt: 'praia' },
    { src: './images/building.svg', alt: 'moderno' },
    { src: './images/museum.svg', alt: 'clássico' },
    { src: './images/earth.svg', alt: 'e mais...' },
  ];

  return (
    <HStack justify='center' my='16' mx='16' spacing='32'>
      {links.map((link, index) => (
        <IconLink key={index} src={link.src} alt={link.alt} />
      ))}
    </HStack>
  );
}
