import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './load.scss';

const cx = classnames.bind(styles);

const Load = ({ theme }) => {
  const themes = {
    primary: 'loader__primary',
    light: 'loader__light',
    dark: 'loader__dark'
  };

  return (
    <span className={cx('loader', [themes[theme]])}>
      <div className={cx('loader_indicator')} />
      <div className={cx('loader_indicator')} />
      <div className={cx('loader_indicator')} />
    </span>
  );
};

Load.defaultProps = {
  theme: 'primary'
};

Load.propTypes = {
  theme: PropTypes.oneOf(['primary', 'light', 'dark'])
};

export default Load;
