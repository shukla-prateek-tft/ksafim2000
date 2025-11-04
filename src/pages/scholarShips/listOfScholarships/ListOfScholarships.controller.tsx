// MCFW-1330
import ListOfScholarshipsUI from './ListOfScholarships.render';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  SaveButton
} from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import classes from './ListOfScholarships.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { BiSend } from 'react-icons/bi';
const ListOfScholarships = () => {
  const { t } = useTranslation('common');
  const hidden = true;
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <Button variant="outline" title={t('L_RECEIPT_MILGA')} />
        {!hidden && (
          <>
            <Button variant="outline" title={t('L_MCFW1382_BOTTOM_BTN1')} />
            <Button variant="outline" title={t('L_MCFW1382_BOTTOM_BTN2')} />
            <Button variant="outline" title={t('L_MCFW1382_BOTTOM_BTN3')} />
          </>
        )}
      </div>
    );
  };

  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return <Input type="checkbox" size='fullWidth'/>;
      case 'code2':
        return <Input size='fullWidth'/>;
      case 'code3':
         return <Input  size='fullWidth'/>;
      case 'code4':
        return (
          <Select  size='fullWidth' options={[{ label: 'sdfsd', value: 'sdfsdf' }]} />
        );
      case 'code5':
        return (
          <Select  size='fullWidth' options={[{ label: 'sdfsd', value: 'sdfsdf' }]} />
        );
      case 'code6':
        return (
          <Select size='fullWidth' options={[{ label: 'sdfsd', value: 'sdfsdf' }]} />
        );
      case 'code7':
        return <Input  size='fullWidth'/>;
      case 'code8':
        return <Input  size='fullWidth'/>;
      case 'code9':
        return <Input size='fullWidth'/>;
      case 'code10':
        return <Input size='fullWidth'/>;
      case 'code11':
        return <Input size='fullWidth'/>;
      case 'code12':
        return <Input size='fullWidth'/>;
      case 'code13':
        return (
        <Button
          onClick={() => {}}
          variant="outline"
          renderIcon={<BiSend color="green" size={17} />}
        />
        );
    }
  };
 
  return (
    <>
      <ListOfScholarshipsUI
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
      />
    </>
  );
};

export default ListOfScholarships;
