import React, { ReactNode } from 'react';
import styles from './ConfirmModal.module.scss';
import { DialogBox } from '../../ui/DialogBox';
import { attachMultipleClasses } from '@/Languages';
import { BackToPageButton, SaveButton } from '../commonButtons';

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
      important
    >
      <div className={styles.confirmationDialogueBox}>
        {otherContent ? (
          otherContent
        ) : (
          <>
            {icon && (
              <div
                className={attachMultipleClasses(
                  styles.icon,
                  styles[type]
                )}
              >
                {icon}
              </div>
            )}
            <h2 className={attachMultipleClasses(styles.heading,
                  styles[type])}>{title}</h2>
            <div className={attachMultipleClasses(styles.message,
                  styles[type])}>{message}</div>
            <div className={styles.buttonContainer}>
              {showCancelButton && (
                <BackToPageButton size="md" onClick={onCancel} title={cancelText} />
              )}
              {showConfirmButton && (
                <SaveButton size="md" onClick={onConfirm} title={confirmText} />
              )}
            </div>
          </>
        )}
      </div>
    </DialogBox>
  );
};

export default ConfirmationDialogueBox;
