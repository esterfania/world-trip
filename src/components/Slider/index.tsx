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
      description: 'Dublin pode parecer pequena, mas é poderosa.',
    },
    {
      src: './images/riydh.jpg',
      alt: 'Riydh',
      description:
        'Capital e centro financeiro da Arábia Saudita, tem grandes marcos e está se tornando uma cidade empolgante.',
    },
    {
      src: './images/ammie.jpg',
      alt: 'Vietnam',
      description:
        'Patrimônio mundial da UNESCO, é conhecida por suas ilhas e por sua floresta tropical.',
    },
    {
      src: './images/italy.jpg',
      alt: 'Italy',
      description:
        'Veneza é uma cidade com praças deslumbrantes, possui passeios românticos de barco por seus canais.',
    },
    {
      src: './images/moscow.jpg',
      alt: 'Moscow',
      description: 'Possui belas praças e igrejas antigas.',
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
