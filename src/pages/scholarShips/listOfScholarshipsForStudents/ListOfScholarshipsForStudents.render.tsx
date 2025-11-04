import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ListOfScholarshipsForStudents.module.scss';
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
  PrintButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';

import clsx from 'clsx';

import { GrErase } from 'react-icons/gr';
import { REGEX } from '@/constants/appConstant';

const data2 = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];
interface ReceivingReceiptsProps {}

const ListOfScholarshipsForStudentsUI: React.FC<ReceivingReceiptsProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div>{t('L_NO_STUD_515')}</div>
          <div>{t('L_BOTTOM_TEXT_MCFW_1331')}</div>
        </div>
        <Footer
        // handlePaginationChange={handlePagination}
        // pagination={pagination}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button size="md" title={t('L_RECEIVING_FROM_A_GROUP')} />
        <Button size="md" title={t('L_RETURN_STUD')} />
        <Button size="md" title={t('L_MOVE_PARAG')} />
        <Button size="md" title={t('L_CREDIT_TO_ITEM')} />
        <Button size="md" title={t('L_DEPLOY_AUTOMAT')} />
        <Button size="md" title={t('L_DEPLOY_MANUAL')} />
        <Button size="md" title={t('L_SUM_DISTRIB')} />
        <Button size="md" title={t('L_SCHOL_RETURN')} />
        <Button size="md" title={t('T_MCFL0005')} />

        <PrintButton />
        <CancelButton />
        <AddButton />
        <SaveButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1331')}
        screenNumber="1331"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW1331')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input type='number' maxLength={7}  label={t('L_ACT_NO1')} orientation="horizontal" />
              <Input type='number' maxLength={6} label={t('L_SERVICE_TYPE')} orientation="horizontal" />
              <div className={classes.flex}>
                <Input type='number' maxLength={7} label={t('L_STUDENTS_COUNT')} orientation="horizontal" />
                <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} label={t('L_MILGA_SUM')} orientation="horizontal" />
              </div>
            </div>
            <div className={classes.innerContainer}>
              <Input  type='number' maxLength={10} label={t('L_PROTOCOL')} orientation="horizontal" />
              <Input   label={t('L_ACC_CARD1')} orientation="horizontal" />
              <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} label={t('L_DISTRIB_ALL')} orientation="horizontal" />
              <Input
                // label={t('L_ACC_CARD1')}
                type="checkbox"
                orientation="horizontal"
              />
            </div>
            <div className={classes.innerContainer}>
              <Input  type='number' label={t('L_ACC_ACT_TYPE')} maxLength={3} orientation="horizontal" />
              <div className={classes.flex}>
                <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} label={t('L_TOTAL_ACTUALLY_DISTRIBUTED')} orientation="horizontal" />
                <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} label={t('L_REST')} orientation="horizontal" />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('L_PAR_CREDIT')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input type='number' maxLength={10} label={t('L_ID')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <Input pattern={REGEX.allCharacter} maxLength={24} label={t('L_FAMILY_NAME')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <Input pattern={REGEX.allCharacter} maxLength={20} label={t('L_PRIVATE_NAME')} orientation="horizontal" />
            </div>
            <div className={clsx(classes.innerContainer, classes.flex)}>
              <div className={classes.flex}>
                <Button size="md" title={t('L_CLEAN')} />
                <Button size="md" title={t('L_RETRIEVE_BTN')} />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('L_PAR_CREDIT')}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={CentralizedCorrectionColumn()}
              data={data2}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'CHECK':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
                      </div>
                    );
                  case 'LEFT_DATE2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'STUDENT_ID':
                    return (
                      <div className={classes.ListofGefenCell}>
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
                      </div>
                    );
                  case 'FAMILY_NAME':
                    return (
                      <div className={classes.ListofGefenCell}>
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
                      </div>
                    );
                  case 'FAMILY_NAME2':
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
                  case 'ASS_CO':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'LEFT_DATE':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'FAMILY_NAME3':
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
                  case 'ASS_CO2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'LEFT_DATE3':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Button renderIcon={<GrErase />} />
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

export default ListOfScholarshipsForStudentsUI;
