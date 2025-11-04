import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';
import { attachMultipleClasses, parseDateInput } from '@/utils/commonHelper';
import { he } from 'date-fns/locale';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { DATEPICKER_MODAL_HIDE_CLASSNAME } from '@/constants/appConstant';

interface DatePickerComponentProps extends DatePickerProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
  placeholder: string;
  className: string;
  datePickerClassName: string;
  disabled: boolean;
  label: string;
  labelClassName: string;
  dropdownMode: 'select';
  popperClassName: string;
  autoComplete: 'off';
  onSelect: (date: Date) => void;
  isCustomBlur?: boolean;
  onBlur?: (date: Date) => void;
  isTypeISO?: boolean;
}

const DatePickerComponent = ({
  selectedDate,
  onSelect,
  onChange,
  placeholder = 'בחר תאריך',
  className = '',
  datePickerClassName = '',
  disabled = false,
  label = '',
  labelClassName = '',
  dropdownMode = 'select',
  popperClassName = 'dateSelector',
  autoComplete = 'off',
  isCustomBlur = false,
  onBlur,
  isTypeISO,
  ...props
}: Partial<DatePickerComponentProps>) => {
  const currentLanguage = import.meta.env.VITE_DEFAULT_LANGUAGE || 'he';
  const locale = currentLanguage === 'he' ? he : undefined;
  const [isOpen, setIsOpen] = useState(false);

  const handleRawChange = (e: MouseEvent | KeyboardEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (e.target.value.length < 6) return;
    const dateObj = parseDateInput(e.target.value);

    if (dateObj) {
      onChange && onChange(dateObj);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isCustomBlur) {
      const dateObj = parseDateInput(e.target.value);
      if (dateObj) {
        onBlur && onBlur(dateObj);
      }
    } else {
      onBlur && onBlur(e);
    }
  };

  const handleDateSelect = (date: Date | null) => {
    if (!onSelect) return;

    if (isTypeISO) {
      const isoDate = date instanceof Date ? DateTime.fromJSDate(date).toISODate() : null;
      onSelect(isoDate);
    } else {
      onSelect(date);
    }
  };

  return (
    <div
      className={`${styles.datePickerWrapper} ${className} ${isOpen ? DATEPICKER_MODAL_HIDE_CLASSNAME : ''}`}
    >
      {label && (
        <label className={attachMultipleClasses(styles.label, labelClassName)}>{label}</label>
      )}
      <DatePicker
        onCalendarClose={() => setTimeout(() => setIsOpen(false), 0)}
        onCalendarOpen={() => setIsOpen(true)}
        selected={!isTypeISO ? selectedDate : selectedDate ? new Date(selectedDate) : null}
        onChange={date => {
          !isTypeISO
            ? onChange && onChange(date)
            : onChange(date instanceof Date ? DateTime.fromJSDate(date).toISODate() : null);
        }}
        // onSelect={(date) => {
        //   !isTypeISO ?onSelect&& onSelect(date):
        //   onSelect(
        //     date instanceof Date ? DateTime.fromJSDate(date) : null
        //   );
        // }}
        onSelect={handleDateSelect}
        onChangeRaw={handleRawChange}
        placeholderText={placeholder}
        className={`${styles.datePickerInput} ${datePickerClassName}`}
        disabled={disabled}
        dateFormat="dd.MM.yyyy"
        locale={locale}
        showMonthDropdown
        showYearDropdown
        dropdownMode={dropdownMode}
        popperClassName={popperClassName}
        autoComplete={autoComplete}
        strictParsing={true}
        {...props}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default DatePickerComponent;
