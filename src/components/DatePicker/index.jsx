import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { format as useFormat } from 'date-fns';
import onClickOutside from 'react-onclickoutside';
import Input from '../Input';
import Calendar from '../Calendar';
import styles from './datepicker.scss';

const DatePicker = ({
  defaultValue,
  onChange,
  placeholder,
  format,
  label,
  success,
  danger,
  message,
  icon,
}) => {
  const cx = classnames.bind(styles);

  const [date, setDate] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleChange = value => {
    setDate(value);
    onChange(value);
  };

  useEffect(() => setOpen(false), [date]);

  DatePicker.handleClickOutside = () => setOpen(false);

  return (
    <div className={cx('datepicker')}>
      <Input
        readOnly
        success={success}
        danger={danger}
        icon={icon}
        label={label}
        message={message}
        placeholder={placeholder}
        forceValue={date && useFormat(date, format)}
        defaultValue={defaultValue && useFormat(date, format)}
        onFocus={() => setOpen(true)}
      />

      {open && (
        <div className={cx('datepicker_calendar')}>
          <Calendar
            onChange={newDate => handleChange(newDate)}
            defaultOpenDate={date || undefined}
            defaultValue={date}
          />
        </div>
      )}
    </div>
  );
};

DatePicker.defaultProps = {
  defaultValue: undefined,
  placeholder: 'Pick a date',
  format: 'yyyy-MM-dd',
  success: false,
  danger: false,
  message: null,
  label: null,
  icon: undefined,
};

DatePicker.propTypes = {
  defaultValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  message: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
};

const clickOutsideConfig = {
  handleClickOutside: () => DatePicker.handleClickOutside,
};

export { DatePicker };

export default onClickOutside(DatePicker, clickOutsideConfig);
