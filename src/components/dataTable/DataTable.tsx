import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  Row
} from '@tanstack/react-table';
import styles from './DataTable.module.scss';
import React from 'react';
import { useAuth } from '@/hooks';
import { attachMultipleClasses } from '@/Languages';

interface DataTableProps<T> {
  columns: ColumnDef<T, any>[] | any;
  data: T[];
  pagination?: { pageIndex: number; pageSize: number };
  onPaginationChange?: (pagination: { pageIndex: number; pageSize: number }) => void | any;
  pageCount?: number;
  outerContainerClassName?: string;
  innerContainerClassName?: string;
  renderToolBar?: (table: any) => React.ReactNode;
  renderColumn?: (table: any) => React.ReactNode;
  noDataTitle?: string;
  rowRenderer?: (row: Row<T>, checkAll: any) => React.ReactNode;
  handleSelect?: any;
  showSelectAll?: boolean;
  selectKey?: string;
  selectedRows?: any;
  tableHeaderClassname?: string;
  tableBodyClassname?: string;
  className?: string;
  headersAlign?: 'center' | 'left' | 'right';
  cellsAlign?: 'center' | 'left' | 'right';
}

export const DataTable = <T extends object>({
  columns,
  data = [],
  pagination,
  pageCount,
  outerContainerClassName = '',
  innerContainerClassName = '',
  renderToolBar,
  renderColumn,
  noDataTitle = 'לא נמצאו נתונים',
  rowRenderer,
  handleSelect,
  showSelectAll = false,
  selectKey = 'default',
  selectedRows = [],
  tableHeaderClassname,
  tableBodyClassname,
  className,
  headersAlign = 'center',
  cellsAlign = 'right'
}: DataTableProps<T>) => {
  const { isRtl } = useAuth();
  const table = useReactTable<T>({
    data,
    columns,
    getRowId: (row: any) => row['_id'] as string,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: () => {},
    state: {
      pagination
    },
    manualPagination: true,
    pageCount
  });
  const handleSelectRow = (id: any, rows?: any) => {
    if (id === 'all') {
      handleSelect(rows?.length === selectedRows?.length ? [] : rows);
      return;
    }

    const updatedRows = selectedRows?.includes(id)
      ? selectedRows?.filter((elem: any) => elem !== id)
      : [...(selectedRows || []), id];

    handleSelect(updatedRows);
  };
  const RenderHeader = () => {
    const rows =
      selectKey === 'default'
        ? table?.getRowModel()?.rows?.map(elem => elem?.id)
        : table?.getRowModel()?.rows?.map((elem: any) => elem?.getValue(selectKey));
    return (
      <thead className={tableHeaderClassname}>
        {table?.getHeaderGroups()?.map((headerGroup, index) => (
          <tr key={index}>
            {showSelectAll && (
              <th className={styles.selectedRow}>
                <input
                  checked={rows?.length === selectedRows?.length}
                  onChange={() => handleSelectRow('all', rows)}
                  type="checkbox"
                />
                <span>All</span>
              </th>
            )}
            {headerGroup?.headers?.map((header, index) => (
              <th
                key={index}
                align={headersAlign}
                style={{
                  width: header.getSize() !== 150 ? header.getSize() : undefined
                }}
                colSpan={header?.colSpan}
              >
                {header?.isPlaceholder
                  ? null
                  : flexRender(header?.column?.columnDef?.header, header?.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    );
  };
  const RenderBody = () => {
    return (
      <tbody className={tableBodyClassname}>
        {table?.getRowModel()?.rows?.length > 0 ? (
          table?.getRowModel()?.rows?.map((row, index) =>
            rowRenderer ? (
              <React.Fragment key={index}>
                {rowRenderer(row, () => (
                  <>
                    {showSelectAll && (
                      <th className={styles.checkBoxInput}>
                        <input
                          checked={
                            selectKey === 'default'
                              ? selectedRows?.includes(row?.id)
                              : selectedRows?.includes(row.getValue(selectKey))
                          }
                          onChange={() =>
                            handleSelectRow(
                              selectKey === 'default' ? row.id : row.getValue(selectKey)
                            )
                          }
                          type="checkbox"
                        />
                      </th>
                    )}
                  </>
                ))}
              </React.Fragment>
            ) : (
              <tr key={index} data-state={row?.getIsSelected() && 'selected'}>
                {showSelectAll && (
                  <th className={styles.checkBoxInput}>
                    <input
                      checked={
                        selectKey === 'default'
                          ? selectedRows?.includes(row?.id)
                          : selectedRows?.includes(row.getValue(selectKey))
                      }
                      onChange={() =>
                        handleSelectRow(selectKey === 'default' ? row.id : row.getValue(selectKey))
                      }
                      type="checkbox"
                    />
                  </th>
                )}
                {row?.getVisibleCells()?.map((cell, index) => (
                  <td key={index} align={cellsAlign}>
                    {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
                  </td>
                ))}
              </tr>
            )
          )
        ) : (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={columns?.length}>
              {noDataTitle}
            </td>
          </tr>
        )}
      </tbody>
    );
  };
  return (
    <div className={className}>
      {renderToolBar?.(table)}
      {renderColumn ? (
        renderColumn(table)
      ) : (
        <div className={`${styles.tableOuterContainer} ${outerContainerClassName}`}>
          <div className={`${styles.tableInnerContainer} ${innerContainerClassName}`}>
            <table className={attachMultipleClasses(isRtl && !headersAlign && styles.tableRtl)}>
              <RenderHeader />
              <RenderBody />
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
