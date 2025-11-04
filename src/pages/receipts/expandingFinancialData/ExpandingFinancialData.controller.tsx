// MCSW-0129
import { BackToPageButton, Button, DetailButton } from '@/components/commonButtons';
import ExpandingFinancialDataUI from './ExpandingFinancialData.render';
import classes from './ExpandingFinancialData.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ExpandingFinancialDataProps, ExportFinancialDataFilterType } from './types';

const ExpandingFinancialData = ({ isOpen, onClose }: ExpandingFinancialDataProps) => {
  const { t } = useTranslation('common');
  const [filter, setFilter] = useState({});
  const onFilterChange = (id: keyof ExportFinancialDataFilterType, value: string | number | Date | null) => setFilter({ ...filter, [id]: value });
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <Button title={t('L_MCSW0129_BTN1')} />
      </div>
    );
  };
  return (
    <DialogBox  onClose={onClose} isOpen={isOpen} title="MCSW-0129">
      <ExpandingFinancialDataUI 
        renderActionItems={renderActionItems} 
        filter={filter}
        onFilterChange={onFilterChange}
      />
    </DialogBox>
  );
};

export default ExpandingFinancialData;
