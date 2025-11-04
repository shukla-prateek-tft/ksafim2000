import React from 'react';
import styles from './ListBox.module.scss';
import { attachMultipleClasses } from '@/Languages';
import {
  ListBoxOrientation,
  ListBoxScale,
  ListBoxSizes,
  ListBoxVariants,
  Option
} from '@/types/ui/listBox';
import { Label } from '@/ui/Label';
import { useAuth } from '@/hooks';

interface ListBoxProps {
  label?: string;
  options: Option[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  orientation?: ListBoxOrientation;
  scale?: ListBoxScale;
  variant?: ListBoxVariants;
  size?: ListBoxSizes;
}

const ListBox: React.FC<ListBoxProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  placeholder,
  orientation = 'vertical',
  scale,
  variant = 'outlined',
  size = 'fullWidth'
}) => {
  
  const {isMunicipality}=useAuth()
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, opt => opt.value);
    onChange(selected);
  };

  const WrapperClassName = attachMultipleClasses(
    styles.Wrapper,
    styles[orientation],
    styles[`scale-${uiScale}`],
    styles[`variant-${variant}`],
    styles[`size-${size}`]
  );

  return (
    <div className={WrapperClassName}>
      <Label label={label} />

      <div className={styles.block}>
        <div className={styles.box}>
          <select
            multiple
            className={styles.MultiSelect}
            value={selectedValues}
            onChange={handleChange}
            size={Math.min(options.length, 6)}
          >
            {placeholder && (
              <option disabled value="">
                {placeholder}
              </option>
            )}
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
