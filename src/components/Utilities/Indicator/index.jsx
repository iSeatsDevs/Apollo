import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { ChevronDown } from 'react-feather';
import styles from './indicator.scss';

const cx = classnames.bind(styles);

const Indicator = ({ open, onClick }) => (
  <div
    className={cx('indicator')}
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex={0}
    role="button"
  >
    <span className={cx('indicator_icon', { indicator_icon__open: open })}>
      <ChevronDown size={20} />
    </span>
  </div>
);

Indicator.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Indicator;
