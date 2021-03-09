import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Check } from '../Utilities/Icons';
import styles from './checkbox.scss';
import Typography from '../Typography';

const Checkbox = ({
  onChange,
  defaultValue,
  label,
  success,
  danger,
  disabled,
  inverse
}) => {
  const cx = classnames.bind(styles);
  const [value, setValue] = useState(defaultValue);

  const handleChange = () => {
    setValue(!value);
    onChange(!value);
  };

  const { Text } = Typography;

  return (
    <div className={cx('checkbox_wrapper')}>
      <span
        className={cx('checkbox_input', {
          checkbox_input__danger: danger,
          checkbox_input__success: success,
          checkbox_input__checked: value,
          checkbox_input__disabled: disabled,
          checkbox_input__inverse: inverse
        })}
        role="checkbox"
        tabIndex={0}
        aria-checked={value}
        onClick={() => !disabled && handleChange()}
        onKeyPress={() => !disabled && handleChange()}
      >
        {value && <Check size={17} />}
      </span>

      {label && (
        <Text
          small
          inverse={inverse}
          theme={(danger && 'danger') || (success && 'success') || null}
        >
          {label}
        </Text>
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  defaultValue: false,
  disabled: false,
  label: null,
  success: false,
  danger: false,
  inverse: false
};

Checkbox.propTypes = {
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  inverse: PropTypes.bool
};

export default Checkbox;
