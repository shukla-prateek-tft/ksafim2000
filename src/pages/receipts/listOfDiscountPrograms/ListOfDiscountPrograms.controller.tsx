// MCFW-0676
import { DialogBox } from '@/ui/DialogBox';
import classes from './ListOfDiscountPrograms.module.scss';
import ListOfDiscountProgramsUI from './ListOfDiscountPrograms.render';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton
} from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { LuEye } from 'react-icons/lu';
import { REGEX } from '@/constants/appConstant';

const ListOfDiscountPrograms = () => {
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
        <Button title={t('L_MCGH0051')} />
      </div>
    );
  };

  const customRowRenderer = (key: string, row: any, index: number) => {
    switch (key) {
      case 'c1':
        return (
          <div className={classes.flex}>
            <Input label=" " type="number" maxLength={3} value={row['c1']} />
            <Button variant="link" renderIcon={<LuEye size={18} />} />
          </div>
        );
      case 'c2':
        return <Input type="text" pattern={REGEX.allCharacter} maxLength={16} value={row['c2']} />;
      case 'c3':
        return <Input type="text" pattern={REGEX.allCharacter} maxLength={30} value={row['c2']} />;

      default:
        return <>{row[key]}</>;
    }
  };
  return (
    <DialogBox title="MCFW0676" isOpen={true} onClose={() => {}}>
      <ListOfDiscountProgramsUI
        renderActionItems={renderActionItems}
        customRowRenderer={customRowRenderer}
      />
    </DialogBox>
  );
};

export default ListOfDiscountPrograms;
