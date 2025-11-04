//MCFW-1285
import { DialogBox } from '@/ui/DialogBox';
import classes from './ArticlesForPermanentAdmission.module.scss';

import {
  BackToPageButton,
  SaveButton,
  AddButton,
  CancelButton,
  DetailButton,
  OtherDetailButton
} from '@/components/commonButtons';
import ArticlesForPermanentAdmissionUI from './ArticlesForPermanentAdmission.render';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

const ArticlesForPermanentAdmission = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
      </div>
    );
  };
  const customRowRenderer = (key: string, row: any) => {
    switch (key) {
      case 'text':
        return <Input placeholder="SERVICE TYPE" size="fullWidth" />;
      case 'select':
        return <Select options={[]} size="fullWidth" />;
      default:
        return <>{(row as Record<string, string>)[key]}</>;
    }
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFW1285">
      <ArticlesForPermanentAdmissionUI
        renderActionItems={renderActionItems}
        customRowRenderer={customRowRenderer}
      />
    </DialogBox>
  );
};

export default ArticlesForPermanentAdmission;
