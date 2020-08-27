import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import LazyLoad from 'react-lazyload';
import styles from './image.scss';
import Load from '../Load';

const cx = classnames.bind(styles);

const Placeholder = () => (
  <div className={cx('image_placeholder')}>
    <Load theme="light" />
  </div>
);

const Image = ({ height, width, src, alt, bordered }) => (
  <div
    style={{
      height,
      width
    }}
  >
    <LazyLoad
      classNamePrefix={cx('image')}
      height="100%"
      width="100%"
      once
      placeholder={<Placeholder />}
    >
      <img
        className={cx('image', {
          image__bordered: bordered
        })}
        alt={alt}
        src={src}
      />
    </LazyLoad>
  </div>
);

Image.defaultProps = {
  height: 'inherit',
  width: 'inherit',
  bordered: false
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  bordered: PropTypes.bool
};

export default Image;
