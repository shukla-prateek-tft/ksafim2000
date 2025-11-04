//MCFW-0617
import SpecialCollectionOperationsUi from './SpecialCollectionOperations.render';
import { Checkbox, GlobalLoader } from '@/components';
import {
  AddButton,
  CancelButton,
  OtherDetailButton,
  PrintExcel,
  SaveButton,
  DetailButton,
  BackToPageButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './SpecialCollectionOperations.module.scss';
import { getInputPattern } from '@/utils/commonHelper';

const SpecialCollectionOperations = () => {
  const navigate = useNavigate();

  const handleSave = () => {};
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option4', label: 'Option 3' }
  ];
  const renderActionItems = () => {
    const { t } = useTranslation('common');
    return (
      <div className={classes.actionItem}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton onClick={handleSave} />
        <AddButton />
        <CancelButton />
      </div>
    );
  };
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return <Input size="fullWidth" type="number" pattern={getInputPattern(2)} />;
      case 'code2':
        return <Input size="fullWidth" />;
      case 'code3':
        return <Select options={dropdownOptions} size="fullWidth" />;
      case 'code4':
        return <Input size="fullWidth" />;
      case 'code5':
        return <Input size="fullWidth" />;
      case 'code6':
        return (
          <div className={classes.inputContainer}>
            <Input size="fullWidth" />
            <Input size="fullWidth" type="number" pattern={getInputPattern(2)} />
          </div>
        );
      case 'code7':
        return (
          <div className={classes.inputContainer}>
            <Input size="fullWidth" />
            <Input size="fullWidth" type="number" pattern={getInputPattern(2)} />
          </div>
        );
      case 'code8':
        return <Input size="fullWidth" type="checkbox" />;
      case 'code9':
        return <Input size="fullWidth" type="checkbox" />;
      default:
        return <Checkbox />;
    }
  };
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <SpecialCollectionOperationsUi
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
      />
    </>
  );
};

export default SpecialCollectionOperations;
