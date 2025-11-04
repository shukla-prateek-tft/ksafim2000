import React, { ReactNode } from 'react';
import styles from '../ReportPrint.module.scss';

interface ReportHeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}

const ReportFooter: React.FC<ReportHeaderProps> = ({ left, right }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.aligner}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
      </div>
    </div>
  );
};

export default ReportFooter;