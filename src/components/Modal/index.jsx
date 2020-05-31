import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { X } from '../Utilities/Icons';
import styles from './modal.scss';
import Button from '../Button';

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

  return (
    <div className={cx('modal')}>
      <div className={cx('modal-body')}>
        <div className={cx('modal-body-header')}>
          <Button theme="clear" icon={<X size={14} />} small onClick={onExit} />
        </div>
        <div className={cx('modal-body-content')}>{children}</div>
        <div className={cx('modal-body-footer')}>
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
  confirmText: 'Ja',
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
