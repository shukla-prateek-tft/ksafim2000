import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './FinancialTransactionsForTheStudent.module.scss';
import { Table } from '@/ui/Table';
import {
  ParentDetailsColumn,
  StudentGroupColumn,
  DiscountColumn,
  DiscountAccountColumn,
  ServiceTypeColumn
} from './Column';
import { Input } from '@/ui/Input';
import { TextArea } from '@/ui/TextArea';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

interface FinancialTransactionsForTheStudentProps {
  renderActionItems: () => JSX.Element | null;
  parentDetailsCustomRow: (key: string, row: any, index: number) => JSX.Element | undefined;
  studentGroupCustomRow: (key: string, row: any, index: number) => JSX.Element | undefined;
  discountAccountCustomRow: (key: string, row: any, index: number) => JSX.Element | undefined;
  studentDiscountProgramCustomRow: (
    key: string,
    row: any,
    index: number
  ) => JSX.Element | undefined;
  serviceTypeCustomRow: (key: string, row: any, index: number) => JSX.Element | undefined;
}

const FinancialTransactionsForTheStudentUI = ({
  renderActionItems,
  parentDetailsCustomRow,
  studentGroupCustomRow,
  discountAccountCustomRow,
  studentDiscountProgramCustomRow,
  serviceTypeCustomRow
}: FinancialTransactionsForTheStudentProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <fieldset className={classes.mainContainer}>
        <legend>{t('L_MCSW0101')}</legend>
        <div className={classes.flexBetween}>
          <div>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_ID')}
              type="number"
              maxLength={10}
            />
            <div className={classes.flex}>
              <Input size="sm" orientation="horizontal" label={t('L_CLASS_CODE')} />
              <Input
                size="sm"
                orientation="horizontal"
                label={t(' ')}
                maxLength={2}
                type="number"
              />
            </div>
            <DatePickerComponent
              selectedDate={new Date()}
              onChange={() => {}}
              placeholder=" "
              id="L_DATE"
              size="sm"
              orientation="horizontal"
              label={t('L_LEFT_DATE')}
            />
          </div>
          <div>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_FAMILY_NAME')}
              pattern={REGEX.allCharacter}
              maxLength={24}
              type="text"
            />
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_MAJOR')}
              maxLength={6}
              type="number"
            />
            <Input size="sm" orientation="horizontal" label={t('L_USE_TRANSPORT')} />
          </div>
          <div>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_PRIVATE_NAME')}
              pattern={REGEX.allCharacter}
              type="text"
              maxLength={20}
            />
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_NUM_CHILD_FAM')}
              maxLength={2}
              type="number"
            />
          </div>
          <TextArea orientation="horizontal" label={t('L_COMMENT')} maxLength={255} />
        </div>
        <fieldset>
          <legend>{t('L_STUDENT_ADD')}</legend>
          <div className={classes.flex}>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_STREET')}
              pattern={REGEX.allCharacter}
              type="text"
              maxLength={17}
            />
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_CITY')}
              pattern={REGEX.allCharacter}
              type="text"
              maxLength={20}
            />
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_BUILD_NUM')}
              pattern={REGEX.allCharacter}
              type="text"
              maxLength={5}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>{t('L_PARENT_DETAIL')}</legend>
          <Table
            height="20vh"
            data={[{}]}
            customRowRenderer={parentDetailsCustomRow}
            columns={ParentDetailsColumn()}
          />
        </fieldset>
        <div className={classes.flex}>
          <fieldset>
            <legend>{t('L_MCSW0107_COLLECTION_PLAN_WITH_STUDENT')}</legend>
            <Table
              height="20vh"
              data={[{}]}
              columns={StudentGroupColumn()}
              customRowRenderer={studentGroupCustomRow}
            />
          </fieldset>
          <fieldset>
            <legend>{t('L_MCSW0107_STUDENT_DISCOUNT_PROGRAM')}</legend>
            <Table
              height="20vh"
              data={[{}]}
              columns={DiscountColumn()}
              customRowRenderer={studentDiscountProgramCustomRow}
            />
          </fieldset>
          <fieldset>
            <Table
              height="20vh"
              data={[{}]}
              columns={DiscountAccountColumn()}
              customRowRenderer={discountAccountCustomRow}
            />
          </fieldset>
        </div>
        <fieldset>
          <legend>{t('L_MCSW0107_PERSONAL_DISCOUNT')}</legend>
          <Table
            height="20vh"
            data={[{}]}
            columns={ServiceTypeColumn()}
            customRowRenderer={serviceTypeCustomRow}
          />
        </fieldset>
      </fieldset>

      <div className={classes.bottomContainer}>
        <BottomToolBar renderActionItems={renderActionItems} />
      </div>
    </>
  );
};

export default FinancialTransactionsForTheStudentUI;
