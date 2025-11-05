import { useTranslation } from 'react-i18next';
import { SupplierSelectColum } from './component/Columns';
import { Table } from '@/ui/Table';
import classes from './SupplierSelection.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { attachMultipleClasses, getInputPattern } from '@/utils/commonHelper';
import { getPaymentSuppilerListParamsType } from '@/services/supplier/types';
import { SupplierSelectionUIProps } from './type';



const SupplierSelectionUI: React.FC<SupplierSelectionUIProps> = ({
  data,
  handlePagination,
  handleSorting,
  handleChangeFilters,
  handleShow,
  filters,
  handleSelectRow,
  selectedSupplier,
  renderActionItems,
  onSave
}) => {
  const { t } = useTranslation('paymentSuppliersList');

  return (
    <div className={classes.container}>
      <fieldset>
        <legend>{t('headerTop')}</legend>
        <div className={classes.aligner}>
          <div className={attachMultipleClasses(classes.aligner, classes.inputAligner)}>
            <Input
              size="md"
              type="number"
              id="Supp_Num"
              className="input"
              orientation="horizontal"
              value={filters.Supp_Num}
              onChange={handleChangeFilters}
              label={t('business')}
              pattern={getInputPattern(10)}
            />
            <Input
              size="md"
              type="alphaNumeric"
              id="Supp_Name"
              className="inputSmall"
              orientation="horizontal"
              value={filters.Supp_Name}
              onChange={handleChangeFilters}
              label={t('doubtText')}
              maxLength={30}
            />
          </div>
          <Button size="md" onClick={handleShow} title={t('show')} />
        </div>

        <legend className={classes.legendOther}>{t('headerBelow')}</legend>
        <Table
          onRowSelect={handleSelectRow}
          columns={SupplierSelectColum()}
          onSort={handleSorting}
          data={data?.data || []}
          selectedRow={selectedSupplier}
          rowKey="supp_Num"
          height="50vh"
          onRowDoubleClick={onSave}
        />
        <BottomToolBar
          pagination={data?.metaInfo}
          handlePaginationChange={handlePagination}
          renderActionItems={renderActionItems}
        />
      </fieldset>
    </div>
  );
};

export default SupplierSelectionUI;
