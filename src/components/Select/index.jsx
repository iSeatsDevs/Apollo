import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Typography from '../Typography';
import Input from '../Input';
import styles from './select.scss';
import Indicator from '../Utilities/Indicator';
import Closeable from '../Utilities/Closeable';

const cx = classnames.bind(styles);

const { Text } = Typography;

const reducer = (state, action) => {
  switch (action.type) {
    case 'select':
      return state.map((item) => {
        if (item.value === action.payload) {
          return {
            ...item,
            selected: true
          };
        }

        return { ...item };
      });
    case 'deselect':
      return state.map((item) => {
        if (item.value === action.payload) {
          return {
            ...item,
            selected: false
          };
        }

        return { ...item };
      });
    case 'select-only':
      return state.map((item) => {
        if (item.value === action.payload) {
          return {
            ...item,
            selected: true
          };
        }

        return {
          ...item,
          selected: false
        };
      });
    default:
      return state;
  }
};

const Select = ({
  placeholder,
  options,
  defaultOpen,
  defaultValue,
  onChange,
  multiple,
  label,
  message,
  success,
  danger,
  emptyText,
  noBorder,
  small
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const [values, dispatchValues] = useReducer(
    reducer,
    options.map((option) => {
      if (Array.isArray(defaultValue)) {
        return { ...option, selected: defaultValue.includes(option.value) };
      }

      return { ...option, selected: option.value === defaultValue };
    })
  );

  /**
   * Every option that is currently selected
   */
  const filteredValues = values.filter((option) => option.selected === true);

  /**
   * This is what will be used as the actual input. Using the <Input/>
   * components `renderInput` prop, we can inject this component.
   */
  const CustomInput = ({ small, noBorder }) => (
    <div
      className={cx('select', {
        select__empty: filteredValues.length === 0,
        select__open: open,
        select__success: success,
        select__danger: danger,
        select__small: small,
        select__no_border: noBorder
      })}
    >
      <div
        className={cx('select_input', {
          select_input__multiple: multiple
        })}
      >
        {/**
         * If the multiple prop has been set and there is at least 1
         * value selected show the custom value element.
         *
         * If there's only 1 value selected we will show the normal label
         *
         * If any of the above tests fail we will return the placeholder.
         */}
        {(multiple &&
          filteredValues.length >= 1 &&
          filteredValues.map((value) => (
            <div key={value} className={cx('select_input_value')}>
              <span className={cx('select_input_value_label')}>
                {value.label}
              </span>
              <span className={cx('select_input_value_close')}>
                <Closeable
                  onClick={() =>
                    dispatchValues({ type: 'deselect', payload: value.value })
                  }
                />
              </span>
            </div>
          ))) ||
          (filteredValues.length === 1 && filteredValues[0].label) ||
          placeholder}
      </div>

      <Indicator onClick={() => setOpen(!open)} open={open} />
    </div>
  );

  /**
   * The <Option/> element is used for inside the `.select_options` element.
   */
  const Option = ({
    optionValue,
    optionLabel,
    optionSelected,
    optionOnClick
  }) => (
    <div
      key={optionValue}
      onClick={() => optionOnClick(optionValue)}
      onKeyPress={() => optionOnClick(optionValue)}
      role="button"
      tabIndex={0}
      className={cx('select_option', {
        select_option__multiple: multiple
      })}
    >
      <Text link={optionSelected}>{optionLabel}</Text>
    </div>
  );

  Option.propTypes = {
    optionValue: PropTypes.string.isRequired,
    optionLabel: PropTypes.string.isRequired,
    optionSelected: PropTypes.bool.isRequired,
    optionOnClick: PropTypes.func.isRequired
  };

  useEffect(() => {
    if (!multiple) {
      setOpen(false);
    }

    onChange(values);
  }, [values]);

  return (
    <div>
      <Input
        label={label}
        placeholder={placeholder}
        message={message}
        success={success}
        danger={danger}
        renderInput={<CustomInput noBorder={noBorder} small={small} />}
      />

      {open && (
        <div className={cx('select_options')}>
          {values.filter((value) => !value.selected).length === 0 ? (
            <div className={cx('select_options_empty')}>
              <Text small light>
                {emptyText}
              </Text>
            </div>
          ) : (
            values
              .filter((value) => {
                if (multiple) {
                  return !value.selected;
                }

                return true;
              })
              .map((option) => (
                <Option
                  key={option.label}
                  optionLabel={option.label}
                  optionValue={option.value}
                  optionSelected={option.selected}
                  optionOnClick={() =>
                    dispatchValues({
                      type: multiple ? 'select' : 'select-only',
                      payload: option.value
                    })
                  }
                />
              ))
          )}
        </div>
      )}
    </div>
  );
};

Select.defaultProps = {
  placeholder: 'Selecteer',
  options: undefined,
  defaultOpen: false,
  defaultValue: null,
  onChange: () => {},
  multiple: false,
  label: undefined,
  message: null,
  success: false,
  danger: false,
  emptyText: 'No options available',
  noBorder: false,
  small: false
};

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  defaultOpen: PropTypes.bool,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  emptyText: PropTypes.string,
  noBorder: PropTypes.bool,
  small: PropTypes.bool
};

export default Select;
