import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './divider.scss';

const Divider = ({ dashed, inverse }) => {
  const cx = classnames.bind(styles);

  return (
    <div
      className={cx('divider', {
        divider__dashed: dashed,
        divider__inverse: inverse
      })}
    />
  );
};

Divider.defaultProps = {
  dashed: false,
  inverse: false
};

Divider.propTypes = {
  dashed: PropTypes.bool,
  inverse: PropTypes.bool
};

export default Divider;
