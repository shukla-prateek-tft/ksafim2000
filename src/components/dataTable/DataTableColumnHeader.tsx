import { attachMultipleClasses } from '@/Languages';
import styles from './DataTable.module.scss';

interface DataTableColumnHeaderProps {
  title: string;
  column: any;
  onApiSort?: (columnId: string) => void;
  useApiSorting?: boolean;
  disabled?: boolean;
  className?: string;
}

export const DataTableColumnHeader = ({
  title,
  column,
  onApiSort,
  useApiSorting = false,
  disabled = false,
  className
}: DataTableColumnHeaderProps) => {
  let ariaSort: 'none' | 'ascending' | 'descending' = 'none';
  const sort = column?.getIsSorted?.() || null;

  if (sort === 'asc') {
    ariaSort = 'ascending';
  } else if (sort === 'desc') {
    ariaSort = 'descending';
  }
  const handleSorting = () => {
    if (useApiSorting) {
      onApiSort?.(column.id);
    } else {
      column?.toggleSorting?.();
    }
  };
  return (
    <>
      {!disabled ? (
        <div
          className={attachMultipleClasses(className, styles.sortingButton)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          onClick={!disabled && handleSorting}
        >
          {title}
        </div>
      ) : (
        <span>{title}</span>
      )}
    </>
  );
};
