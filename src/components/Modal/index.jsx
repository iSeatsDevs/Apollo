import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { X } from '../Utilities/Icons';
import styles from './modal.scss';
import Button from '../Button';
import Closeable from '../Utilities/Closeable';

const Modal = ({
  children,
  confirmText,
  denyText,
  onConfirm,
  onDeny,
  onExit,
  danger,
  success,
  denyButton
}) => {
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
          <Closeable onClick={onExit} />
        </div>

        {children}

        <div className={cx('modal_body_footer')}>
          {denyButton && (
            <Button onClick={onDeny} small theme="secondary">
              {denyText}
            </Button>
          )}
          <Button
            theme={(danger && 'danger') || (success && 'success')}
            onClick={onConfirm}
            small
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  confirmText: 'Oke',
  denyText: 'Nee',
  onDeny: () => {},
  onExit: () => {},
  danger: false,
  success: false,
  denyButton: false
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  confirmText: PropTypes.string,
  denyText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onDeny: PropTypes.func,
  onExit: PropTypes.func,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  denyButton: PropTypes.bool
};

export default Modal;
