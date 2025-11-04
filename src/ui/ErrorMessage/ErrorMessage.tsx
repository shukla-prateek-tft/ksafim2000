import { useState, useEffect } from 'react';
import styles from './ErrorMessage.module.scss';
import { RiErrorWarningLine } from 'react-icons/ri';

export const ErrorMessage = ({ error }: { error?: string }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      {error && (
        <div className={styles.warningWrapper}>
          <RiErrorWarningLine className={styles.icon} color="#e74c3c" />
          <p className={`${styles.errorMessage} ${showError ? styles.visible : ''}`}>{error}</p>
        </div>
      )}
    </>
  );
};
