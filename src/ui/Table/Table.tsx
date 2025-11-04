import React, { useMemo, useState } from 'react';
import styles from './Table.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { Tooltip } from '@/ui/Tooltip';
import { Unit } from '@/themes/types/scale';
import { SortDirection, TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks';

interface SortConfig {
  key: string;
  direction: SortDirection;
}

interface CustomTableProps<T> {
  data: T[];
  columns: TableColumnType<T>[];
  rowKey?: keyof T | string;
  customRowRenderer?: (key: keyof T, row: T, index: number) => React.ReactNode;
  onSort?: (key: keyof T, direction: SortDirection) => void;
  selectedRow?: T | string | null;
  onRowSelect?: (selectedRow: T, index: number) => void;
  onRowDoubleClick?: (selectedRow: T) => void;
  getRowProps?: (row: T, index: number) => React.HTMLAttributes<HTMLDivElement>;
  height?: Unit;
}

function CustomTable<T = Record<string, unknown>>({
  data = [],
  columns = [],
  rowKey = 'id',
  customRowRenderer,
  onSort = () => {},
  selectedRow = null,
  onRowSelect = () => {},
  getRowProps = () => ({}),
  height,
  onRowDoubleClick
}: CustomTableProps<T>) {
  const { t } = useTranslation('common');
  const { isMunicipality } = useAuth();
  const uiScale = isMunicipality ? 'primary' : 'secondary';
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'Asc'
  });

  const handleSort = (key: string) => {
    const newDirection =
      sortConfig.key === key ? (sortConfig.direction === 'Asc' ? 'Desc' : 'Asc') : 'Asc';

    const newConfig = { key, direction: newDirection };
    setSortConfig(newConfig);
    onSort?.(key as keyof T, newDirection);
  };

  const getSortedData = () => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aVal = a?.[sortConfig.key];
      const bVal = b?.[sortConfig.key];

      if (aVal == null) return sortConfig.direction === 'Asc' ? 1 : -1;
      if (bVal == null) return sortConfig.direction === 'Asc' ? -1 : 1;

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortConfig.direction === 'Asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }

      return sortConfig.direction === 'Asc' ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
    });
  };

  const isSelected = (row: T) => {
    if (!rowKey || !selectedRow) return false;

    const rowKeyValue = row[rowKey as keyof T];

    if (typeof selectedRow === 'string') {
      return String(rowKeyValue) === selectedRow;
    }

    const selectedKeyValue = selectedRow[rowKey as keyof T];
    return rowKeyValue === selectedKeyValue;
  };

  const getMergedOnClick =
    (
      item: T,
      onRowSelect: (row: T) => void,
      externalRowProps: React.HTMLAttributes<HTMLTableRowElement>,
      index: number
    ) =>
    (e: React.MouseEvent<HTMLTableRowElement>) => {
      onRowSelect(item, index);
      externalRowProps.onClick?.(e);
    };
  const cellHeader = (col: TableColumnType<T>, index: number) =>
    useMemo(() => {
      return col.header
        ? col.header(col.key.toString() as Extract<keyof T, string | number>, col, index)
        : col.label || '';
    }, [col, index]);

  return (
    <div style={{ height: height }} className={attachMultipleClasses(styles.tableWrapper, styles[`scale-${uiScale}`])}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            {columns.map((col, index) => (
              <th
                key={col.key.toString()}
                style={
                  {
                    '--col-width': col.width || 'auto',
                    '--col-grow': col.width ? 0 : 1,
                    '--print-width': col.printWidth,
                    textAlign: col.align || 'right'
                  } as React.CSSProperties
                }
                onClick={() => col.sortable && handleSort(col.key.toString(), sortConfig.direction)}
              >
                <div className={styles.columnHeader}>
                  {cellHeader(col, index)}
                  {sortConfig.key === col.key && (
                    <span>{sortConfig.direction === 'Asc' ? '🔼' : '🔽'}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={styles.body}>
          {getSortedData()?.map?.((item, index) => {
            const key = item[rowKey as keyof T] ?? index;
            const selected = isSelected(item);

            const externalRowProps =
              typeof getRowProps === 'function' ? getRowProps(item, index) : {};
            const mergedOnClick = getMergedOnClick(item, onRowSelect, externalRowProps, index);
            const mergedOnDoubleClick = getMergedOnClick(
              item,
              onRowDoubleClick,
              externalRowProps,
              index
            );
            return (
              <tr
                key={String(key)}
                className={attachMultipleClasses(styles.row, selected ? styles.selectedRow : '')}
                {...externalRowProps}
                onDoubleClick={mergedOnDoubleClick}
                onClick={mergedOnClick}
              >
                {columns.map(col => (
                  <td
                    key={col.key.toString()}
                    className={styles.cell}
                    style={
                      {
                        '--col-width': col.width || 'auto',
                        '--col-grow': col.width ? 0 : 1,
                        textAlign: col.align || 'right'
                      } as React.CSSProperties
                    }
                  >
                    {customRowRenderer?.(col.key.toString(), item, index) ??
                      (typeof item[col.key as keyof T] === 'object' ||
                      typeof item[col.key as keyof T] === 'function' ? (
                        ''
                      ) : (
                        <Tooltip>{String(item[col.key as keyof T] || '')}</Tooltip>
                      ))}
                  </td>
                ))}
              </tr>
            );
          })}
          {(!data || data.length === 0) && (
            <tr className={styles.noDataFoundContainer}>
              <td colSpan={columns?.length}>{t('L_NO_DATA_FOUND')}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
