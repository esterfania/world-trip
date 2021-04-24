import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image } from '@chakra-ui/react';

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
  return (
    <Box h='450px' m='auto' mb='16'>
      <Swiper
        effect='fade'
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Image
            src='./images/dublin.jpg'
            alt='dublin'
            objectFit='cover'
            h='450px'
            w='100%'
            m='auto'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='./images/riydh.jpg'
            alt='riydh'
            objectFit='cover'
            h='450px'
            w='100%'
            m='auto'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='./images/ammie.jpg'
            alt='ammie'
            objectFit='cover'
            h='450px'
            w='100%'
            m='auto'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='./images/italy.jpg'
            alt='italy'
            objectFit='cover'
            h='450px'
            w='100%'
            m='auto'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='./images/moscow.jpg'
            alt='moscow'
            objectFit='cover'
            h='450px'
            w='100%'
            m='auto'
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
