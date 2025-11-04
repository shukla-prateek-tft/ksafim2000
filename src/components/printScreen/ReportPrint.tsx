import React, { ReactNode } from 'react';
import styles from './ReportPrint.module.scss';
import { Unit } from '@/themes/types/scale';

interface ReportPrintProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  renderActionItem?: ReactNode;
  centerScroll?: boolean;
}

const ReportPrint: React.FC<ReportPrintProps> = ({
  children,
  footer,
  header,
  renderActionItem,
  centerScroll = true
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div style={{ overflowX: centerScroll ? 'auto' : 'visible' }}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
      <div className={styles.renderItem}>{renderActionItem}</div>
    </div>
  );
};

export default ReportPrint;
