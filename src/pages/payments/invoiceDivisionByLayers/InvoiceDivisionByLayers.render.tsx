import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './InvoiceDivisionByLayers.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  DetailButton,
  SaveButton,
  PrintButton,
  PrintExcel
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { InvoiceDivisionByLayersUIProps, RowData } from './type';
import { getInputPattern, getLengthPattern } from '@/utils/commonHelper';
import { DatePicker } from '@/ui/DatePicker';

const data2 = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];

const InvoiceDivisionByLayersUI: React.FC<InvoiceDivisionByLayersUIProps> = ({
  state,
  supplierTypes,
  accActTypes,
  serviceTypes,
  accCards,
  classOptions,
  invoiceTypeEnabled,
  invoiceTypeOptions,
  onChangeHeader,
  onChangeRow,
  onServiceTypeChange,
  onValidateInvoice,
  onCalculateAmounts,
  onTransferData,
  pagination
}) => {
  const { t } = useTranslation('common');
  const BottomBar = () => {
    return (
      <Footer
      // handlePaginationChange={handlePagination}
      // pagination={pagination}
      />
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.flex}>
        <DetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <Button size="md" title={t('L_CALCULATE_AMOUNT')} onClick={onCalculateAmounts} />
        <PrintExcel />
        <PrintButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1396')}
        screenNumber="1396"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input  size="md"
                pattern={getLengthPattern(11)}
                type="number"
                maxLength={11}
                label={t('L_SUPP_NUM')}
                orientation="horizontal"
              />
            </div>
            <div className={classes.innerContainer}>
              <Input  size="md" type="text" label={t('L_SUPP_NAME')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <Select
               size="md"
                label={t('L_SUPP_TYPE')}
                orientation="horizontal"
                value={state.supplierType?.caseId}
                onChange={v => {
                  const selected = supplierTypes.find(s => s.caseId === Number(v));
                  onChangeHeader('supplierType', selected);
                }}
                options={supplierTypes.map(s => ({ label: s.caseValue, value: String(s.caseId) }))}
              />
            </div>
          </div>
        </Card>

        <Card>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input
                size="md"
                type="number"
                pattern={getLengthPattern(10)}
                maxLength={10}
                label={t('L_INVOICE_NUM')}
                orientation="horizontal"
              />
              <Select
                size="md"
                label={t('L_INVOICE_TYPE')}
                orientation="horizontal"
                disabled={!invoiceTypeEnabled}
                value={state.invoiceType?.code}
                onChange={v =>
                  onChangeHeader(
                    'invoiceType',
                    invoiceTypeOptions.find(o => o.code === Number(v))
                  )
                }
                options={invoiceTypeOptions.map(o => ({ label: o.text, value: String(o.code) }))}
              />
            </div>
            <div className={classes.innerContainer}>
              <DatePicker
                label={t('L_MCFW1372_CELL_3')}
                orientation="horizontal"
                selectedDate={new Date()}
                variant="outlined"
                onChange={()=>{}}
                size="md"
                isTypeISO
              />
              <Input
                min={0}
                maxLength={11}
                label={t('L_INVOICE_SUM')}
                orientation="horizontal"
                size="md"
                type="amount"
              />
            </div>
            <div className={classes.innerContainer}>
              <Select
                size="md"
                orientation="horizontal"
                label={t('L_STOR_ACT_TYPE')}
                value={state.accActType?.code}
                onChange={v =>
                  onChangeHeader(
                    'accActType',
                    accActTypes.find(a => a.code === Number(v))
                  )
                }
                options={accActTypes.map(a => ({ label: a.desc_Aut, value: String(a.code) }))}
              />
              <Input type="number" maxLength={6} pattern={getLengthPattern(6)} />
              <Input
                pattern={getInputPattern(30)}
                type="text"
                maxLength={30}
                label={t('L_DESCRIPTION2')}
                orientation="horizontal"
                size="md"
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={CentralizedCorrectionColumn()}
              data={data2}
              customRowRenderer={(key: keyof RowData, row: RowData, index: number) => {
                switch (key) {
                  case 'LEFT_DATE2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          orientation="horizontal"
                          value={row.serviceType}
                          onChange={v => onServiceTypeChange(row.id, Number(v.target.value))}
                          options={serviceTypes.map(s => ({
                            label: s.desc_Aut,
                            value: s.service_Type
                          }))}
                        />
                      </div>
                    );
                  case 'STUDENT_ID':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          orientation="horizontal"
                          value={row.accCard}
                          onChange={v => onChangeRow(row.id, { accCard: Number(v) })}
                          options={accCards.map(a => ({
                            label: a.descAut ?? String(a.accCard),
                            value: String(a.accCard)
                          }))}
                        />
                      </div>
                    );
                  case 'FAMILY_NAME':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          orientation="horizontal"
                          value={key === 'FAMILY_NAME' ? row.classFrom : row.classTo}
                          onChange={v =>
                            onChangeRow(
                              row.id,
                              key === 'FAMILY_NAME'
                                ? { classFrom: Number(v) }
                                : { classTo: Number(v) }
                            )
                          }
                          options={classOptions.map(c => ({
                            label: c.caseValue,
                            value: String(c.caseId)
                          }))}
                        />
                        <Input type='text' label={t('')} orientation="horizontal" />
                      </div>
                    );
                  case 'FAMILY_NAME2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          orientation="horizontal"
                          value={key === 'FAMILY_NAME2' ? row.classFrom : row.classTo}
                          onChange={v =>
                            onChangeRow(
                              row.id,
                              key === 'FAMILY_NAME2'
                                ? { classFrom: Number(v) }
                                : { classTo: Number(v) }
                            )
                          }
                          options={classOptions.map(c => ({
                            label: c.caseValue,
                            value: String(c.caseId)
                          }))}
                        />
                        <Input type='text' label={t('')} orientation="horizontal" />
                      </div>
                    );
                  case 'ASS_CO':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="codeDescription"
                          maxLength={4}
                          variant="borderless"
                          pattern={getLengthPattern(4)}
                        />
                      </div>
                    );
                  case 'LEFT_DATE':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="amount"
                          id="codeDescription"
                          maxLength={7}
                          variant="borderless"
                          pattern={getLengthPattern(7)}
                        />
                      </div>
                    );

                  default:
                    return row[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default InvoiceDivisionByLayersUI;
