import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './progress.scss';

const Progress = ({ value, theme, indicator }) => {
  const cx = classnames.bind(styles);

  const themes = {
    secondary: 'progress_bar__secondary',
    success: 'progress_bar__success',
    danger: 'progress_bar__danger',
  };

  return (
    <div className={cx('progress')}>
      <div
        className={cx('progress_bar', [themes[theme]])}
        style={{ width: `${value}%` }}
      >
        {indicator && (
          <span className={cx('progress_indicator')}>{`${value}%`}</span>
        )}
      </div>
    </div>
  );
};

Progress.defaultProps = {
  theme: null,
  indicator: false,
  value: 0,
};

Progress.propTypes = {
  indicator: PropTypes.bool,
  theme: PropTypes.oneOf(['success', 'danger']),
  value: PropTypes.number,
};

export default Progress;
