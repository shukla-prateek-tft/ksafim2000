import classes from './ListOfPaymentInstructions.module.scss';
import { Table } from '@/ui/Table';
import { ListOfPaymentInstructionsColumn } from './Components';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Input } from '@/ui/Input';
import { Footer } from '@/ui/Footer';
import { PaymentRecord, PaymentsApiResponse } from './types';
import { CustomRowRenderType } from '../type';
import { getFormatedNumber } from '@/utils/commonHelper';

interface ListOfPaymentInstructionsProps {
  renderActionItems: () => JSX.Element;
  data: PaymentsApiResponse;
  customRowRenderer: CustomRowRenderType<PaymentRecord>;
  handlePagination: (page: number) => void;
}

const ListOfPaymentInstructions = ({
  renderActionItems,
  customRowRenderer,
  data,
  handlePagination
}: ListOfPaymentInstructionsProps) => {
  const { t } = useTranslation('common');
  const BottomBar = () => {
    return (
      <Footer handlePaginationChange={handlePagination} pagination={data?.metaInfo} showPagination={true} />
    );
  };

  const TopHeader = () => {
    return <>{renderActionItems()}</>;
  };

  return (
    <ScreenLayout renderFooter={<BottomBar />} renderHeader={<TopHeader />} screenName="MCFW-1327">
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <legend className={classes.legend}>{t('T_MCFW1327')}</legend>
          <Table
            height={'60vh'}
            data={data?.data || []}
            columns={ListOfPaymentInstructionsColumn()}
            customRowRenderer={customRowRenderer}
          />
        </fieldset>
        <div className={classes.otherDetailContainer}>
          <Input
            label={t('L_TOTAL')}
            value={getFormatedNumber(data?.summaryData?.total_Amount)}
            orientation="horizontal"
          />
          <Input
            disabled
            orientation="horizontal"
            value={getFormatedNumber(data?.summaryData?.total_Outcome)}
          />
        </div>
      </div>
    </ScreenLayout>
  );
};

export default ListOfPaymentInstructions;
