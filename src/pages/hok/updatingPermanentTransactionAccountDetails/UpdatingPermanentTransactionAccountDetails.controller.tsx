//MCFW-0658
import { GlobalLoader } from '@/components';
import UpdatingPermanentTransactionAccountDetailsUI from './UpdatingPermanentTransactionAccountDetails.render';
import { AddButton, BackToPageButton, Button, CancelButton, DetailButton, PrintExcel, SaveButton, SearchButton } from '@/components/commonButtons';
import classes from "./UpdatingPermanentTransactionAccountDetails.module.scss";
import { CustomRowRenderType, PaymentDataType } from '../type';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';

const UpdatingPermanentTransactionAccountDetails = () => {
  const { t } = useTranslation("common");

  const renderActionItems = () => {
    return (
      <>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <SearchButton />
        <AddButton />
        <CancelButton />
        <PrintExcel />
      </>
    );
  };

  const cardHeaderRenderItems = () => <>
    <Button>{t('L_CHANGE_DATA')}</Button>
    <Button>{t('L_ADD_SUM')}</Button>
    <Button>{t('L_AMOUNT_UPDATE')}</Button>
    <Button>{t('L_DELETE_MARKED_RECORDS')}</Button>
  </>

  const customRowRenderer: CustomRowRenderType<PaymentDataType> = (key, row) => {
    switch (key) {
      case 'familyName':
        return <div className={classes.ListofGefenCell}>
          <Input
            label=" "
            type="text"
            id="catalog_no"
            maxLength={16}
            variant="borderless"
            value={row.familyName}
          />
          <Input
            label=" "
            type="text"
            id="catalog_no"
            maxLength={16}
            variant="borderless"
            value={row.privateName}
          />
        </div>
      case 'date':
        return <div className={classes.ListofGefenCell}>
          <Input
            label=" "
            type="date"
            id="catalog_no"
            maxLength={16}
            variant="borderless"
            value={row.date}
          />
        </div>
      case 'returned':
      case 'paid':
      case 'signed':
        return <div className={classes.ListofGefenCell}>
          <Input
            label=" "
            type="checkbox"
            id="catalog_no"
            maxLength={16}
            variant="borderless"
            checked={row[key] as boolean}
          />
        </div>
      default:
        return <div className={classes.ListofGefenCell}>
          <Input
            label=" "
            type="text"
            id="catalog_no"
            maxLength={16}
            variant="borderless"
            value={row[key] as string}
          />
        </div>
    }
  }

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <UpdatingPermanentTransactionAccountDetailsUI
        renderActionItems={renderActionItems}
        cardHeaderRenderItems={cardHeaderRenderItems}
        customRowRenderer={customRowRenderer}
      />
    </>
  );
};

export default UpdatingPermanentTransactionAccountDetails;
