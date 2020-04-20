/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { ArrowUp } from 'react-feather';
import styles from './typography.scss';
import Text from './text';
import {
  getEnabledEffects,
  getEffectsPropTypes,
  getEffectsDefaults,
} from './typography_helpers';

const Paragraph = ({
  children,
  ellipses,
  small,
  light,
  bold,
  underline,
  mark,
  inverse,
}) => {
  const cx = classnames.bind(styles);

  const [visible, setVisible] = useState(false);

  const truncateString = (string, length) => {
    let useLength = 24;

    if (typeof length !== 'boolean') {
      useLength = length;
    }

    // Increase length amount
    useLength *= 5;

    let trimmed = string.substr(0, useLength);

    // Trim if middle of a word
    trimmed = trimmed.substr(
      0,
      Math.min(trimmed.length, trimmed.lastIndexOf(' '))
    );

    return trimmed;
  };

  return (
    <p
      className={cx('typography', 'typography_paragraph', {
        ...getEnabledEffects({
          light,
          bold,
          underline,
          mark,
          inverse,
        }),
        typography__small: small,
      })}
    >
      {ellipses
        ? visible
          ? children
          : truncateString(children, ellipses)
        : children}
      {ellipses && (
        <span className={cx('typography_paragraph_ellipses')}>
          <Text onClick={() => setVisible(!visible)}>
            {visible ? (
              <span className={cx('typography_paragraph_arrow')}>
                <ArrowUp size={16} />
              </span>
            ) : (
              '...'
            )}
          </Text>
        </span>
      )}
    </p>
  );
};

Paragraph.defaultProps = {
  ...getEffectsDefaults(),
  ellipses: false,
  small: false,
};

Paragraph.propTypes = {
  ...getEffectsPropTypes(),
  children: PropTypes.node.isRequired,
  ellipses: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  small: PropTypes.bool,
};

export default Paragraph;
