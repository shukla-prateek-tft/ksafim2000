import { useEffect, useRef, useState, memo, ChangeEvent } from 'react';
import classes from './DoubleClickInput.module.scss';
import { attachMultipleClasses } from '@/Languages';

interface DoubleClickEditableInputProps {
  isDirectEditable?: boolean;
  row: any;
  onChange: (value: string, accessorKey: string, row: any) => void;
  value: string | number;
  accessorKey: string;
  type?: 'text' | 'number';
  editable?: boolean;
  [key: string]: any;
}

const DoubleClickEditableInput = memo<DoubleClickEditableInputProps>(
  ({ isDirectEditable = false, row, onChange, value, accessorKey, type, editable, ...others }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [localValue, setLocalValue] = useState<any>(value);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputType = type || typeof value === 'number' ? 'number' : 'text';
    const lastClickRef = useRef(0);

    const handleClick = () => {
      const now = Date.now();
      if (now - lastClickRef.current < 300) {
        setIsEditable(true);
      }
      lastClickRef.current = now;
    };

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    useEffect(() => {
      if (isEditable && inputRef.current) {
        inputRef.current.focus();
        if (inputType === 'text') {
          const length = inputRef.current.value.length;
          inputRef.current.setSelectionRange(length, length);
        }
      }
    }, [isEditable, inputType]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);
      onChange(newValue, accessorKey, row);
    };

    const handleBlur = () => {
      if (localValue !== value) {
        onChange(localValue, accessorKey, row);
      }
      setIsEditable(false);
    };

    return (
      <div onClick={handleClick}>
        {isDirectEditable || (editable && isEditable) ? (
          <input
            ref={inputRef}
            type={inputType}
            value={localValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={attachMultipleClasses(classes.inputField, editable && classes.editableInput)}
            {...others}
          />
        ) : (
          <input
            type={inputType}
            value={localValue}
            className={attachMultipleClasses(classes.inputField)}
            readOnly
            {...others}
          />
        )}
      </div>
    );
  }
);

export default DoubleClickEditableInput;
