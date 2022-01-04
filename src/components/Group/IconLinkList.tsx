import { Stack, Image, Text, useBreakpointValue, Flex, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { MotionBox } from '../MotionBox';

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
    <MotionBox
      as={UnorderedList}
      justify="space-evenly"
      align="center"
      mx="0"
      my={[8, 24]}
      wrap="wrap"
      listStyleType="none"
      w="90%"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {links.map((link, i) => (
        <ListItem key={i} fontWeight="600">
          {isWideVersion ? (
            <Stack align="center" justify="space-arround">
              <Image src={link.src} alt={link.alt} loading="eager" />
              <Text fontSize="24">{link.alt}</Text>
            </Stack>
          ) : (
            <Flex aling="center" justify="center" m="auto">
              <ListIcon as={BsDot} color="yellow.300" fontSize="32" />
              <Text fontSize="18">{link.alt}</Text>
            </Flex>
          )}
        </ListItem>
      ))}
    </MotionBox>
  );
}
