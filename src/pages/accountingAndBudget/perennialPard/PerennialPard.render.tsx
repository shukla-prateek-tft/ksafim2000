import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './PerennialPard.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn } from './components/Column';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  PrintButton,
  Button,
  PrintExcel,
  DetailButton,
  SearchButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';

import { Select } from '@/ui/Select';

import { Flex } from '@/ui/Flex/Flex';
import { GroupRadio } from '@/ui/GroupRadio';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { REGEX } from '@/constants/appConstant';

const data2 = [
  {
    code1: "001",
    code2: "2025-09-17",
    code3: "STU-1001",
    code4: "CLASS-A",
    code5: "500",
    code6: "300",
    code7: "200",
    code8: "1000",
    code9: "700",
    code10: "150",
    code11: "50",
    code12: "0"
  },
];

interface ReceivingReceiptsProps {}

const PerennialPardUI: React.FC<ReceivingReceiptsProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div>
            <span>{t('L_TOTAL_DEBIT')}</span>
            <Input label={t('L_ANUAL')} orientation="horizontal" type='amount' maxLength={11} />
            <Input label={t('L_GEN_GRADE')} orientation="horizontal" type='amount' maxLength={11}  />
          </div>
          <div>
            <span>{t('L_TOTAL_CREDIT')}</span>
            <Input label={t('L_ANUAL')} orientation="horizontal" type='amount' maxLength={11} />
            <Input label={t('L_GEN_GRADE')} orientation="horizontal" type='amount' maxLength={11} />
          </div>
          <div>
            <span>{t('L_TOTAL_REST')}</span>
            <Input label={t('L_ANUAL')} orientation="horizontal" type='amount' maxLength={11} />
            <Input label={t('L_GEN_GRADE')} orientation="horizontal" type='amount' maxLength={11} />
          </div>
          <div>
            <span>{t('L_BEFOR_PERIOD')}</span>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
          </div>
          <div>
            <span>{t('L_INCLUDE_BEFOR')}</span>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
          </div>
          <div>
            <span>{t('text')}</span>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
            <Input isLabel={true}  orientation="horizontal"  type='amount' maxLength={11}/>
          </div>
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
        <Button size="md" title={t('L_MONEY_SIT1')} />
        <SearchButton />
        <Button size="md" title={t('L_BETWEEN_ITEMS_BY_DEBT_BALANCE')} />
        <PrintButton />
        <PrintExcel />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('topHeader')}
        screenNumber="1386"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_MCFW1386_TEXT')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <div className={classes.flex}>
                <Select
                  orientation="horizontal"
                  label={t('L_FROM_YEAR')}
                  options={[
                    { label: 'dsd', value: 'dsdsd' },
                    { label: 'dsd', value: 'dsdsd' }
                  ]}
                />
                <Input size="sm" orientation="horizontal" disabled /> 
              </div>
              <Input isLabel={true} orientation="horizontal" />
              <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                size="fullWidth"
                orientation="horizontal"
                label={t('L_MCFW1386_INPUT_LABEL1')}
              />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.flex}>
                <Select
                  orientation="horizontal"
                  label={t('L_TO')}
                  options={[
                    { label: 'dsd', value: 'dsdsd' },
                    { label: 'dsd', value: 'dsdsd' }
                  ]}
                />
                <Input size="sm" orientation="horizontal" disabled />
              </div>
              <Input isLabel={true} orientation="horizontal" />
               <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                size="fullWidth"
                orientation="horizontal"
                label={t('L_TO')}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input label={t('L_MCFW1372_CELL_6')} orientation="horizontal" />

              <div className={classes.flex}>
                <DatePickerComponent
                  selectedDate={new Date()}
                  onChange={() => {}}
                  placeholder=" "
                  size="fullWidth"
                  orientation="horizontal"
                label={t('L_MCFW1386_INPUT_LABEL2')}
               />
               <DatePickerComponent
                  selectedDate={new Date()}
                  onChange={() => {}}
                  placeholder=" "
                  size="fullWidth"
                  orientation="horizontal"
                  label={t('L_TO')}
              />
              </div>
            </div>
            <div className={classes.innerContainer}>
              <GroupRadio
                // orientation="horizontal"
                title={t('L_CATALOG_TO')}
                options={[
                  { label: t('L_STUDY'), value: 'sdfsdfsd' },
                  { label: t('L_KANEND_YEAR'), value: 'sdfsdfsd' }
                ]}
                name={''}
                selectedValue={''}
                onChange={() => {}}
                size="sm"
              />
            </div>
            <div className={classes.innerContainer}>
              <Select
                orientation="horizontal"
                isLabel={true}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
              />
              <div className={classes.flex}>
                <Button size="md" title={t('L_SEARCH')} />
                <Button size="md" title={t('U_CLEAR')} />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.mainContainer}>
            <Input size="fullWidth" label={t('L_SERVICE_TYPE')} orientation="horizontal" type='text' maxLength={10}/>
            <Input size="fullWidth" label={t('L_FINANCE_YEAR')} orientation="horizontal"type='number' maxLength={5} />
            <Flex>
              <Input size="fullWidth" label={t('L_MCFW1372_CELL_6')} orientation="horizontal" />
              <Input size="fullWidth" disabled orientation="horizontal" maxLength={40} type='text' pattern={REGEX.allCharacter} />
            </Flex>
            <Flex>
              <Input size="fullWidth" label={t('L_SORT_CODE')} orientation="horizontal" type='number' maxLength={3}/>
              <Input size="fullWidth" orientation="horizontal" maxLength={30} type='text' pattern={REGEX.allCharacter} />
            </Flex>
            <Input size="fullWidth" label={t('L_BUDGET')} orientation="horizontal" type='number' maxLength={10} />
          </div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
           <Table
              columns={CentralizedCorrectionColumn()}
              data={data2}
             customRowRenderer={(key, row, index) => {
              switch (key) {
                case 'code1':
                  return (
                    <Input
                      label=" "
                      type="number"
                      id="codeDescription"
                      maxLength={6}
                      size="fullWidth"
                    />
                  );
                case 'code2':
                  return (
                    <DatePickerComponent
                      selectedDate={new Date()}
                      onChange={() => {}}
                      placeholder=" "
                      size="fullWidth"
                      orientation="horizontal"

                    />
                  );
                case 'code3':
                  return (
                    <Input
                      label=" "
                      type="number"
                      id="catalog_no"
                      maxLength={10}
                      size="fullWidth"
                    />
                  );
                case 'code4':
                  return (
                    <DatePickerComponent
                      selectedDate={new Date()}
                      onChange={() => {}}
                      placeholder=" "
                      size="fullWidth"
                      orientation="horizontal"/>
                  );
                case 'code5':
                  return (
                    <Input
                      label=" "
                      type="amount"
                      id="catalog_no"
                      maxLength={10}
                      size="fullWidth"
                    />
                  );
                case 'code6':
                  return (
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      maxLength={10}
                      size="fullWidth"
                    />
                  );
                case 'code7':
                  return (
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      maxLength={10}
                      size="fullWidth"
                    />
                  );
                case 'code8':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="catalog_no"
                      maxLength={30}
                      pattern={REGEX.allCharacter}
                      size="fullWidth"
                    />
                  );
                case 'code9':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      maxLength={100}
                      size="fullWidth"
                      pattern={REGEX.allCharacter}
                    />
                  );
                case 'code10':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      maxLength={16}
                      size="fullWidth"
                    /> // on click popup
                  );
                case 'code11':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      maxLength={15}
                      size="fullWidth"
                      pattern={REGEX.allCharacter}
                    />
                  );
                case 'code12':
                  return (
                    <Input
                      label=" "
                      type="checkbox"
                      id="codeDescription"
                      maxLength={16}
                      size="fullWidth"
                    />
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

export default PerennialPardUI;
