import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './StudentFeeAndDiscount.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { BiSend } from 'react-icons/bi';

import { Flex } from '@/ui/Flex/Flex';
import {
  DetailButton,
  PrintExcel,
  SearchButton,
  Button,
  PrintButton,
  BackToPageButton
} from '@/components/commonButtons';
import { BottomToolBar } from '@/ui/BottomToolBar';
const data = [
  {
    check: true,
    vineCode: 'VC001',
    codeDescription: 'Code 001 Description',
    accountant: 'John Doe',
    appSecond: 'Jane Smith',
    list: 'List Item A',
    errorDescription: 'No error'
  }
];
interface StudentFeeAndDiscountProps {}

const StudentFeeAndDiscountUI: React.FC<StudentFeeAndDiscountProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <Input
          type='number'
          maxLength={4}
            aria-required="true"
            id="inv_Desc_Aut"
            label={t('L_STUDENTS_COUNT')}
            orientation="horizontal"
          />
          <span>{t('L_THERE_IS_A_NOTE_FOR_THE_STUDENT')}</span>
        </div>
        <BottomToolBar
          pagination={{
            pageSize: 10,
            pageNumber: 1,
            totalPages: 5,
            totalCount: 50,
            hasPreviousPage: false,
            hasNextPage: true
          }}
          showPagination={true}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <PrintButton />
        <PrintExcel />
        <SearchButton />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };

  const TopHeaderOnCard = () => {
    return (
      <div className={classes.topHeaderCardContainer}>
        <Button size="md" title={t('L_DEBT_BALANCE_LETTER_TO_PRAYER')} />
        <Button size="md" title={t('T_MCFW1344')} />
        <Button size="md" title={t('L_DET_COLLECT')} />
        <Button size="md" title={t('L_CREDIT_CARD2')} />
        <Button size="md" title={t('L_RECEPT_ASHRAIT')} />
        <Button size="md" title={t('L_MCFW0621')} />
        <Button size="md" title={t('L_MOVE_PARAG')} />
        <Button size="md" title={t('T_MCFW0609')} />
        <Button size="md" title={t('L_MONEY_SIT2')} />
        <Button size="md" title={t('L_MONEY_SIT1')} />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="0107"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCSQ0107')} renderHeaderItems={<TopHeaderOnCard />}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'L_Invoice_Number2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'STUDENT_ID':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Flex gap="1px">
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                          />
                        </Flex>
                      </div>
                    );
                  case 'L_Invoice_Number':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'STUDENT_ID2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Flex gap="1px">
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                          />
                        </Flex>
                      </div>
                    );
                  case 'STUDENT_ID3':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Flex gap="1px">
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                          />
                        </Flex>
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'accountant':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" checked={row.check} />
                      </div>
                    );
                  case 'appSecond':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'list':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'errorDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'check':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Button
                          onClick={() => {}}
                          variant="link"
                          renderIcon={<BiSend size={18} />}
                        />
                      </div>
                    );

                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default StudentFeeAndDiscountUI;
