import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './typography.scss';
import {
  getEnabledEffects,
  getEffectsPropTypes,
  getEffectsDefaults,
} from './typography_helpers';

const Title = ({
  level,
  children,
  dontPush,
  light,
  bold,
  underline,
  mark,
  inverse,
}) => {
  const cx = classnames.bind(styles);

  const Tag = `h${level}`;

  return (
    <Tag
      className={cx(
        'typography',
        'typography_title',
        `typography_title__level_${level}`,
        {
          ...getEnabledEffects({
            light,
            bold,
            underline,
            mark,
            inverse,
          }),
          typography_title__dont_push: dontPush,
        }
      )}
    >
      {children}
    </Tag>
  );
};

Title.defaultProps = {
  ...getEffectsDefaults(),
  level: 1,
  dontPush: false,
};

Title.propTypes = {
  ...getEffectsPropTypes(),
  dontPush: PropTypes.bool,
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

export default Title;
