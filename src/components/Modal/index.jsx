import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './modal.scss';
import Closeable from '../Utilities/Closeable';

const Modal = ({ children, onClose }) => {
  const cx = classnames.bind(styles);

  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className={cx('modal')}>
      <div className={cx('modal_body')}>
        <div className={cx('modal_body_header')}>
          <span className={cx('modal_close')}>
            <Closeable onClick={onClose} />
          </span>
        </div>

        <div className={cx('modal_body_content')}>{children}</div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
