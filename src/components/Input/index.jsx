import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Eye, EyeAlt } from '../Utilities/Icons';
import Typography from '../Typography';
import styles from './input.scss';
import Closeable from '../Utilities/Closeable';

const Input = ({
  placeholder,
  message,
  danger,
  success,
  defaultValue,
  onChange,
  onFocus,
  clearable,
  visibilityControls,
  hidden,
  label,
  icon,
  disabled,
  block,
  renderInput,
  readOnly,
  forceValue,
  small,
  noBorder
}) => {
  const cx = classnames.bind(styles);

  const { Text } = Typography;

  const [value, setValue] = useState(defaultValue);
  const [isHidden, setIsHidden] = useState(hidden);

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const useTheme = (options) => {
    const enabledTheme = Object.keys(options).filter(
      (option) => options[option]
    );

    return enabledTheme[0];
  };

  const getValidationState = (options) => {
    const obj = {};

    const theme = useTheme(options);

    if (!theme) {
      return {};
    }

    obj[`inputwrapper_input__${useTheme(options)}`] = true;

    return obj;
  };

  return (
    <div
      className={cx('inputwrapper', {
        inputwrapper__block: block
      })}
    >
      {label && (
        <Text push small>
          {label}
        </Text>
      )}

      {renderInput || (
        <div
          className={cx('inputwrapper_input', {
            ...getValidationState({ success, danger }),
            inputwrapper_input__disabled: disabled,
            inputwrapper_input__small: small,
            inputwrapper_input__no_border: noBorder
          })}
        >
          {icon && <span className={cx('inputwrapper_icon')}>{icon}</span>}

          <input
            disabled={disabled}
            className={cx('input', {
              input__small: small
            })}
            onChange={(val) => handleChange(val.target.value)}
            placeholder={placeholder}
            value={forceValue || value}
            onFocus={onFocus}
            readOnly={readOnly}
            type={isHidden ? 'password' : 'input'}
          />

          {visibilityControls && (
            <span
              className={cx('inputwrapper_eye')}
              role="button"
              tabIndex={0}
              onClick={() => setIsHidden(!isHidden)}
              onKeyPress={() => setIsHidden(!isHidden)}
            >
              {isHidden ? <Eye /> : <EyeAlt />}
            </span>
          )}
          {clearable && <Closeable onClick={() => handleChange('')} />}
        </div>
      )}

      {message && <Text theme={useTheme({ success, danger })}>{message}</Text>}
    </div>
  );
};

Input.defaultProps = {
  placeholder: undefined,
  message: undefined,
  danger: false,
  success: false,
  defaultValue: '',
  onChange: () => {},
  onFocus: () => {},
  clearable: false,
  hidden: false,
  visibilityControls: false,
  label: undefined,
  icon: undefined,
  disabled: false,
  block: false,
  renderInput: undefined,
  readOnly: false,
  forceValue: null,
  small: false,
  noBorder: false
};

Input.propTypes = {
  placeholder: PropTypes.string,
  message: PropTypes.string,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  clearable: PropTypes.bool,
  hidden: PropTypes.bool,
  visibilityControls: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  renderInput: PropTypes.node,
  readOnly: PropTypes.bool,
  forceValue: PropTypes.string,
  small: PropTypes.bool,
  noBorder: PropTypes.bool
};

export default Input;
