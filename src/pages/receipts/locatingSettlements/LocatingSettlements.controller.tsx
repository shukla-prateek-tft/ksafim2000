//MCGL-0001
import LocatingSettlementsUI from './LocatingSettlements.render';
import { Input } from '@/ui/Input';
import {
  BackToPageButton,
  PrintButton,
  PrintExcel,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import classes from './LocatingSettlements.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { REGEX } from '@/constants/appConstant';

const LocatingSettlements = ({ isOpen, onClose }: any) => {
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return <Input size="fullWidth" maxLength={20} pattern={REGEX.allCharacter} tabIndex={3} />;
      case 'code2':
        return <Input type="number" size="fullWidth" maxLength={5} tabIndex={4} />;
    }
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItem}>
        <BackToPageButton />
        <SaveButton />
        <SearchButton />
        <PrintButton />
        <PrintExcel />
      </div>
    );
  };

  return (
    <>
      <DialogBox isOpen={isOpen} onClose={onClose} title="Locating Settlements MCGL0001">
        <LocatingSettlementsUI
          customRowRender={customRowRender}
          renderActionItems={renderActionItems}
        />
      </DialogBox>
    </>
  );
};

export default LocatingSettlements;
