import React from 'react';
import styles from './GroupRadio.module.scss';

import {
  GroupRadioScale,
  GroupRadioVariants,
  GroupRadioSizes,
  GroupRadioOrientation,
  GroupTitlePositionTypes
} from '@/types/ui/groupRadio';
import { attachMultipleClasses } from '@/Languages';
import { Label } from '@/ui/Label';
import { Input } from '@/ui/Input';
import { useAuth } from '@/hooks';

interface GroupRadioProps<T> {
  options: { label: string; value: T }[];
  name: string;
  selectedValue: T;
  onChange: (value: T) => void;
  title?: string;
  disabled?: boolean;
  id?: string;
  orientation?: GroupRadioOrientation;
  isRtl?: boolean;
  scale?: GroupRadioScale;
  variant?: GroupRadioVariants;
  size?: GroupRadioSizes;
  inversed?: boolean;
  labelOrientation?: GroupRadioOrientation;
  titlePosition?:GroupTitlePositionTypes;
  tabIndex?: number;
}

const GroupRadio = <T,>({
  options,
  name,
  selectedValue,
  onChange,
  title,
  disabled,
  orientation = 'vertical',
  id,
  scale ,
  variant = 'outlined',
  size = 'md',
  labelOrientation = 'vertical',
  inversed = false,
  titlePosition='top',
  tabIndex,
}: GroupRadioProps<T>) => {
  const {isMunicipality}=useAuth()
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const wrapperClassName = attachMultipleClasses(
    styles.Wrapper,
    styles[`variant-${variant}`],
    styles[`scale-${uiScale}`],
    styles[`size-${size}`],
    styles[orientation],
  );

  const handleChange = (value: T) => {
    if (selectedValue !== value) {
      onChange(value); // select the new one
    } else {
      onChange(undefined as T); // deselect
    }
  };

  return (
    <div className={wrapperClassName}>
      <Label label={title} titlePosition={titlePosition}/>
        {options.map((option, index) => (
          <div key={String(option.value)} className={styles.InputBlock}>
            <div
              className={attachMultipleClasses(
                styles.GroupRadioBox,
                disabled && styles.disabled,
                styles.checkbox
              )}
            >
              <Input
                orientation={labelOrientation}
                disabled={disabled}
                label={option.label}
                type="checkbox"
                id={`${id || name}-${String(option.value)}`}
                name={name}
                inversed={inversed}
                value={String(option.value)}
                checked={selectedValue === option.value}
                onChange={() => handleChange(option.value)}
                tabIndex={(tabIndex ?? 0) + index}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default GroupRadio;
