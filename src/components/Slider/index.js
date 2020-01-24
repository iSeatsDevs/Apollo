import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Carousel from '@brainhubeu/react-carousel';
import { ChevronLeft, ChevronRight } from 'react-feather';
import styles from './slider.scss';
import Image from '../Image';

const cx = classnames.bind(styles);

const SliderButton = ({ onClick, next }) => (
  <div
    className={cx('slider_button', {
      slider_button__next: next,
      slider_button__previous: !next,
    })}
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={onClick}
  >
    {next ? <ChevronRight /> : <ChevronLeft />}
  </div>
);

const Slider = ({ images, autoPlay }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const max = images.length - 1;

    if (slide > max) {
      setSlide(0);
    }

    if (slide < 0) {
      setSlide(max);
    }
  }, [slide]);

  return (
    <div className={cx('slider')}>
      <div className={cx('slider_buttons')}>
        <SliderButton onClick={() => setSlide(slide - 1)} />
        <SliderButton onClick={() => setSlide(slide + 1)} next />
      </div>

      <Carousel
        value={slide}
        onChange={value => setSlide(value)}
        autoPlay={autoPlay ? 5000 : null}
        infinite
      >
        {images.map((image, i) => (
          <Image
            index={i}
            src={image.src}
            alt={image.alt}
            height="100%"
            width="100%"
          />
        ))}
      </Carousel>

      <div className={cx('slider_dots')}>
        {images.map((image, i) => (
          <div
            className={cx('slider_dot', {
              slider_dot__active: slide >= i,
              slider_dot__animate: slide === i && autoPlay,
            })}
          />
        ))}
      </div>

      <style jsx>{`
        .BrainhubCarousel {
          overflow: hidden;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;

          height: 100%;
        }

        .BrainhubCarousel .BrainhubCarousel__trackContainer {
          overflow: hidden;

          height: inherit;
        }

        .BrainhubCarousel
          .BrainhubCarousel__trackContainer
          .BrainhubCarousel__track {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          overflow: hidden;
          list-style: none;
          margin: 0;
          padding: 0;

          height: inherit;
        }

        .BrainhubCarousel
          .BrainhubCarousel__trackContainer
          .BrainhubCarousel__track.BrainhubCarousel__track--transition {
          -webkit-transition: -webkit-transform;
          transition: -webkit-transform;
          transition: transform;
          transition: transform, -webkit-transform;
        }

        .BrainhubCarouselItem {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          position: relative;

          height: inherit;
        }

        .BrainhubCarouselItem.BrainhubCarouselItem--clickable {
          cursor: pointer;
        }

        .BrainhubCarouselItem .debug-number {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          font-size: 2em;
          text-shadow: 0px 0px 9px white;
        }
      `}</style>
    </div>
  );
};

Slider.defaultProps = {
  autoPlay: false,
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Slider;

// <CarouselProvider
// className={cx('slider')}
// currentSlide={slide}
// naturalSlideWidth={100}
// naturalSlideHeight={100}
// totalSlides={3}
// isPlaying={autoPlay}
// >
// <PureSlider>
//   {content.map((item, i) => (
//     <Slide index={i}>
//       <Image src={item.src} alt={item.alt} height="100%" width="100%" />
//     </Slide>
//   ))}
// </PureSlider>

// <Carousel className={cx('slider_buttons')}>
//   <Carousel className={cx('slider_shadow', 'slider_shadow_first')}>
//     <Button theme="icon" white onClick={() => setSlide(slide - 1)}>
//       <ChevronLeft size={28} />
//     </Button>
//   </Carousel>

//   <Carousel className={cx('slider_shadow', 'slider_shadow_last')}>
//     <Button theme="icon" white onClick={() => setSlide(slide + 1)}>
//       <ChevronRight size={28} />
//     </Button>
//   </Carousel>
// </Carousel>

// <Carousel className={cx('slider_dots')}>
//   {content.map((item, i) => (
//     <Dot slide={i} className={cx('slider_dot')}>
//       <p>{i}</p>
//     </Dot>
//   ))}
// </Carousel>
// </CarouselProvider>
