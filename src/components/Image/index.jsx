import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { default as ImageShimmer, Shimmer } from 'react-shimmer';
import styles from './image.scss';

const cx = classnames.bind(styles);

const Image = ({ height, width, src, alt, bordered }) => (
  <div
    className={cx('image', {
      image__bordered: bordered,
    })}
  >
    <ImageShimmer
      src={src}
      alt={alt}
      fallback={<Shimmer width={width} height={height} />}
    />
  </div>
);

Image.defaultProps = {
  height: undefined,
  width: undefined,
  bordered: false,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  bordered: PropTypes.bool,
};

export default Image;
