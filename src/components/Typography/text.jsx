/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './typography.scss';
import {
  getEnabledEffects,
  getEffectsPropTypes,
  getEffectsDefaults,
} from './typography_helpers';

const Text = ({
  children,
  theme,
  onClick,
  link,
  small,
  push,
  light,
  bold,
  underline,
  mark,
  inverse,
}) => {
  const cx = classnames.bind(styles);

  const themes = {
    success: 'typography_text__success',
    warning: 'typography_text__warning',
    danger: 'typography_text__danger',
    inverse: 'typography_text__inverse',
  };

  return (
    <span
      {...((onClick || link) && {
        onClick,
        onKeyPress: onClick,
        tabIndex: 0,
        role: link ? 'link' : 'button',
      })}
      className={cx('typography', 'typography_text', [themes[theme]], {
        ...getEnabledEffects({
          light,
          bold,
          underline,
          mark,
          inverse,
        }),
        typography_text__clickable: !!onClick,
        typography_text__small: small,
        typography_text__link: link,
        typography_text__push: push,
      })}
    >
      {children}
    </span>
  );
};

Text.defaultProps = {
  ...getEffectsDefaults(),
  link: false,
  onClick: undefined,
  push: false,
  small: false,
  theme: null,
};

Text.propTypes = {
  ...getEffectsPropTypes(),
  children: PropTypes.node.isRequired,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  push: PropTypes.bool,
  small: PropTypes.bool,
  theme: PropTypes.oneOf(['success', 'warning', 'danger']),
};

export default Text;
