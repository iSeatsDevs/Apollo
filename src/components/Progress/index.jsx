import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './progress.scss';

const Progress = ({ value, theme }) => {
  const cx = classnames.bind(styles);

  const themes = {
    secondary: 'progress_bar__secondary',
    success: 'progress_bar__success',
    danger: 'progress_bar__danger'
  };

  return (
    <div className={cx('progress')}>
      <div
        className={cx('progress_bar', [themes[theme]])}
        style={{ width: `${value}%` }}
      >
    
      </div>
    </div>
  );
};

Progress.defaultProps = {
  theme: null,
  value: 0
};

Progress.propTypes = {
  theme: PropTypes.oneOf(['success', 'danger']),
  value: PropTypes.number
};

export default Progress;
