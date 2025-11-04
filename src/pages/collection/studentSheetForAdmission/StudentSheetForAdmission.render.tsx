import { Table } from '@/ui/Table';
import { StudentSheetForAdmissionColumn } from './Components';
import { useTranslation } from 'react-i18next';
import classes from './StudentSheetForAdmission.module.scss';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { Button } from '@/ui/Button';
import { attachMultipleClasses } from '@/Languages';
import { Footer } from '@/ui/Footer';
interface Props {
  data: unknown[];
  renderActionItems?: () => JSX.Element;
  renderOtherButtons?: () => JSX.Element;
  customRowRender?: () => JSX.Element;
}
const StudentSheetForAdmissionUI = ({
  data,
  renderActionItems,
  renderOtherButtons,
  customRowRender
}: Props) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      screenNumber="MCFW-1418"
      renderFooter={
        <Footer
          showPagination
          pagination={{
            pageNumber: 1,
            totalPages: 10,
            hasPreviousPage: true,
            hasNextPage: true
          }}
        />
      }
      renderHeader={renderActionItems()}
    >
      <div className={classes.container}>
        <Card title={t('T_MCFW1418')} renderHeaderItems={renderOtherButtons()}>
          <div className={classes.topConatiner}>
            <div className={classes.itemsContainer}>
              <Input size="md" orientation="horizontal" label={t('L_ACT_NO1')} disabled/>
              <Input size="lg" orientation="horizontal" label={t('L_DESC')}  disabled/>
            </div>
            <div className={classes.itemsContainer}>
              <Input size="md" orientation="horizontal" label={t('L_CLASS_FROM')}  disabled/>
              <Input size="md" orientation="horizontal" label={t('L_CLASS_TO')}  disabled/>
              <Input size="md" orientation="horizontal" label={t('L_STUDY_GROUP')}  disabled/>
              <Input size="md" orientation="horizontal"  disabled/>
            </div>
            <div className={classes.itemsContainer}>
              <Input size="md" orientation="horizontal" label={t('L_SERVICE_TYPE')}  disabled/>
              <Input size="md" orientation="horizontal" label={t('L_ACC_NUM')}  disabled/>
              <Input size="md" orientation="horizontal" label={t('L_SERVICE_SUBJEC')}  disabled/>
            </div>
            <div className={classes.itemsContainer}>
              <Input size="md" orientation="horizontal" label={t('L_DATE')}  disabled/>
              <Input size="md" orientation="horizontal" label={t('L_MONEY')}  disabled/>
              <div className={classes.selectContainer}>
                <Select
                  options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' }
                  ]}
                  size="fullWidth"
                  orientation="horizontal" 
                  disabled
                />
              </div>
              <Input
                size="md"
                type="checkbox"
                orientation="horizontal"
                label={t('L_MCFW1418_CHECKBOX_LABEL1')}
                disabled
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.middleConatiner}>
            <div className={classes.itemsContainer}>
              <Input size="md" orientation="horizontal" label={t('L_ID')}  type='number' maxLength={10}/>
              <Input size="md" orientation="horizontal" label={t('L_FAMILY_NAME')} type='alphaNumeric' maxLength={24}/>
              <Input size="md" orientation="horizontal" label={t('L_PRIVATE_NAME')} type='alphaNumeric' maxLength={20} />
              <Button title={t('L_RETRIEVE_BTN')} />
              <Button title={t('L_CLEAN')} />
            </div>
          </div>
        </Card>
        <Card>
          <Table
            customRowRenderer={customRowRender}
            height="30vh"
            data={data}
            columns={StudentSheetForAdmissionColumn()}
          />
        </Card>
        <Card>
          <div className={classes.totalContainer}>
            <div className={attachMultipleClasses(classes.itemsContainer, classes.inputAlign)}>
              <Input size="md" orientation="horizontal" label={t('L_TOTAL_TO_PAY')} disabled/>
              <Input size="md" orientation="horizontal" label={t('L_MCFW1418_INPUT_LABEL2')} disabled/>
              <Input size="md" orientation="horizontal" label={t('L_MCFW1418_INPUT_LABEL3')} disabled/>
              <Input size="md" orientation="horizontal" label={t('L_TOTAL_CASH')} disabled/>
              <Input size="md" orientation="horizontal" label={t('L_TOTAL_CHEQUE')} disabled/>
              <Input size="md" orientation="horizontal" label={t('L_TOTAL_PAYED')} disabled/>
            </div>
            <Input size="sm" orientation="horizontal" />
          </div>
        </Card>
        <div className={classes.bottomContainer}>
          <p>
            <span>*</span>
            {t('L_NO_STUD_515')}
          </p>
          <p>
            <span>*</span>
            {t('L_MCFW1418_BOTTOM_OTHER_DESC')}
          </p>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default StudentSheetForAdmissionUI;
