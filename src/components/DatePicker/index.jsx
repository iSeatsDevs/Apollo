import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { format as useFormat } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DatePicker as ReactDatePicker } from 'react-nice-dates';
import Input from '../Input';
import './datepicker.scss';

const DatePicker = ({
  placeholder,
  format,
  label,
  success,
  danger,
  message,
  icon,
}) => {
  const [date, setDate] = useState();

  return (
    <ReactDatePicker date={date} onDateChange={setDate} locale={enGB}>
      {({ inputProps }) => (
        <Input
          readOnly
          icon={icon}
          label={label}
          message={message}
          forceValue={date ? useFormat(new Date(date), format) : placeholder}
          placeholder={placeholder}
          onChange={inputProps.onChange}
          onFocus={inputProps.onFocus}
        />
      )}
    </ReactDatePicker>
  );
};

DatePicker.defaultProps = {
  placeholder: 'Pick a date',
  format: 'yyyy-MM-dd',
  success: false,
  danger: false,
  message: null,
  label: null,
  icon: undefined,
};

DatePicker.propTypes = {
  placeholder: PropTypes.string,
  format: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  message: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
};

export default DatePicker;
