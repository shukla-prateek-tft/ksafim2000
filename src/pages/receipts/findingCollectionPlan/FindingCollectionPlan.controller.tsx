//MCFL-0018
import { Checkbox, GlobalLoader } from '@/components';
import {
  AddButton,
  CancelButton,
  OtherDetailButton,
  SearchButton,
  SaveButton,
  DetailButton,
  BackToPageButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FindingCollectionPlanUi from './FindingCollectionPlan.render';
import classes from './FindingCollectionPlan.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { getInputPattern } from '@/utils/commonHelper';

const FindingCollectionPlan = ({ isOpen, onClose }: any) => {
  const navigate = useNavigate();

  const handleSave = () => {};
  const handleSearch = () => {};

  const renderActionItems = () => {
    const { t } = useTranslation('common');
    return (
      <div className={classes.actionItem}>
        <BackToPageButton />
        <SaveButton onClick={handleSave} />
        <SearchButton onClick={handleSearch} />
      </div>
    );
  };
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return <Input size="fullWidth" type="number" pattern={getInputPattern(3)} />;
      case 'code2':
        return <Input size="fullWidth" type="text" maxLength={30} />;
      case 'code3':
        return <Input size="fullWidth" type="text" maxLength={16} />;
      case 'code4':
        return (
          <div className={classes.inputContainer}>
            <Input size="sm" type="number" pattern={getInputPattern(2)} />
            <Input size="sm" />
          </div>
        );
      case 'code5':
        return (
          <div className={classes.inputContainer}>
            <Input size="sm" type="number" pattern={getInputPattern(2)} />
            <Input size="sm" />
          </div>
        );
      default:
        return <Checkbox />;
    }
  };
  return (
    <DialogBox title="MCFL-0018" onClose={onClose} isOpen={isOpen}>
      <GlobalLoader showOnFullScreen loading={false} />
      <FindingCollectionPlanUi
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
      />
    </DialogBox>
  );
};

export default FindingCollectionPlan;
