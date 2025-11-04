import React, { ReactNode } from 'react';
import styles from './ConfirmModal.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { DialogBox } from '@/ui/DialogBox';

interface ConfirmationDialogueBoxProps {
  title?: string;
  show: boolean;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose?: () => void;
  confirmText: string;
  cancelText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  icon?: ReactNode;
  otherContent?: ReactNode;
  className?: string;
  dialogTitle?: string;
  type?: string;
}

const ConfirmationDialogueBox: React.FC<ConfirmationDialogueBoxProps> = ({
  title,
  show,
  message,
  onConfirm,
  onCancel,
  onClose,
  confirmText,
  cancelText,
  showConfirmButton = true,
  showCancelButton = true,
  icon,
  otherContent,
  className,
  dialogTitle,
  type = 'success'
}) => {
  return (
    <DialogBox
      title={dialogTitle}
      overlayClassName={styles.modalOverLay}
      className={attachMultipleClasses(styles.modalBody, className)}
      isOpen={show}
      onClose={onClose ? onClose : onCancel}
      type={type}
    >
      <div className={styles.confirmationDialogueBox}>
        {otherContent ? (
          otherContent
        ) : (
          <>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h2>{title}</h2>
            <div className={styles.message}>{message}</div>
            <div className={styles.buttonContainer}>
              {showCancelButton && (
                <button className={styles.cancelButton} onClick={onCancel}>
                  {cancelText}
                </button>
              )}
              {showConfirmButton && (
                <button
                  className={`${styles.confirmButton} ${type == 'error' ? styles.confirmButtonError : ''}`}
                  onClick={onConfirm}
                >
                  {confirmText}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </DialogBox>
  );
};

export default ConfirmationDialogueBox;
