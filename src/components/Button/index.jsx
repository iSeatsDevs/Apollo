import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './button.scss';
import Load from '../Load';

const Button = ({
  children,
  onClick,
  disabled,
  theme,
  small,
  loading,
  block,
  icon,
  iconRight
}) => {
  const cx = classnames.bind(styles);

  const themes = {
    primary: 'button__primary',
    secondary: 'button__secondary',
    success: 'button__success',
    danger: 'button__danger',
    warning: 'button__warning',
    light: 'button__light',
    transparent: 'button__transparent'
  };

  return (
    <button
      disabled={disabled || loading}
      onClick={loading ? () => {} : onClick}
      type="button"
      tabIndex={0}
      className={cx('button', [themes[theme]], {
        button__small: small,
        button__loading: loading,
        button__block: block,
        button__reverse: iconRight
      })}
    >
      {icon && <span className={cx('button_icon')}>{icon}</span>}
      {loading ? <Load theme="light" /> : children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  block: false,
  disabled: false,
  loading: false,
  small: false,
  icon: undefined,
  iconRight: false,
  children: null
};

Button.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'light',
    'transparent'
  ]),
  icon: PropTypes.node,
  iconRight: PropTypes.bool
};

export default Button;
