import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { X } from 'react-feather';
import styles from './modal.scss';
import Button from '../Button';

const Modal = ({
  children,
  open,
  confirmText,
  denyText,
  onConfirm,
  onDeny,
  denyButton,
}) => {
  const cx = classnames.bind(styles);

  const [visibility, setVisibility] = useState(open);

  return (
    visibility && (
      <div className={cx('modal')}>
        <div className={cx('modal-body')}>
          <div className={cx('modal-body-header')}>
            <Button
              theme="clear"
              icon={<X size={14} />}
              small
              onClick={() => setVisibility(false)}
            />
          </div>
          <div className={cx('modal-body-content')}>{children}</div>
          <div className={cx('modal-body-footer')}>
            {denyButton && (
              <Button onClick={() => onDeny} small theme="secondary">
                {denyText}
              </Button>
            )}
            <Button onClick={() => onConfirm} small>
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

Modal.defaultProps = {
  open: false,
  confirmText: 'Ja',
  denyText: 'Nee',
  onDeny: () => {},
  denyButton: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  confirmText: PropTypes.string,
  denyText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onDeny: PropTypes.func,
  denyButton: PropTypes.bool,
};

export default Modal;
