import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Select.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { createPortal } from 'react-dom';
import { Tooltip } from '@/ui/Tooltip';
import { SelectOrientation, SelectScale, SelectSizes, SelectVariants } from '@/types/ui/select';
import { Label } from '@/ui/Label';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from 'react-icons/md';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useAuth } from '@/hooks';
export type Option = {
  label: string | number;
  value?: string | number;
  action?: any;
};

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  value?: string |number| null;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, option: Option) => void;
  readonly?: boolean;
  renderControl?: (props: { value: string| number | null; isOpen: boolean }) => React.ReactNode;
  renderOption?: (props: { option: Option; isSelected: boolean }) => React.ReactNode;
  size?: SelectSizes;
  scale?: SelectScale;
  variant?: SelectVariants;
  label?: string;
  disabled?: boolean;
  renderLabel?: () => React.ReactNode;
  isLabel?: boolean;
  orientation?: SelectOrientation;
  name?: string;
  id?: string;
  tabIndex?: number;
  error?: string;
  onClick?: () => void;
  disabled?: boolean; 
}

export const CustomSelect: React.FC<SelectProps> = ({
  options,
  placeholder = '',
  value = null,
  onChange,
  readonly = false,
  renderControl,
  renderOption,
  size = 'sm',
  scale ,
  variant = 'outlined',
  label,
  disabled = false,
  renderLabel,
  isLabel = false,
  orientation = 'vertical',
  name,
  id,
  tabIndex,
  error,
  onClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const {isMunicipality}=useAuth();
  
  const uiScale = scale ? scale : isMunicipality? 'primary' : 'secondary';

  console.log(uiScale);
  const toggleOpen = useCallback(() => {
    if (!readonly || disabled) setIsOpen(prev => !prev);
  }, [readonly, disabled]);

  const handleSelect = useCallback(
    (option: Option) => {
      if (readonly || disabled) return;
      const event = {
        target: {
          value: option.value,
          name: name ?? '',
          id: id ?? ''
        }
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange?.(event, option);
      setIsOpen(false);
    },
    [readonly, onChange, name, id]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getMenuStyles = () => {
    if (!ref.current) return {};
    const rect = ref.current.getBoundingClientRect();
    return {
      position: 'absolute' as const,
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      zIndex: 1000 as const
    };
  };

  const WrapperClassName = attachMultipleClasses(
    styles.wrapper,
    styles[orientation],
    styles[`variant-${variant}`],
    styles[`scale-${uiScale}`],
    styles[`size-${size}`]
  );

  const selectedItem = options?.find(elem => elem?.value === value) || '';

  return (
    <div className={!renderControl && WrapperClassName} tabIndex={tabIndex} onClick={onClick}>
      <Label label={label} isLabel={isLabel} />
      <div
        className={attachMultipleClasses(
          styles['custom-select'],
          error && styles.validation,
          disabled && styles.disabled
        )}
        ref={ref}
        onClick={toggleOpen}
      >
        {renderLabel && renderLabel()}

        <div
          className={attachMultipleClasses(
            styles['custom-select__control'],
            readonly ? styles.readonly : ''
          )}
        >
          {renderControl ? (
            renderControl({ value, isOpen })
          ) : (
            <>
              {!error && (
                <span className={styles.placeholder}>
                  <span>{selectedItem?.label || placeholder}</span>
                  {!isOpen ? <MdKeyboardArrowDown size={16} /> : <MdKeyboardArrowUp size={16} />}
                </span>
              )}
            </>
          )}
        </div>

        {isOpen &&
          createPortal(
            <div ref={menuRef} className={styles['custom-select__menu']} style={getMenuStyles()}>
              {options.map(option => {
                const isSelected = selectedItem?.value === option.value;
                const handleClick = (event: React.MouseEvent) => {
                  event.stopPropagation();
                  handleSelect(option);
                };

                return (
                  <Tooltip key={option.value}>
                    <div
                      key={option.value}
                      className={attachMultipleClasses(
                        styles['custom-select__option'],
                        isSelected && styles.selected,
                        option?.disabled && styles.disabledOption,
                        isMunicipality ? styles.municipalityOption:styles.parentOptions
                      )}
                      onClick={handleClick}
                    >
                      {renderOption ? renderOption({ option, isSelected }) : option.label}
                    </div>
                  </Tooltip>
                );
              })}
            </div>,
            document.body
          )}
        <ErrorMessage error={error} />
      </div>
    </div>
  );
};
