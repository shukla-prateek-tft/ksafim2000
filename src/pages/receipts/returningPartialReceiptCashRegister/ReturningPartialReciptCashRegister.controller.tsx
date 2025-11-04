// MCFW-0640
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import ReturningPartialReciptCashRegisterUI from './ReturningPartialReciptCashRegister.render';
import classes from './ReturningPartialReciptCashRegister.module.scss';
import { Input } from '@/ui/Input';
import { Pagination } from '@/ui/Pagination';
import { REGEX } from '@/constants/appConstant';
import { Select } from '@/ui/Select';

const ReturningPartialReciptCashRegister = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.buttonContainer}>
        <div className={classes.actionItems}>
          <BackToPageButton />
          <DetailButton />
          <SaveButton />
          <SearchButton />
        </div>
        <Pagination pagination={{ pageSize: 10, pageNumber: 1, totalPages: 5 }} />
      </div>
    );
  };
  const customRowRenderer = (key: string, row: any, index: number) => {
    switch (key) {
      case 'c1':
        return (
          <div className={classes.flex}>
            <Input
              type="number"
              maxLength={10}
              value={row['c1']}
              variant="borderless"
              tabIndex={14}
            />
            <Input
              maxLength={24}
              pattern={REGEX.allCharacter}
              label=" "
              type="text"
              value={row['c1']}
              variant="borderless"
              tabIndex={15}
            />
            <Input
              maxLength={20}
              pattern={REGEX.allCharacter}
              label=" "
              type="text"
              value={row['c1']}
              variant="borderless"
              tabIndex={16}
            />
          </div>
        );
      case 'c2':
        return (
          <Select
            orientation="horizontal"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="sm"
            tabIndex={17}
          />
        );
      case 'c3':
        return <Input type="text" value={row['c3']} variant="borderless" tabIndex={18} />;
      case 'c4':
        return (
          <Input type="amount" maxLength={11} value={row[key]} variant="borderless" tabIndex={19} />
        );
      case 'c5':
        return (
          <Input type="amount" maxLength={11} value={row[key]} variant="borderless" tabIndex={20} />
        );

      default:
        return <>{row[key]}</>;
    }
  };
  return (
    <ReturningPartialReciptCashRegisterUI
      renderActionItems={renderActionItems}
      customRowRenderer={customRowRenderer}
    />
  );
};

export default ReturningPartialReciptCashRegister;
