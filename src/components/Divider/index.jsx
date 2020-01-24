import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './divider.scss';

const Divider = ({ dashed }) => {
  const cx = classnames.bind(styles);

  return <div className={cx('divider', { divider__dashed: dashed })} />;
};

Divider.defaultProps = {
  dashed: false,
};

Divider.propTypes = {
  dashed: PropTypes.bool,
};

export default Divider;
