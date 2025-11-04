// MCFW-0643
import BankDepositConfirmationUI from './BankDepositConfirmation.render';
import {
  BackToPageButton,
  DetailButton,
  PrintExcel,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import classes from './BankDepositConfirmation.module.scss';
import { Input } from '@/ui/Input';
const BankDepositConfirmation = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SearchButton />
        <SaveButton />
        <PrintExcel />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };

  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code9':
        return <Input size='fullWidth' type="checkbox" checked={row?.key} />;
      case 'code10':
        return <Input size='fullWidth' type="checkbox" checked={row?.key} />;
    }
  };
  return (
    <BankDepositConfirmationUI
      renderActionItems={renderActionItems}
      customRowRender={customRowRender}
    />
  );
};

export default BankDepositConfirmation;
