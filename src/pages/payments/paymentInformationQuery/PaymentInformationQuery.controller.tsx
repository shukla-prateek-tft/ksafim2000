// MCFW-0697
import { useState } from 'react';
import { Input } from '@/ui/Input';
import PaymentInformationQueryUI from './PaymentInformationQuery.render'
import { getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { Select } from '@/ui/Select';

type RowType = {
  code1: boolean;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
  code7: string;
  code8: string;
  code9: string;
  code10: string;
  code11: string;
  code12: string;
};

const initialRows: RowType[] = [
  {
    code1: false,
    code2: 'STUDENT',
    code3: 'ACT_NO',
    code4: 'DATE_AUTH',
    code5: 'ORDER_NUM',
    code6: 'DESC_AUT',
    code7: 'ACC_ACT',
    code8: 'SERVICE_TYPE',
    code9: 'ACC_CARD',
    code10: 'TYPE_NO',
    code11: 'OUTCOMES',
    code12: 'STATUS'
  }
];

const PaymentInformationQuery = () => {
  const [rows, setRows] = useState<RowType[]>(initialRows);

  const updateCell = (rowIndex: number, key: keyof RowType, value: string | boolean) => {
    setRows(prev => {
      const next = [...prev];
      const current = { ...next[rowIndex] };
      (current as Record<string, string | boolean>)[key] = value;
      next[rowIndex] = current;
      return next;
    });
  };

  const customRowRenderer = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <Input
            type='checkbox'
            checked={rows[index]?.code1}
            onChange={(e) => updateCell(index, 'code1', (e.target as HTMLInputElement).checked)}
            tabIndex={3}
          />
        );
      case 'code2':
        return (
          <Input
            type="number"
            size='fullWidth'
            value={rows[index]?.code2}
            pattern={getInputPattern(10)}
            onChange={(e) => updateCell(index, 'code2', e.target.value)}
            tabIndex={4}
          />
        );
      case 'code3':
        return (
          <Input
            size='fullWidth'
            value={rows[index]?.code3}
            maxLength={7}
            pattern={REGEX.allCharacter}
            onChange={(e) => updateCell(index, 'code3', e.target.value)}
            tabIndex={5}
          />
        );
      case 'code4':
        return (
          <DatePickerComponent
            selectedDate={new Date()}
            onChange={() => {}}
            value={rows[index]?.code4}
            placeholder=" "
            id="L_DATE"
            size="fullWidth"
            orientation="horizontal"
            tabIndex={6}
          />
        );
      case 'code5':
        return (
          <Input
            type='number'
            size='fullWidth'
            value={rows[index]?.code5}
            pattern={getInputPattern(5)}
            onChange={(e) => updateCell(index, 'code5', e.target.value)}
            tabIndex={7}
          />
        );
      case 'code6':
        return (
          <Input
            size='fullWidth'
            value={rows[index]?.code6}
            maxLength={30}
            pattern={REGEX.allCharacter}
            onChange={(e) => updateCell(index, 'code6', e.target.value)}
            tabIndex={8}
          />
        );
      case 'code7':
        return (
          <Input
            type='number'
            pattern={getInputPattern(3)}
            size='fullWidth'
            value={rows[index]?.code7}
            onChange={(e) => updateCell(index, 'code7', e.target.value)}
            tabIndex={9}
          />
        );
      case 'code8':
        return (
          <Input
            type='number'
            pattern={getInputPattern(6)}
            size='fullWidth'
            value={rows[index]?.code8}
            onChange={(e) => updateCell(index, 'code8', e.target.value)}
            tabIndex={10}
          />
        );
      case 'code9':
        return (
          <Input
            type='number'
            size='fullWidth'
            value={rows[index]?.code9}
            onChange={(e) => updateCell(index, 'code9', e.target.value)}
            tabIndex={11}
          />
        );
      case 'code10':
        return (
          <Select size="fullWidth" options={[]} orientation="horizontal" tabIndex={12} />
        );
      case 'code11':
        return (
          <Input
            type='amount'
            min={0}
            maxLength={11}
            onBlur={() => {}}
            size='fullWidth'
            value={rows[index]?.code11}
            onChange={(e) => updateCell(index, 'code11', e.target.value)}
            tabIndex={13}
          />
        );
      case 'code12':
        return (
          <Input
            type='number'
            pattern={getInputPattern(1)}
            size='fullWidth'
            value={rows[index]?.code12}
            onChange={(e) => updateCell(index, 'code12', e.target.value)}
            tabIndex={14}
          />
        );
      default:
        return <>{(row as Record<string, string>)[key]}</>;
    }
  };

  return (
    <PaymentInformationQueryUI customRowRenderer={customRowRenderer} data={rows} />
  )
}

export default PaymentInformationQuery
