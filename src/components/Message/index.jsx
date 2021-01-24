import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './message.scss';
import Closeable from '../Utilities/Closeable';

const Message = ({ theme, children, closeable }) => {
  const cx = classnames.bind(styles);
  const [hidden, setHidden] = useState(false);

  const themes = {
    primary: 'message__primary',
    secondary: 'message__secondary',
    success: 'message__success',
    warning: 'message__warning',
    danger: 'message__danger',
    light: 'message__light'
  };

  const render = !hidden && (
    <div className={cx('message', [themes[theme]])}>
      {closeable && (
        <div className={cx('message_closeable')}>
          <Closeable
            white={theme !== 'secondary'}
            onClick={() => setHidden(true)}
          />
        </div>
      )}
      {children}
    </div>
  );

  return render;
};

Message.defaultProps = {
  closeable: false,
  theme: 'primary'
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  closeable: PropTypes.bool,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'light',
    'success',
    'warning',
    'danger'
  ])
};

export default Message;
