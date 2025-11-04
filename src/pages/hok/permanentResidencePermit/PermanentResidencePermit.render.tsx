import { Input } from '@/ui/Input';
import { ScreenLayout } from '@/ui/Layout';
import { useTranslation } from 'react-i18next';
import classes from './PermanentResidencePermit.module.scss';
import { Button } from '@/ui/Button';
import {
  AddButton,
  BackToPageButton,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { Footer } from '@/ui/Footer';
import { REGEX } from '@/constants/appConstant';

const PermanentResidencePermitUI = () => {
  const { t } = useTranslation('common');
  const BottomBar = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <SearchButton />
        <AddButton />
        <CancelButton />
        <Button>{t('L_PB_1')}</Button>
        <Button>{t('L_MCFW0675_BOTTOM_BUTTON2')}</Button>
        <Button>{t('L_CALC_PAYMENT')}</Button>
        <Button>{t('L_PAYMENT_SPREAD')}</Button>
        <Button>{t('COLLECT_MOVE')}</Button>
        <Button>{t('L_CANCEL_COLLECT')}</Button>
      </div>
    );
  };

  const TopBar = () => {
    return (
      <div>
        <Footer
          showPagination
          pagination={{
            pageSize: 10,
            totalPages: 100,
            hasNextPage: true,
            hasPreviousPage: true
          }}
        />
      </div>
    );
  };

  return (
    <div className={classes.mainContainer}>
      <ScreenLayout renderHeader={BottomBar} renderFooter={TopBar}>
        <fieldset className={classes.fieldSet}>
          <legend>{t('L_PAYER_PARAMS')}</legend>
          <div className={classes.container}>
            <Input type='number' maxLength={10} size="md" label={t('L_ID')} value={''} orientation="horizontal" />
            <Input pattern={REGEX.allCharacter} maxLength={24} size="md" label={t('L_FAMILY_NAME')} value={''} orientation="horizontal" />
            <Input pattern={REGEX.allCharacter} maxLength={20} size="md" label={t('L_PRIVATE_NAME')} value={''} orientation="horizontal" />
          </div>
        </fieldset>
        <fieldset className={classes.fieldSet}>
          <legend>{t('L_BANK_TRANS_DET')}</legend>
          <div className={classes.container}>
            <div>
              <div className={classes.container}>
                <div className={classes.selectWithInput}>
                  <Input type='number' maxLength={5} size="md" label={t('L_BANK')} value={''} orientation="horizontal" />
                  <Input disabled type='text' value={t('BANK_NAME')} orientation="horizontal" />
                </div>
                <Input type='number' maxLength={9} size="md" label={t('L_BANK_ACCOUNT')} value={''} orientation="horizontal" />
                <div className={classes.selectWithInput}>
                  <Input type='date' onChange={()=>{}} size="md" label={t('L_START_DATE')} value={''} orientation="horizontal" />
                  <Button className={classes.greenBtn} />
                </div>
              </div>
              <div className={classes.container}>
                <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} size="md" label={t('L_TOTAL')} value={''} orientation="horizontal" />
                <Input
                  size="md"
                  type="number"
                  maxLength={2}
                  label={t('L_NUM_PAYMENTS')}
                  value={''}
                  orientation="horizontal"
                />
                <Input
                  size="md"
                  variant="outlined"
                  value={'COMMENT_DETAILS'}
                  orientation="horizontal"
                />
              </div>
              <div className={classes.container}>
                <Input
                  size="md"
                  label={t('L_FIRST_PAYMENT')}
                  value={''}
                  orientation="horizontal"
                  disabled
                />
                <Input
                  size="md"
                  label={t('L_EACH_PAYMENT')}
                  value={''}
                  orientation="horizontal"
                  disabled
                />
                <Input
                  size="md"
                  type="date"
                  label={t('L_SEND_DATE')}
                  value={''}
                  orientation="horizontal"
                />
              </div>
              <div className={classes.container}>
                <Input
                  orientation="horizontal"
                  type='text'
                  maxLength={40}
                  size="lg"
                  label={t('L_COMMENT')}
                  value={'COMMENT'}
                />
                <div className={classes.selectWithInput}>
                  <Input type='text' maxLength={200} value={'STUDENT_LIST'} />
                  <Input type='text' maxLength={15} value={'USER_NAME'} />
                </div>
              </div>
            </div>
            <Input value={t('L_0113_DESC')} />
          </div>
        </fieldset>
        <fieldset className={classes.fieldSet}>
          <legend>{t('L_STUDENT_COLLECTION_DISCOUNT_PROGRAMS')}</legend>
          <div className={classes.container}>
            <Input size="md" type='number' maxLength={10} label={t('L_STUDENT_ID_6')} value={''} orientation="horizontal" />
            <Input size="md" type='text' maxLength={40} label={t('L_STUDENT_NAME')} value={''} orientation="horizontal" />
            <Input size="md" type='text' maxLength={10} label={t('L_CLASS_CODE')} value={''} orientation="horizontal" />
            <Input orientation="horizontal" type="checkbox" label={t('LBL_CHECK')} />
          </div>
          <div className={classes.container}>
            <div className={classes.selectWithInput}>
              <Input type='number' maxLength={3} size="md" label={t('L_COLLECTION')} value={''} orientation="horizontal" />
              <Input type='text' maxLength={30} disabled value={t('FULL_NAME')} orientation="horizontal" />
              <Input orientation="horizontal" type="checkbox" />
            </div>
            <div className={classes.selectWithInput}>
              <Input  type='number' maxLength={3} size="md" label={t('L_A_DISCOUNT')} value={''} orientation="horizontal" />
              <Input type='text' maxLength={30} disabled value={t('FULL_NAME')} orientation="horizontal" />
            </div>
            <div>TEXT_MES</div>
          </div>
        </fieldset>
      </ScreenLayout>
    </div>
  );
};

export default PermanentResidencePermitUI;
