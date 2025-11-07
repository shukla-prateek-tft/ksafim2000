import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CollectionPlans.module.scss';
import { Table } from '@/ui/Table';
import { ScholarshipSectionColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

import { Flex } from '@/ui/Flex/Flex';
import { BiSend } from 'react-icons/bi';
import { REGEX } from '@/constants/appConstant';
import { DatePicker } from '@/ui/DatePicker';

const data = [
  {
    L_Invoice_Number: 'No error',
    vineCode: 'VC001',
    codeDescription: 'Code 001 Description',
    accountant: 'John Doe',
    appSecond: 'Jane Smith',
    list: 'List Item A'
  }
];

interface CollectionPlansProps {}

const CollectionPlansUI: React.FC<CollectionPlansProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div>{t('L_CENTER_TEXT4_MCFW0604')}</div>
        <div>{t('L_CENTER_TEXT5_MCFW0604')}</div>

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
        <Button size="md" title={t('T_MCFR0646')} />
        <CancelButton />
        <AddButton />
        <SaveButton />
        <OtherDetailButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="0604"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_CENTER_TEXT3_MCFW0604')}>
          <div className={classes.mainContainer}>
            <div>
              <Select
                size="fullWidth"
                label={t('L_ACC_ACT_TYPE')}
                options={[]}
                orientation="horizontal"
              />
              <Input
                label={t('L_FULL_NAME')}
                orientation="horizontal"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={30}
              />

              <Flex gap="10px">
                <Select label={t('L_TO')} options={[]} orientation="horizontal" />
                <Input orientation="horizontal" type="number" maxLength={2} />
              </Flex>
              <Flex gap="10px">
                <Input label={t('L_OUTER_STUDENT')} orientation="horizontal" type="checkbox" />
                <Input label={t('L_LONG_DAY')} orientation="horizontal" type="checkbox" />
              </Flex>
              <Input label={t('L_TRANSPORT')} orientation="horizontal" type="checkbox" />
              <Flex gap="10px">
                <DatePicker
                  size="fullWidth"
                  label={t('L_END_DATE')}
                  orientation="horizontal"
                  disabled
                />
                <Input orientation="horizontal" type="checkbox" />
              </Flex>
              <Flex gap="10px">
                <Select
                  size="fullWidth"
                  label={t('L_MAJOR')}
                  options={[]}
                  orientation="horizontal"
                />
                <Input size="fullWidth" orientation="horizontal" type="number" maxLength={3} />
              </Flex>
            </div>
            <div>
              <Input
                label={t('L_CHARGE_NUM')}
                orientation="horizontal"
                size="fullWidth"
                disabled
                type="number"
                maxLength={3}
              />
              <Input
                label={t('L_PROG_NAME')}
                orientation="horizontal"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={16}
              />

              <Flex gap="10px">
                <Select label={t('L_CLASS_CODE')} options={[]} orientation="horizontal" />
                <Input orientation="horizontal" type="number" maxLength={2} />
              </Flex>

              <Input label={t('L_AUTO_SET')} orientation="horizontal" type="checkbox" />
              <Flex gap="10px">
                <Input
                  size="fullWidth"
                  label={t('L_STUDY_GROUP')}
                  orientation="horizontal"
                  type="number"
                  maxLength={18}
                />
                <Input orientation="horizontal" disabled />
              </Flex>
              <DatePicker
                size="fullWidth"
                label={t('L_T_START')}
                orientation="horizontal"
                disabled
              />
              <Input
                size="fullWidth"
                label={t('L_ALFA_CHOICE1')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={20}
              />
            </div>
          </div>
          <div className={classes.flexCenter}>
            <div>{t('L_CENTER_TEXT_MCFW0604')}</div>
            <div>{t('L_CENTER_TEXT2_MCFW0604')}</div>
          </div>
        </Card>

        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              tableHeaderClassName={classes.tableHeader}
              columns={ScholarshipSectionColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
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
                  case 'vineCode':
                    return (
                      <div>
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
                      <div>
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
                      <div>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'appSecond':
                    return (
                      <div>
                        <Input
                          label=" "
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                          type="checkbox"
                        />
                      </div>
                    );
                  case 'appSecond2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="checkbox"
                          id="catalog_no"
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
          <div className={classes.flexEnd}>
            <Input label={t('L_TOTAL')} orientation="horizontal" />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default CollectionPlansUI;
