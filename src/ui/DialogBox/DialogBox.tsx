import React, { useRef, ReactNode, useEffect } from 'react';
import styles from './DialogBox.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { useAuth } from '@/hooks';
import { GrFormClose } from 'react-icons/gr';
import { DialogType } from '@/types/ui/dialog';
import { DATEPICKER_MODAL_HIDE_CLASSNAME } from '@/constants/appConstant';

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string|ReactNode;
  closeOnOverlay?: boolean;
  showClose?: boolean;
  type?: DialogType;
  important?: boolean; // will assign highest stacking order
}

const DialogBox: React.FC<DialogBoxProps> = ({
  isOpen,
  onClose,
  children,
  title,
  closeOnOverlay = false,
  showClose = true,
  important = false,
  type,
}) => {
  if (!isOpen) return null; // Return null instead of undefined to render nothing

  const dialogRef = useRef<HTMLDivElement>(null);
    const { isRtl ,isMunicipality } = useAuth();
    const uiScale = isMunicipality ? 'primary' : 'secondary';
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Click outside the dialog box closes dialog if closeOnOverlay is true
    if (closeOnOverlay && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      requestAnimationFrame(() => {
        const anyExist = [DATEPICKER_MODAL_HIDE_CLASSNAME].some(className =>
          document.querySelector(`.${className}`)
        );
        if (!anyExist) {
          onClose();
        }
      });
    }
  };

  // We create stable handleKeyDown by using useRef or declare inside useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Render the component with correct z-index for overlay and dialogBox when important
  return (
    <div
      className={attachMultipleClasses(styles.overlay, important && styles.important,styles[`scale-${uiScale}`])}
      onClick={handleOverlayClick}
      // Set z-index inline just in case you want to override in future by prop
      style={{ zIndex: important ? 1000005 : undefined }}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'dialog-title' : undefined}
    >
      <div
        className={attachMultipleClasses(styles.dialogBox, important && styles.important)}
        ref={dialogRef}
        style={{ zIndex: important ? 1000006 : undefined }}
      >
        {title && (
          <div
            className={attachMultipleClasses(
              styles.titleContainer,
              type === 'error' ? styles.error : styles.success,
              important && styles.important
            )}
          >
            <label id="dialog-title" className={styles.label}>
              {title}
            </label>
            {showClose && (
              <button
                className={attachMultipleClasses(styles.closeButton, isRtl && styles.rtlClose)}
                onClick={onClose}
                aria-label="Close dialog"
                type="button"
              >
                <GrFormClose />
              </button>
            )}
          </div>
        )}
        <div className={styles.dialogContent}>{children}</div>
      </div>
    </div>
  );
};

export default DialogBox;
