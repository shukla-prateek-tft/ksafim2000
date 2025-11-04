import React, { useRef, ReactNode, useCallback, useState } from 'react';
import styles from './Tooltip.module.scss';
import { TooltipPosition } from '@/types/ui/tooltip';

interface TooltipProps {
  children: ReactNode;
  position?: TooltipPosition;
}

const Tooltip: React.FC<TooltipProps> = ({ children, position = 'bottom' }) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const [tooltipText, setTooltipText] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const calculatePosition = useCallback(
    (rect: DOMRect, position: TooltipPosition) => {
      const offset = 8;
      switch (position) {
        case 'bottom':
          return { top: rect.bottom + offset, left: rect.left + rect.width / 2 };
        case 'left':
          return { top: rect.top + rect.height / 2, left: rect.left - offset };
        case 'right':
          return { top: rect.top + rect.height / 2, left: rect.right + offset };
        default: // top
          return { top: rect.top - offset, left: rect.left + rect.width / 2 };
      }
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    const el = cellRef.current;
    if (el && el.scrollWidth > el.clientWidth) {
      const rect = el.getBoundingClientRect();
      const pos = calculatePosition(rect, position);
      setTooltipText(el.textContent || '');
      setCoords(pos);
    }
  }, [calculatePosition, position]);

  const handleMouseLeave = useCallback(() => {
    setTooltipText(null);
    setCoords(null);
  }, []);

  return (
    <>
      <div
        ref={cellRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.tooltipContainer}
      >
        {children}
      </div>
      {tooltipText && coords && (
        <div
          className={`${styles.customTooltip} ${styles[position]}`}
          style={{ top: coords.top, left: coords.left }}
        >
          {tooltipText}
          <div className={styles.customTooltipArrow} />
        </div>
      )}
    </>
  );
};

export default Tooltip;
