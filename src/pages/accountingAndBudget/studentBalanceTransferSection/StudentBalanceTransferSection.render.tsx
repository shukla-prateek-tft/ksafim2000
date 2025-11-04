import { BottomToolBar } from '@/ui/BottomToolBar';
import classes from './StudentBalanceTransferSection.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { Select } from '@/ui/Select';
import { GroupRadio } from '@/ui/GroupRadio';
import { RangeSelector } from '@/ui/DateRangePicker';
import { Label } from '@/ui/Label';

export interface StudentBalanceTransferSectionUIPopsType {
  renderActionItems?: () => JSX.Element | null;
}

const StudentBalanceTransferSectionUI = ({
  renderActionItems
}: StudentBalanceTransferSectionUIPopsType) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <fieldset>
        <legend>{`${t('L_QUERY')} : ${t('T_MCBH1165')}`}</legend>
        <div className={classes.container}>
          <div>
            <Input size="md" orientation="horizontal" label={t('L_CURRENT_YEAR')} />
            <Input size="md" orientation="horizontal" label={t('L_NEW_YEAR')} />
          </div>
          <div>
            <div className={classes.warning}>{t('L_TO_TRANSFER_STUDENT_BALANCES')}</div>
            <div className={classes.warning}>{t('L_MCBS1165')}</div>
          </div>
        </div>
        <Select
          orientation="horizontal"
          label={t('L_ACC_ACT_TYPE')}
          options={[{ label: '', value: '' }]}
          size="md"
        />
        <div className={classes.container}>
          <GroupRadio
            title={t('L_TRAN_BALANCE')}
            labelOrientation="horizontal"
            options={[
              { label: t('L_EXIST_SUB'), value: '1' },
              { label: t('L_TO_OWE'), value: '2' }
            ]}
            name=""
            selectedValue={''}
            onChange={() => {}}
            inversed
          />

          <div>
            <Input label={t('L_ACC_CARD')} value={''} orientation="horizontal" size="md" />
            <div>
              <div className={classes.showEnd}>
                <Input value={''} />
              </div>

              <div className={classes.container}>
                <Select
                  orientation="horizontal"
                  size="md"
                  label={t('L_SERVICE_TYPE')}
                  options={[
                    { label: t('L_EXIST_CREDIT'), value: '1' },
                    { label: t('L_TO_CALC'), value: '2' }
                  ]}
                  name=""
                  onChange={() => {}}
                />
                <Input value={''} />
              </div>

              <div className={classes.showEnd}>
                <Input value={''} />
              </div>
            </div>
          </div>
        </div>
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_FROM_CLASS')}
          toLabel={t('L_TO')}
        />
        <div className={classes.container}>
          <Label label={t('L_IF_TRANSFER')}></Label>
          <GroupRadio
            labelOrientation="horizontal"
            options={[
              { label: t('V_YES'), value: '1' },
              { label: t('V_NO'), value: '2' }
            ]}
            name=""
            selectedValue={''}
            onChange={() => {}}
            inversed
            orientation="horizontal"
          />

          <Select
            orientation="horizontal"
            label={t('L_LAST_CLASS')}
            options={[
              { label: t('L_EXIST_CREDIT'), value: '1' },
              { label: t('L_TO_CALC'), value: '2' }
            ]}
            size="md"
          />
        </div>
        <div className={classes.warning}>{t('L_MCBS1165_NOTE')}</div>
        <div className={classes.container}>
          <GroupRadio
            options={[
              { label: t('L_TRANSFER_OF_FINAL_BALANCES'), value: '1' },
              { label: t('L_TRANSFER_OF_BLANCES_BY_SECTION'), value: '2' }
            ]}
            name=""
            selectedValue={''}
            onChange={() => {}}
            labelOrientation="horizontal"
            inversed
          />
          <div>
            <GroupRadio
              options={[
                { label: t('L_CREDIT_DEBIT'), value: '1' },
                { label: t('V_DEBIT'), value: '1' },
                { label: t('V_CREDIT'), value: '2' }
              ]}
              name=""
              selectedValue={''}
              onChange={() => {}}
              labelOrientation="horizontal"
              orientation="horizontal"
              inversed
            />
            <GroupRadio
              options={[
                { label: t('V_DEBIT'), value: '1' },
                { label: t('V_CREDIT'), value: '2' }
              ]}
              name=""
              selectedValue={''}
              onChange={() => {}}
              labelOrientation="horizontal"
              orientation="horizontal"
              inversed
            />
          </div>
          <div>{t('L_TRANSFERRING_BALANCES_TO_ONLY_ONE_ITEM')}</div>
        </div>
        <Input label={t('L_PASS_BALANCE')} type="checkbox" orientation="horizontal" inversed />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default StudentBalanceTransferSectionUI;
