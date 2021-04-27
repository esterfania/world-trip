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
import { City } from '../../models/City';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

interface SliderProps {
  cities: City[];
}

export function Slider({ cities }: SliderProps) {
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
        {cities.map((image) => (
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
