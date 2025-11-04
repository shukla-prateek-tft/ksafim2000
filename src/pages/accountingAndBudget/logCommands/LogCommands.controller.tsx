//MCFW-0628

import LogCommandsUI from './LogCommands.render';
import classes from './LogCommands.module.scss';
import { Input } from '@/ui/Input';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { LuEye } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@/ui/DatePicker';
import { Select } from '@/ui/Select';

const LogCommands = () => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <Button title={t('L_COPY')} />
        <Button title={t('L_DEBIT_CERTIF')} />
        <SearchButton />
      </div>
    );
  };
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'c1':
        return <Input disabled size="fullWidth" value={row?.key} type="number" maxLength={2} />;
      case 'c2':
        return <Input size="fullWidth" type="number" maxLength={6} tabIndex={1} />;
      case 'c3':
        return <DatePicker size="fullWidth" selectedDate={''} onChange={() => {}} tabIndex={2} />;
      case 'c4':
        return <DatePicker size="fullWidth" selectedDate={''} onChange={() => {}} tabIndex={3} />;
      case 'c5':
        return <Input size="fullWidth" type="number" maxLength={3} tabIndex={4} />;
      case 'c6':
        return <Input size="fullWidth" type="number" maxLength={16} tabIndex={5} />;
      case 'c7':
        return <textarea style={{ resize: 'none', width: '90%' }} maxLength={100} tabIndex={6} />;
      case 'c8':
        return <Input type="checkbox" tabIndex={7} />;
      case 'c9':
        return (
          <>
            <Select
              options={[
                { label: 'A', value: 'ABC' },
                { label: 'BCD', value: 'BCD' }
              ]}
              size="fullWidth"
              tabIndex={8}
            />
            <Select
              options={[
                { label: 'A', value: 'ABC' },
                { label: 'BCD', value: 'BCD' }
              ]}
              size="fullWidth"
              tabIndex={9}
            />
          </>
        );
      case 'c10':
        return (
          <>
            <Input type="text" size="fullWidth" tabIndex={10} />
            <Input type="text" size="fullWidth" tabIndex={11} />
          </>
        );
      case 'c11':
        return (
          <>
            <Input
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              size="fullWidth"
              tabIndex={12}
            />
            <Input
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              size="fullWidth"
              tabIndex={13}
            />
          </>
        );
      case 'c12':
        return (
          <>
            <Button
              onClick={() => {}}
              variant="link"
              renderIcon={<LuEye size={18} />}
              size="fullWidth"
              tabIndex={14}
            />
            <Button
              onClick={() => {}}
              variant="link"
              renderIcon={<LuEye size={18} />}
              size="fullWidth"
              tabIndex={15}
            />
          </>
        );
    }
  };
  return <LogCommandsUI renderActionItems={renderActionItems} customRowRender={customRowRender} />;
};

export default LogCommands;
