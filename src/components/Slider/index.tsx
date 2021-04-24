import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { SwiperSlideImage } from './SwiperSlideImage';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export function Slider() {
  const images = [
    {
      src: './images/dublin.jpg',
      alt: 'Dublin',
      description: 'Dublin may be small, but it’s also mighty',
    },
    {
      src: './images/riydh.jpg',
      alt: 'Riydh',
      description:
        'Saudi Arabia’s capital and main financial hub has distinct landmarks and is becoming an exciting city.',
    },
    {
      src: './images/ammie.jpg',
      alt: 'Vietnam',
      description:
        'As a UNESCO World Heritage Centre, it is best known for its 1000s of sharp peaked islands, which are covered in lush rainforest.',
    },
    {
      src: './images/italy.jpg',
      alt: 'Italy',
      description:
        'Venice is a stunning city of shaded Piazzas, romantic boat trips through the canals and luxurious hotels.',
    },
    {
      src: './images/moscow.jpg',
      alt: 'Moscow',
      description:
        'Moscow is becoming a popular city to visit, with tourists flocking over for the beautiful squares and churches.',
    },
  ];

  return (
    <Box m='auto' mb={[4, 16]}>
      <Swiper
        effect='fade'
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <SwiperSlideImage
              headTitle={image.alt}
              description={image.description}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
