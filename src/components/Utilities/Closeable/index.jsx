import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { X } from '../Icons';
import styles from './closeable.scss';

const cx = classnames.bind(styles);

const Closeable = ({ onClick, size }) => (
  <div
    className={cx('closeable')}
    tabIndex={0}
    role="button"
    onClick={onClick}
    onKeyPress={onClick}
  >
    <X size={size} />
  </div>
);

Closeable.defaultProps = {
  onClick: undefined,
  size: 24
};

Closeable.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number
};

export default Closeable;
