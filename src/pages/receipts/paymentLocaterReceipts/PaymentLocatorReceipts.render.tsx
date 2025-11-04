import classes from './PaymentLocatorReceipts.module.scss';
import { BottomToolBar } from '@/components';
import { Input, SelectWithInput } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { Card } from '@/ui/Card';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { GroupRadio } from '@/ui/GroupRadio';
import { Button } from '@/components/commonButtons';
import { Table } from '@/ui/Table';
import { RecordsColumns } from './components';
import { ReactNode } from 'react';
import { getInputPattern } from '@/utils/commonHelper';
interface PaymentLocaterReceiptsUIProps {
  renderActionItems: () => JSX.Element | null;
  customRowRenderer: (key: string, row: any, index: number) => ReactNode;
}
const PaymentLocaterReceiptsUI = ({
  renderActionItems,
  customRowRenderer
}: PaymentLocaterReceiptsUIProps) => {
  const { t } = useTranslation('common');
  const hidden = true; // for hidden fields
  return (
    <div className={classes.mainContainer}>
      <Card title={`${t('L_QUERY')}: ${t('T_MCFL0621')}`}>
        <div className={classes.colFlow}>
          <div className={classes.col}>
            <GroupRadio
              name="exampleGroup"
              selectedValue="1"
              onChange={() => {}}
              orientation="vertical"
              labelOrientation="horizontal"
              options={[
                { label: t('V_PARENT'), value: '1' },
                { label: t('V_TEACHER'), value: '2' },
                { label: t('L_CITY'), value: '3' },
                { label: t('V_OTHER'), value: '4' }
              ]}
              size="sm"
            />
          </div>
          <div className={classes.col}>
            <Input
              orientation="horizontal"
              label={`${t('L_IDEN')}/${t('L_CODE_CITY')}`}
              type='number'
              pattern={getInputPattern(20)}
              size="fullWidth"
            />
            <div className={classes.emptySpace}></div>
            <Input
              orientation="horizontal"
              label={`${t('L_FAMILY_NAME')}/${t('L_CITY')}`}
              type='text'
              maxLength={12}
              size="fullWidth"
            />
            <SelectWithInput
              label={t('L_CLASS_CODE')}
              onChangeSelect={() => {}}
              onChangeInput={() => {}}
              inputType='number'
            />
          </div>
          <div className={classes.col}>
            {!hidden ? (
              <Input type="checkbox" orientation="horizontal" label={t('L_RECEPT_ASHRAIT')} />
            ) : (
              <div className={classes.emptySpace} />
            )}
            <div className={classes.emptySpace1} />
            <Input orientation="horizontal" label={t('L_PRIVATE_NAME')} />
            <Select
              orientation="horizontal"
              label={`${t('L_STUDY_YEAR')}`}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          </div>
          <div className={classes.col}>
            <Input type="checkbox" orientation="horizontal" label={t('L_GIFT_RECEIPT')} />
            {!hidden && (
              <Input type="checkbox" orientation="horizontal" label={t('L_DEBIT_CERTIF')} />
            )}
            <div className={classes.emptySpace}></div>
            <div className={classes.emptySpace}></div>
            <div className={classes.buttonSearch}>
              <Button title={t('L_SEARCH')} />
            </div>
          </div>
        </div>
      </Card>

      <Card title={t('T_MCFS0654')}>
        <Table
          tableContainerClassName={classes.table}
          columns={RecordsColumns()}
          data={[{}]}
          customRowRenderer={customRowRenderer}
        />
      </Card>
      <Card>
        <div className={classes.textContent}>
          <p>{t('L_REMARK')}:</p>
          <Badge renderIcon={<PiWarningCircleFill />} title={t('L_621_DESC')} />
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default PaymentLocaterReceiptsUI;
