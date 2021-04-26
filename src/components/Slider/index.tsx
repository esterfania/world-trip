import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import { SwiperSlideImage } from './SwiperSlideImage';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper';
import React from 'react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export function Slider() {
  const images = [
    {
      image: './images/dublin.jpg',
      title: 'Dublin',
      description: 'Dublin pode parecer pequena, mas é poderosa.',
    },
    {
      image: './images/riydh.jpg',
      title: 'Riydh',
      description:
        'Capital e centro financeiro da Arábia Saudita, tem grandes marcos e está se tornando uma cidade empolgante.',
    },
    {
      image: './images/ammie.jpg',
      title: 'Vietnam',
      description:
        'Patrimônio mundial da UNESCO, é conhecida por suas ilhas e por sua floresta tropical.',
    },
    {
      image: './images/italy.jpg',
      title: 'Italy',
      description:
        'Veneza é uma cidade com praças deslumbrantes, possui passeios românticos de barco por seus canais.',
    },
    {
      image: './images/moscow.jpg',
      title: 'Moscow',
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
        {images.map((image) => (
          <SwiperSlide key={image.title}>
            <SwiperSlideImage
              headTitle={image.title}
              description={image.description}
              src={image.image}
              alt={image.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
