import { Flex } from '@chakra-ui/react';
import { IconLink } from './IconLink';
import { Divider } from '../Divider';

export function GroupLinks() {
  const links = [
    { src: './images/cocktail.svg', alt: 'vida notura' },
    { src: './images/surf.svg', alt: 'praia' },
    { src: './images/building.svg', alt: 'moderno' },
    { src: './images/museum.svg', alt: 'clássico' },
    { src: './images/earth.svg', alt: 'e mais...' },
  ];

  return (
    <>
      <Flex justify='space-between' align='center' m='16' px='32'>
        {links.map((link, index) => (
          <IconLink key={index} src={link.src} alt={link.alt} />
        ))}
      </Flex>
      <Divider />
    </>
  );
}
