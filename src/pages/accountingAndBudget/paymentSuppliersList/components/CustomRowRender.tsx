import { flexRender } from '@tanstack/react-table';
import styled from 'styled-components';
interface CustomRowRender {
  row: any;
  selected?: any;
  handleSelect?: any;
  isTypeSelection?: boolean;
  handleClick?: () => void;
}

export const customRowRender = ({
  row,
  selected,
  handleSelect,
  isTypeSelection,
  handleClick
}: CustomRowRender) => {
  return (
    <CustomRow key={row?.id} $isSelected={selected?.supp_Num === row?.original?.supp_Num}>
      {row.getVisibleCells()?.map((cell: any, index: number) => (
        <CustomCell
          onClick={e => {
            e.stopPropagation();
            const canShow = cell?.getContext()?.column?.id === 'id_Supplier';
            !canShow && handleSelect(row?.original);
          }}
          onDoubleClick={isTypeSelection ? handleClick : undefined}
          key={index}
        >
          {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
        </CustomCell>
      ))}
    </CustomRow>
  );
};

const CustomRow = styled.tr<{ $isSelected: boolean }>`
  background-color: ${props => (props.$isSelected ? 'rgb(211,211,211)' : 'transparent')};
  cursor: pointer;
`;

const CustomCell = styled.td`
  padding: 2px;
`;
