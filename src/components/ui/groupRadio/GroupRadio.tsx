import { attachMultipleClasses } from '@/Languages';
import styles from './GroupRadio.module.scss';

interface GroupRadioProps<T> {
  options: { label: string; value: T }[];
  name: string;
  selectedValue: T;
  onChange: (value: T) => void;
  title?: string;
  labelClassName?: string;
  inputLabelClassName?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
}

const GroupRadio = <T extends string | number>({
  options,
  name,
  selectedValue,
  onChange,
  title,
  labelClassName,
  inputLabelClassName,
  className,
  disabled,
  id
}: GroupRadioProps<T>) => {
  return (
    <div className={attachMultipleClasses(styles.container, className)}>
      {title && <label className={attachMultipleClasses(labelClassName)}>{title}</label>}
      <div>
        {options.map(option => (
          <label
            key={option.value}
            className={attachMultipleClasses(styles.label, inputLabelClassName)}
          >
            <input
              disabled={disabled}
              type="radio"
              id={id}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className={attachMultipleClasses(styles.input, disabled && styles.disabled)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GroupRadio;
