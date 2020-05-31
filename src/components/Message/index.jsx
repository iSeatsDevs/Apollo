import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './message.scss';
import Closeable from '../Utilities/Closeable';

const Message = ({ theme, children, closeable }) => {
  const cx = classnames.bind(styles);
  const [hidden, setHidden] = useState(false);

  const themes = {
    success: 'message__success',
    warning: 'message__warning',
    danger: 'message__danger',
    secondary: 'message__secondary'
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
  theme: null
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  closeable: PropTypes.bool,
  theme: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger'])
};

export default Message;
