import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';
import { attachMultipleClasses, parseDateInput } from '@/utils/commonHelper';
import { DateTime } from 'luxon';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth, useLanguage } from '@/hooks';
import {
  DatePickerAutoComplete,
  DatePickerDropdownMode,
  DatePickerOrientation,
  DatePickerScale,
  DatePickerSize,
  DatePickerVariant
} from '@/types/ui/datePicker';
import { DATEPICKER_MODAL_HIDE_CLASSNAME } from '@/constants/appConstant';
import { Label } from '@/ui/Label';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface DatePickerComponentProps {
  selectedDate: Date | string | null;
  onChange: (date: Date | string | null) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  dropdownMode?: DatePickerDropdownMode;
  popperClassName?: string;
  autoComplete?: DatePickerAutoComplete;
  isCustomBlur?: boolean;
  onBlur?: (date: Date | undefined) => void;
  isTypeISO?: boolean;
  variant?: DatePickerVariant;
  scale?: DatePickerScale;
  size?: DatePickerSize;
  orientation?: DatePickerOrientation;
  id?: string;
  minDate?: Date;
  error?: string;
  onFocus?: () => void;
  tabIndex?: number;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  selectedDate,
  onChange,
  placeholder,
  disabled = false,
  label = '',
  dropdownMode = 'select',
  popperClassName = 'dateSelector',
  autoComplete = 'off',
  isCustomBlur = false,
  onBlur,
  isTypeISO,
  size = 'sm',
  scale ,
  variant = 'outlined',
  orientation = 'vertical',
  id,
  minDate,
  error,
  onFocus,
  ...props
}: Partial<DatePickerComponentProps>) => {
  const {isMunicipality}=useAuth()
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const datePickerFormat = 'dd.MM.yyyy';
  const finalPlaceholder = placeholder ?? '';

  const handleRawChange = useCallback(
    (e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
      if (!onChange || !e) return;
      const { value } = e.target as HTMLInputElement;
      if (value?.length < 6) return;

      const parsed = parseDateInput(value);
      onChange(parsed);
    },
    [onChange]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (isCustomBlur && onBlur) {
        const parsedDate = parseDateInput(e.target.value);
        onBlur(parsedDate || undefined);
      }
    },
    [onBlur, isCustomBlur]
  );

  const formatDate = useCallback(
    (date: Date | null): string | Date | null =>
      isTypeISO && date ? DateTime.fromJSDate(date).toISODate() : date,
    [isTypeISO]
  );

  const handleOnSelect = (date: Date | null): void => {
    if (!onChange) return;
    onChange(formatDate(date));
  };

  const handleCalendarOpen = useCallback(() => setIsOpen(true), []);

  const handleCalendarClose = useCallback(() => setTimeout(() => setIsOpen(false), 0), []);

  const memoizedSelectedDate = useMemo(() => {
    if (!selectedDate) return null;
    return isTypeISO ? new Date(selectedDate) : (selectedDate as Date);
  }, [selectedDate, isTypeISO]);

  const datePickerClassNames = attachMultipleClasses(
    styles.datePickerInput,
    error && styles.validation
  );
  const wrapperClassName = attachMultipleClasses(
    styles.datePickerWrapper,
    styles[`variant-${variant}`],
    styles[`scale-${uiScale}`],
    styles[`size-${size}`],
    styles[orientation],
    isOpen && DATEPICKER_MODAL_HIDE_CLASSNAME
  );

  return (
    <div className={wrapperClassName}>
      <Label label={label} />
      <DatePicker
        portalId="root"
        onCalendarOpen={handleCalendarOpen}
        onCalendarClose={handleCalendarClose}
        selected={memoizedSelectedDate}
        placeholderText={finalPlaceholder}
        wrapperClassName={datePickerClassNames}
        className={styles.dateInput}
        disabled={disabled}
        dateFormat={datePickerFormat}
        locale={locale}
        showMonthDropdown
        showYearDropdown
        dropdownMode={dropdownMode}
        popperClassName={popperClassName}
        autoComplete={autoComplete}
        strictParsing
        onSelect={handleOnSelect}
        onChangeRaw={handleRawChange}
        onBlur={handleBlur}
        minDate={minDate}
        id={id}
        onFocus={onFocus}
        {...props}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default DatePickerComponent;
