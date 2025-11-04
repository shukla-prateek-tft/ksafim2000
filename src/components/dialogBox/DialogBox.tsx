
import classes from './Old_DialogBox.module.scss';
import { canUseNewUI } from '@/utils/commonHelper';
import React, {
  useRef,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import styles from "./DialogBox.module.scss";
import { attachMultipleClasses } from "@/Languages";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useAuth } from "@/hooks";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  title?: string;
  closeOnOverlay?: boolean;
  showClose?: boolean;
  style?: any;
  type?: string;
  contentClassName?: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className = '',
  overlayClassName = '',
  closeOnOverlay = true,
  showClose = true,
  style,
  type,
  contentClassName
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { isRtl } = useAuth();
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlay && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {!canUseNewUI() ? (
        <>
          {isOpen && (
            <div
              style={style}
              className={attachMultipleClasses(classes.overlay, overlayClassName)}
              onClick={handleOverlayClick}
            >
              <div className={attachMultipleClasses(classes.dialogBox, className)} ref={dialogRef}>
                <div
                  className={`${classes.titleContainer} ${type == 'error' ? classes.redBackground : ''}`}
                >
                  <label className={classes.label}>{title}</label>
                  {showClose && (
                    <button
                      className={`${classes.closeButton} ${isRtl && classes.rtlClose}`}
                      onClick={onClose}
                    >
                      <IoCloseCircleSharp />
                    </button>
                  )}
                </div>
                <div className={attachMultipleClasses(classes.dialogContent, contentClassName)}>
                  {children}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {isOpen && (
            <div
              style={style}
              className={attachMultipleClasses(styles.overlay, overlayClassName)}
              onClick={handleOverlayClick}
            >
              <div className={attachMultipleClasses(styles.dialogBox, className)} ref={dialogRef}>
                <div
                  className={`${styles.titleContainer} ${type == 'error' ? styles.redBackground : ''}`}
                >
                  <label className={styles.label}>{title}</label>
                  {showClose && (
                    <button
                      className={`${styles.closeButton} ${isRtl && styles.rtlClose}`}
                      onClick={onClose}
                    >
                      <IoCloseCircleSharp />
                    </button>
                  )}
                </div>
                <div className={styles.dialogContent}>{children}</div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DialogBox;
