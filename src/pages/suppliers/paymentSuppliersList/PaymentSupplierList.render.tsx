import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from './styles';
import { attachMultipleClasses, getFormatedDate, isFutureDate } from '@/utils/commonHelper';
import { Footer } from '@/ui/Footer';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Button } from '@/components/commonButtons';
import classes from './PaymentSupplierList.module.scss';
import { Input } from '@/ui/Input';
import { Table } from '@/ui/Table';
import { MdDateRange } from 'react-icons/md';
import Badge from '@/ui/Badge/Badge';
import { IoIosInformationCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/Languages';
import { GrErase } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { getFormatedNumber, getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';
import { RiEdit2Line, RiErrorWarningFill } from 'react-icons/ri';
import { HiOutlineCreditCard } from 'react-icons/hi2';
import { PaymentSupplierListcolumn, SupplierPaymentsColumns } from './components/Column';
import { CustomRowRenderType } from '@/pages/type';
import { ExtendedSupplierRow, PaymentRow, PaymentSupplierListUIProps } from './type';
import { SupplierType } from '@/store/slices/PaymentSupplier/types';
import type { TableColumnType, SortDirection as GlobalSortDirection } from '@/pages/type';
import { useAuth } from '@/hooks';

const PaymentSuppliersUiList: React.FC<PaymentSupplierListUIProps> = ({
  data,
  handleShow,
  handlePagination,
  pagination,
  handleSelectSupplier,
  selectedSuppliers,
  renderActionItems,
  filters,
  supplierFilter,
  handleChangeFilters,
  handleClearFilters,
  headerTitle,
  paramTypeData,
  handleApiSortingSupplier,
  handleGoToPaymentSupplier,
  renderMainButtons,
  handleGoToSupplier
}) => {
  const { t } = useTranslation('paymentSuppliersList');
  const { t: t_common } = useTranslation('common');
  const { paymentList } = useSelector(
    (state: { paymentSupplier: { paymentList: PaymentRow[] } }) => state.paymentSupplier
  );
  const navigate = useNavigate();
  const [showPaymentTable, setShowPaymentTable] = useState(false);
  const { isMunicipality }  = useAuth();
  const uiScale = isMunicipality ? "primary" : "secondary";
  const totalAmount = paymentList?.reduce(
    (acc: number, num: PaymentRow) => acc + Number(num?.outcome_Sum),
    0
  );
  const handleClickSelectSupplier = (data: SupplierType) => {
    handleSelectSupplier(data);
    setShowPaymentTable(true);
  };
  const paymentConfirmationData = {
    true: <Badge badgeType="transparent" variant="success" title={t_common('noConfirmText')} />,
    false: <Badge badgeType="transparent" variant="danger" title={t_common('L_APPROVED')} />
  };

  const paymentStatusData = [
    {
      id: 0,
      name: t('statusOpen'),
      icon: () => <Badge variant="secondary" title={t('statusOpen')} />
    },
    {
      id: 1,
      name: t('statusSent'),
      icon: () => <Badge variant="success" title={t('statusSent')} />
    },
    {
      id: 2,
      name: t('sentAndOkStatus'),
      icon: () => <Badge variant="danger" title={t('sentAndOkStatus')} />
    },
    {
      id: 3,
      name: t('waitingAndWrongStatus'),
      icon: () => <Badge variant="warning" title={t('waitingAndWrongStatus')} />
    }
  ];
  const supplierTableRenderer: CustomRowRenderType<ExtendedSupplierRow> = (key, row) => {
    if (!row) return undefined;
    switch (key) {
      case 'supp_Num':
        return (
          <span className={classes.supplierNumberCell}>
            <RiEdit2Line
              size={18}
              className={classes.icon}
              onClick={() => {
                navigate(`/suppliers/${row?.supp_Num}`, {
                  state: row
                });
              }}
            />
            <span>{row?.supp_Num?.toString().padStart(9, '0')}</span>
          </span>
        );

      case 'bank_Name':
        return (
          <span className={classes.supplierNumberCell}>
            {row?.bank_Name}-{row?.bank}
          </span>
        );
      case 'phone_Num1':
        return (
          <span className={classes.supplierNumberCell}>
            {row?.phone_Num1}
            <Spacer />
            {row?.phone_Prefix1}
          </span>
        );

      case 'tax_Deduct':
        return <span>{row?.tax_Deduct?.toFixed(2)}</span>;

      case 'tax_Date':
        return (
          <Badge
            title={getFormatedDate(row?.tax_Date,'DD/MM/YYYY') || ''}
            variant="primary"
            renderIcon={!isFutureDate(row?.tax_Date)?<RiErrorWarningFill color="#b44b52" />:<></>}
          />
        );

      case 'hsb_Open':
      case 'total':
        return <Badge title={getFormatedNumber(row[key])} variant="warning" renderIcon={<></>} />;

      case 'action1':
        return (
          <span
            className={classes.supplierNumberCell}
            onClick={() => handleGoToPaymentSupplier(row)}
          >
            <HiOutlineCreditCard className={classes.icon} size={18} />
          </span>
        );

      case 'action2':
        return (
          <span
            onClick={() => {
              navigate(AppRoutes.PRINT_PREVIEW_SUPPLIER_INVOICES, {
                state: { data: row }
              });
            }}
          >
            <MdDateRange className={classes.icon} size={18} />
          </span>
        );
    }
  };
  const supplierPaymentListRowRenderer: CustomRowRenderType<PaymentRow> = (key, row) => {
    if (!row) return undefined;
    switch (key) {
      case 'act_No':
        return (
          <div className={classes.underLinedCell}>
            <span
              onDoubleClick={() => {
                handleGoToSupplier(row?.act_No ?? '');
              }}
            >
              {row?.act_No?.slice(3) || ''}
            </span>
          </div>
        );

      case 'date_Aut':
        return <div className={classes.paymentCell}>{getFormatedDate(row?.date_Aut) || ''}</div>;

      case 'outcome_Sum': {
        const val = row?.outcome_Sum;
        const numVal = typeof val === 'number' || typeof val === 'string' ? val : null;
        return (
          <span dir="ltr">
            <Badge title={getFormatedNumber(numVal)} renderIcon={<></>} />
          </span>
        );
      }

      case 'is_Confirm':
        // Usage
        const icon = paymentConfirmationData[!!row[key]] || null;

        return icon;
      case 'transmit':
        return paymentStatusData.find(elem => elem?.id === row[key])?.icon() || null;
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => { 
    if (e.key === 'Enter') { 
      e.preventDefault(); handleShow(); 
    } 
  }

  return (
    <ScreenLayout
      screenName={headerTitle || t('listOfSuppiler')}
      screenNumber="1370"
      renderHeader={renderActionItems}
      renderFooter={<Footer pagination={pagination} handlePaginationChange={handlePagination} />}
    >
      <div className={attachMultipleClasses(classes.globalContainer, classes[`scale-${uiScale}`])}>
        <Card>
          <div className={classes.mainContainer}>
            <div>
              <div className={classes.inputHeaderContainer}>
                {(
                  <Input
                    placeholder={t('business')}
                    type="number"
                    id="Supp_Num"
                    size="md"
                    value={supplierFilter.Supp_Num}
                    onChange={handleChangeFilters}
                    onKeyDown={handleEnter}
                    pattern={getInputPattern(10)}
                    orientation="horizontal"
                  />
                )}
                <Input
                  type="alphaNumeric"
                  id="Supp_Name"
                  value={supplierFilter.Supp_Name}
                  onChange={handleChangeFilters}
                  onKeyDown={handleEnter}
                  placeholder={t('doubtText')}
                  pattern={REGEX.allCharacter}
                  maxLength={30}
                  size="md"
                  orientation="horizontal"
                />
              </div>
              {paramTypeData?.param_Type === '2' && paramTypeData?.param === '1' && (
                <div className={classes.inputHeaderContainer}>
                  <Input
                    id="Supp_Num_Dealer"
                    className="input"
                    type="number"
                    orientation="horizontal"
                    value={filters.Supp_Num_Dealer}
                    onChange={handleChangeFilters}
                    onKeyDown={handleEnter}
                    placeholder={t('taxFileFromP')}
                    pattern={getInputPattern(10)}
                    size="md"
                  />

                  <Input
                    id="Supp_Vat_Num"
                    className="input"
                    type="number"
                    orientation="horizontal"
                    value={filters.Supp_Vat_Num}
                    onChange={handleChangeFilters}
                    onKeyDown={handleEnter}
                    placeholder={t('fileNoMh')}
                    pattern={getInputPattern(10)}
                    size="md"
                  />
                </div>
              )}
            </div>
            <div className={classes.checkboxContainer}>
              <Input
                orientation="horizontal"
                label={t('openInvoicesText')}
                id="If_Hsb_Open"
                checked={filters.If_Hsb_Open}
                onChange={handleChangeFilters}
                type="checkbox"
                inversed
              />
              <Input
                orientation="horizontal"
                label={t('unconfirmedInvoice')}
                id="Inv_Confirm"
                checked={filters.Inv_Confirm}
                onChange={handleChangeFilters}
                type="checkbox"
                inversed
              />
            </div>

            <div className={classes.headerButtonContainer}>
              <Button size="sm" variant="outline" onClick={handleShow} title={t('show')} />
              <Button size="sm" onClick={handleClearFilters} title={t_common('L_CLEAN')} />
            </div>
          </div>
        </Card>
        <Card title={t('headerBelow')} renderHeaderItems={renderMainButtons}>
          <div className={classes.supplierTable}>
            <Table
              columns={
                PaymentSupplierListcolumn({
                  t: t,
                  t_common: t_common
                }) as TableColumnType<ExtendedSupplierRow>[]
              }
              data={data as ExtendedSupplierRow[]}
              customRowRenderer={supplierTableRenderer}
              rowKey={'supp_Num'}
              selectedRow={selectedSuppliers as ExtendedSupplierRow | null}
              onRowSelect={(row: ExtendedSupplierRow) => handleClickSelectSupplier(row)}
              onSort={(key: keyof ExtendedSupplierRow, direction: 'Asc' | 'Desc') =>
                handleApiSortingSupplier(String(key), direction as GlobalSortDirection)
              }
            />
          </div>
        </Card>
        {/* Update Table Component as per the the actual data - Vasav*/}
        {showPaymentTable && !!paymentList?.length && (
          <Card title={t('headerBelow')}>
            <div className={classes.paymentTableContainer}>
              <Table
                height="15vh"
                columns={SupplierPaymentsColumns({ t: t, t_new: t_common })}
                data={paymentList}
                customRowRenderer={supplierPaymentListRowRenderer}
              />
            </div>
            <div>
              <Input label={t('total')} disabled value={getFormatedNumber(totalAmount)} orientation="horizontal" size='md'/>
            </div>
          </Card>
        )}
      </div>
    </ScreenLayout>
  );
};

export default PaymentSuppliersUiList;
