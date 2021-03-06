import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {
  sub,
  add,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  setYear,
  isBefore,
  isAfter,
  addDays
} from 'date-fns';
import nl from 'date-fns/locale/nl';
import { ChevronLeft, ChevronRight } from '../Utilities/Icons';
import Typography from '../Typography';
import Button from '../Button';
import styles from './calendar.scss';

const Calendar = ({
  defaultValue,
  defaultOpenDate,
  onChange,
  showYear,
  min,
  max,
  only,
  inverse
}) => {
  const cx = classnames.bind(styles);

  const { Text } = Typography;

  const [date, setDate] = useState(defaultValue);
  const [showDate, setShowDate] = useState(defaultOpenDate);
  const [weekdays, setWeekdays] = useState([]);

  const changeMonth = (type) => {
    if (type === 'subtract') {
      return setShowDate(sub(showDate, { months: 1 }));
    }

    return setShowDate(add(showDate, { months: 1 }));
  };

  const days = eachDayOfInterval({
    start: startOfMonth(showDate),
    end: endOfMonth(showDate)
  });

  const handleChange = (day) => {
    setDate(day);
    onChange(day);
  };

  const handleYearChange = (year) => {
    if (!Number(year)) {
      return;
    }

    if (year.length === 4) {
      setShowDate(setYear(showDate, year));
    }
  };

  const isIncludedInOnly = (value) => {
    for (let i = 0; i < only.length; i += 1) {
      if (isSameDay(only[i], value)) {
        return true;
      }
    }
  };

  useEffect(() => {
    const newWeekdays = [];

    for (let i = 0; i < 7; i++) {
      const newDate = addDays(startOfMonth(showDate), i);

      newWeekdays[i] = format(newDate, 'EEEEEE', nl);
    }

    setWeekdays(newWeekdays);
  }, [showDate]);

  return (
    <div className={cx('calendar', { calendar__inverse: inverse })}>
      <div className={cx('calendar_top')}>
        <Button
          small
          theme={!inverse ? 'light' : 'transparent'}
          onClick={() => changeMonth('subtract')}
        >
          <ChevronLeft />
        </Button>

        {showYear && (
          <input
            className={cx('calendar_top_year', {
              calendar_top_year__inverse: inverse
            })}
            onChange={(event) => handleYearChange(event.target.value)}
            size={4}
            maxLength={4}
            defaultValue={format(showDate, 'yyyy')}
          />
        )}
        <Text inverse={inverse} bold>
          {format(showDate, 'MMMM')}
        </Text>

        <Button
          small
          theme={!inverse ? 'light' : 'transparent'}
          onClick={() => changeMonth('add')}
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      <div className={cx('calendar_weekdays')}>
        {weekdays.map((day) => (
          <Text key={day} small light>
            {day}
          </Text>
        ))}
      </div>

      <div className={cx('calendar_wrapper')}>
        <div className={cx('calendar_days')}>
          {days.map((day) => (
            <div
              key={day}
              role="button"
              tabIndex={0}
              onClick={() => handleChange(day)}
              onKeyPress={() => handleChange(day)}
              className={cx('calendar_days_day', {
                calendar_days_day__selected: isSameDay(day, date),
                calendar_days_day__disabled:
                  (min && isBefore(day, min)) ||
                  (max && isAfter(day, max)) ||
                  (only && !isIncludedInOnly(day))
              })}
            >
              <Text inverse={isSameDay(day, date) || inverse}>
                {format(day, 'd')}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Calendar.defaultProps = {
  defaultValue: undefined,
  defaultOpenDate: new Date(),
  showYear: false,
  min: undefined,
  max: undefined,
  only: undefined,
  inverse: false
};

Calendar.propTypes = {
  defaultValue: PropTypes.instanceOf(Date),
  defaultOpenDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  showYear: PropTypes.bool,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  only: PropTypes.arrayOf(Date),
  inverse: PropTypes.bool
};

export default Calendar;
