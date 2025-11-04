import React, { ReactNode } from 'react';
import styles from '../ReportPrint.module.scss';
import { attachMultipleClasses } from '@/Languages';

interface ReportHeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  hiddenOnRender?:boolean
}
interface ReportCellsProps {
  label?: string;
  value?: string;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({ left, center, right,hiddenOnRender=false}) => {
  return (
    <div className={attachMultipleClasses(styles.headerWrapper,hiddenOnRender&&styles.hidePrint)}>
      <div className={styles.aligner}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
      </div>
      <div className={styles.center}>{center}</div>
    </div>
  );
};

export default ReportHeader;
export const ReportCells: React.FC<ReportCellsProps> = ({ label, value }) => {
  return (
    <div className={styles.reportCell}>
      {!!label && <div className={styles.label}>{label}</div>}
      {!!value && <div className={styles.value}>{value}</div>}
    </div>
  );
};
