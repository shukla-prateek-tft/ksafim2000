import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CutoutEnteringConcentration.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn } from './component';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  DetailButton,
  SaveButton,
  PrintButton,
  PrintExcel,
  BackToPageButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { GroupRadio } from '@/ui/GroupRadio';
import { Flex } from '@/components';

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

const CutoutEnteringConcentrationUI: React.FC<ReceivingReceiptsProps> = () => {
  const { t } = useTranslation('common');
  const [selected, setSelected] = useState('yes');
  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('T_TEXT2_BOTTOMTEXT')}</span>
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
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <PrintButton />
        <PrintExcel />
      </div>
    );
  };

  const TopCardHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button size="md" title={t('L_REP_PRINT')} />
        <Button size="md" title={t('T_MCFW1344')} />
        <Button size="md" title={t('T_TEXT4_MCFW1388')} />
        <Button size="md" title={t('T_TEXT3_MCFW1388')} />
        <Button size="md" title={t('T_MCFL0005')} />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="1388"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFL0005')} renderHeaderItems={<TopCardHeader />}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer1}>
              <Input
                label={t('L_ACT_NO1')}
                orientation="horizontal"
                type="number"
                maxLength={7}
                disabled
              />
              <Input
                label={t('L_STUDENTS_COUNT')}
                orientation="horizontal"
                type="text"
                maxLength={100}
                disabled
              />
            </div>
            <div className={classes.innerContainer1}>
              <Input
                label={t('L_TOPIC_MES')}
                orientation="horizontal"
                type="number"
                maxLength={7}
                disabled
              />
              <Input
                label={t('T_TEXT_MCFW1388')}
                orientation="horizontal"
                type="number"
                maxLength={7}
                disabled
              />
            </div>
            <div className={classes.innerContainer1}>
              <div className={classes.emptySpace}></div>
              <Input
                label={t('T_TEXT2_MCFW1388')}
                orientation="horizontal"
                type="number"
                maxLength={7}
                disabled
              />
            </div>
            <div className={classes.innerContainer2}>
              <div className={classes.groupContainer}>
                <GroupRadio
                  onChange={value => setSelected(value)}
                  selectedValue={selected}
                  title={t('L_BOTTON_TEXT2_MCBS1355')}
                  orientation="horizontal"
                  options={[
                    { label: t('V_YES'), value: 'yes' },
                    { label: t('V_NO'), value: 'no' },
                    { label: t('L_2PARENTS'), value: 'two_parents' }
                  ]}
                  name="parent_radio"
                  variant="borderless"
                  size="sm"
                  labelOrientation="horizontal"
                />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('L_SEARCH')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input label={t('L_ID')} orientation="horizontal" type="number" maxLength={10} />
              <div className={classes.itemsContainer}>
                <div className={classes.flex}>
                  <Select
                    orientation="horizontal"
                    label={t('L_CLASS_FROM')}
                    options={[
                      { label: 'dsd', value: 'dsdsd' },
                      { label: 'dsd', value: 'dsdsd' }
                    ]}
                  />
                  <Input orientation="horizontal" type="number" maxLength={2} />
                </div>
              </div>
            </div>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_FAMILY_NAME')}
                orientation="horizontal"
                type="alphaNumeric"
                maxLength={24}
              />
              <div className={classes.itemsContainer}>
                <div className={classes.flex}>
                  <Select
                    orientation="horizontal"
                    label={t('L_CLASS_TO')}
                    options={[
                      { label: 'dsd', value: 'dsdsd' },
                      { label: 'dsd', value: 'dsdsd' }
                    ]}
                  />
                  <Input orientation="horizontal" type="number" maxLength={2} />
                </div>
              </div>
            </div>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_PRIVATE_NAME')}
                orientation="horizontal"
                type="alphaNumeric"
                maxLength={20}
              />
            </div>
            <div className={classes.innerContainer}>
              <Flex gap="10px">
                <Button size="md" title={t('L_RETRIEVE_BTN')} />
                <Button size="md" title={t('L_CLEAN')} />
              </Flex>
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
                  case 'LEFT_DATE4':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
                      </div>
                    );
                  case 'LEFT_DATE3':
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
                  case 'LEFT_DATE40':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
                      </div>
                    );
                  case 'LEFT_DATE30':
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
                  case 'LEFT_DATE400':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
                      </div>
                    );
                  case 'LEFT_DATE500':
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

export default CutoutEnteringConcentrationUI;
