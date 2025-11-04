import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import classes from './BookkeepingCard.module.scss';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { attachMultipleClasses } from '@/Languages';
import { Footer } from '@/ui/Footer';
import { BookkeepingCardColumn } from './components';
interface Props {
  data: unknown[];
  renderActionItems?: () => JSX.Element;
  customRowRender?: () => JSX.Element;
}
const BookkeepingCardUI = ({ data, renderActionItems, customRowRender }: Props) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      screenNumber="MCFW-1184"
      screenName={`${t('T_MCFW1184')} ${t('L_FINANCE_YEAR')}`}
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
        <Card>
          <div className={classes.middleConatiner}>
            <div className={classes.itemsContainer}>
              <Input
                size="sm"
                orientation="horizontal"
                label={t('L_ACC_NO')}
                value={t('L_CODE')}
                disabled
              />
              <Input
                size="sm"
                value={t('L_DESC')}
                orientation="horizontal"
                maxLength={40}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                label={t('L_SORT_CODE')}
                value={t('L_SORT_CODE')}
                type="number"
                maxLength={3}
                disabled
              />
              <Input size="sm" orientation="horizontal" maxLength={30} disabled />
              <Input
                size="sm"
                orientation="horizontal"
                label={t('L_BUDGET')}
                value={t('BUDGET')}
                type="number"
                maxLength={10}
                disabled
              />
            </div>
          </div>
        </Card>
        <Card>
          <Table
            customRowRenderer={customRowRender}
            height="50vh"
            data={data}
            columns={BookkeepingCardColumn()}
          />
        </Card>
        <Card>
          <div className={classes.totalContainer}>
            <div className={attachMultipleClasses(classes.itemsContainer, classes.inputAlign)}>
              <label>{t('L_TOTAL_DEBIT')}</label>
              <Input
                size="sm"
                orientation="horizontal"
                label={t('L_BEFOR_PERIOD')}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                label={t('L_PERIOD')}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                label={t('L_INCLUDE_BEFOR')}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
            </div>
            <div className={attachMultipleClasses(classes.itemsContainer, classes.inputAlign)}>
              <label>{t('L_TOTAL_CREDIT')}</label>
              <Input
                size="sm"
                orientation="horizontal"
                isLabel={true}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                isLabel={true}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                isLabel={true}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
            </div>
            <div className={attachMultipleClasses(classes.itemsContainer, classes.inputAlign)}>
              <label>{t('L_TOTAL_REST')}</label>
              <Input
                size="sm"
                orientation="horizontal"
                isLabel={true}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                isLabel={true}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
              <Input
                size="sm"
                orientation="horizontal"
                isLabel={true}
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                disabled
              />
            </div>
          </div>
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default BookkeepingCardUI;
