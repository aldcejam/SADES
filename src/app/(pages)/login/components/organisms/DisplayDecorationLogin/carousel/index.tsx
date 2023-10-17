'use client';
import './styled.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { DateIllustration } from 'public/carousel-illustrations/DateIllustration';

const Carousel = () => {
  return (
    <div>
      <Splide
        options={{
          rewind: false,
          arrows: true,
          gap: '1rem',
          height: '350px',
          autoplay: true,
          interval: 7000,
          snap: true,
        }}
      >
        <SplideSlide className="item-slide">
          <DateIllustration />
          <h3>Datas dos Eventos</h3>
        </SplideSlide>
        <SplideSlide className="item-slide">
          <DateIllustration />
          <h3>Datas dos Eventos</h3>
        </SplideSlide>
        <SplideSlide className="item-slide">
          <DateIllustration />
          <h3>Datas dos Eventos</h3>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
