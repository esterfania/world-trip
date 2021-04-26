import { forwardRef, Flex } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);
