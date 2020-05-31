import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { default as ImageContainer, Shimmer } from 'react-shimmer';
import styles from './image.scss';
import Load from '../Load';

const cx = classnames.bind(styles);

const Image = ({ height, width, src, alt, bordered }) => (
  <div
    style={{
      height,
      width
    }}
    className={cx('image', {
      image__border: bordered
    })}
  >
    <ImageContainer
      src={src}
      NativeImgProps={{ alt }}
      fallback={<Shimmer className={cx('image_shimmer')} />}
    />
  </div>
);

Image.defaultProps = {
  height: '100%',
  width: '100%',
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
