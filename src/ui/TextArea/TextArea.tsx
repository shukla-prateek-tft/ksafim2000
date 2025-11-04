import React, { ChangeEvent, ReactNode } from 'react';
import styles from './TextArea.module.scss';
import { attachMultipleClasses } from '@/utils/commonHelper';
import { ColorVariant } from '@/themes/utils/scale';
import { TextAreaOrientation, TextAreaSizes, TextAreaVariants } from '@/types/ui/textArea';
import { Label } from '@/ui/Label';
import { useAuth } from '@/hooks';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  orientation?: TextAreaOrientation;
  label?: string;
  renderLabel?: () => ReactNode;
  variant?: TextAreaVariants;
  error?: string;
  disabled?: boolean;
  handleChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  isLabel?: boolean;
  size?: TextAreaSizes;
  scale?: ColorVariant;
}

const TextArea = ({
  orientation = 'vertical',
  label,
  renderLabel,
  variant = 'outlined',
  error,
  disabled = false,
  handleChange,
  value,
  placeholder,
  rows = 4,
  cols,
  isLabel,
  size = 'fullWidth',
  scale ,
  ...props
}: TextAreaProps) => {
  const {isMunicipality}=useAuth()
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const orientationClassName = styles[orientation];
  const WrapperClassNames = attachMultipleClasses(
    styles.Wrapper,
    orientationClassName,
    styles[`variant-${variant}`],
    styles[`scale-${uiScale}`],
    styles[`size-${size}`]
  );

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (handleChange) handleChange(e.target.value);
  };

  return (
    <div className={WrapperClassNames}>
      <Label label={label} isLabel={isLabel} />

      {renderLabel && renderLabel()}

      <div className={styles.InputBlock}>
        <div
          className={attachMultipleClasses(
            styles.InputBox,
            error && styles.error,
            disabled && styles.disabled
          )}
        >
          <textarea
            className={styles.StyledInput}
            rows={rows}
            cols={cols}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleTextAreaChange}
            value={value}
            {...props}
          />
        </div>
        {error && <div className={styles.ErrorText}>{error}</div>}
      </div>
    </div>
  );
};

export default TextArea;
