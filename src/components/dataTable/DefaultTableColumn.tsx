import React from 'react';
import classes from './DataTable.module.scss';
import { DoubleClickEditableInput, Flex } from '@/components';

interface ColumnData {
  accessorKey: string;
  header: string;
  isEditable?: boolean;
  size?: string;
  cell?: (row: Row) => JSX.Element;
}

interface DefaultTableColumnProps {
  onChange?: (value: string, accessorKey: string, row: Row) => void;
  columnData: ColumnData[] | any;
  selectedRows?: any;
  renderColumns?: any;
}

interface Row {
  original: {
    isEditable: boolean;
    id: any;
  };
  getValue: (accessor: string) => string | boolean;
}

export const DefaultTableColumn: React.FC<DefaultTableColumnProps> = ({
  onChange,
  columnData = [],
  selectedRows,
  renderColumns
}) => {
  const mappedColumns = columnData?.map((column: any) => ({
    accessorKey: column.accessorKey,
    header: column.header,
    cell: ({ row }: { row: Row }) =>
      column.cell ? (
        column.cell(row)
      ) : (
        <Flex size={column.size} className={classes.content}>
          <DoubleClickEditableInput
            isDirectEditable={selectedRows === row?.original?.id}
            editable={true}
            accessorKey={column?.accessorKey}
            row={row}
            value={row.getValue(column?.accessorKey) as string}
            onChange={(value: string) => onChange?.(value, column?.accessorKey, row)}
          />
        </Flex>
      )
  }));
  const returnedArray = [...mappedColumns];
  if (renderColumns) {
    returnedArray.push(renderColumns);
  }
  return returnedArray;
};
