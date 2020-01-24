import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Input from '../Input';
import Button from '../Button';
import styles from './numberinput.scss';

const NumberInput = ({
  defaultValue,
  max,
  min,
  step,
  onChange,
  label,
  precision,
  disabled,
  currency,
  success,
  danger,
  message,
}) => {
  const cx = classnames.bind(styles);

  const [value, setValue] = useState(defaultValue);

  const handleChange = type => {
    if (type === 'increment') {
      if (value === max) {
        return;
      }

      setValue(value + step);
    } else {
      if (value === min) {
        return;
      }

      setValue(value - step);
    }
  };

  const CustomInput = () => (
    <div
      className={cx('numberinput', {
        numberinput__success: success,
        numberinput__danger: danger,
      })}
    >
      <Button theme="clear" onClick={() => handleChange('decrement')}>
        <ChevronLeft />
      </Button>
      <span>
        {currency
          ? new Intl.NumberFormat(currency.locale, {
              style: 'currency',
              currency: currency.format,
            }).format(value)
          : Number.parseFloat(value).toFixed(precision)}
      </span>
      <Button theme="clear" onClick={() => handleChange('increment')}>
        <ChevronRight />
      </Button>
    </div>
  );

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Input
      disabled={disabled}
      label={label}
      success={success}
      danger={danger}
      message={message}
      renderInput={<CustomInput />}
    />
  );
};

NumberInput.defaultProps = {
  defaultValue: 0,
  max: undefined,
  min: 0,
  step: 1,
  onChange: undefined,
  label: undefined,
  precision: 0,
  disabled: false,
  currency: undefined,
  success: false,
  danger: false,
  message: null,
};

NumberInput.propTypes = {
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string,
  precision: PropTypes.number,
  disabled: PropTypes.bool,
  currency: PropTypes.shape({
    locale: PropTypes.string,
    format: PropTypes.string,
  }),
  success: PropTypes.bool,
  danger: PropTypes.bool,
  message: PropTypes.string,
};

export default NumberInput;
