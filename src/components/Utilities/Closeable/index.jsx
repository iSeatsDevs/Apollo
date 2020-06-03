import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { X } from '../Icons';
import styles from './closeable.scss';

const cx = classnames.bind(styles);

const Closeable = ({ onClick }) => (
  <div
    className={cx('closeable')}
    tabIndex={0}
    role="button"
    onClick={onClick}
    onKeyPress={onClick}
  >
    <span style={{ transform: 'scale(.75) translate(-5px, -5px)' }}>
      <X />
    </span>
  </div>
);

Closeable.defaultProps = {
  onClick: undefined
};

Closeable.propTypes = {
  onClick: PropTypes.func
};

export default Closeable;
