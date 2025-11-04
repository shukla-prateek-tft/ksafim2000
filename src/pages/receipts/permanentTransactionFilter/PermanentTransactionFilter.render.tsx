import { Input } from '@/ui/Input';
import classes from './PermanentTransactionFilter.module.scss';
import { useTranslation } from 'react-i18next';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { GroupRadio } from '@/ui/GroupRadio';
import { getInputPattern } from '@/utils/commonHelper';

interface PermanentTransactionFilterProps {
  renderActionItems: () => JSX.Element;
}

const PermanentTransactionFilter = ({ renderActionItems }: PermanentTransactionFilterProps) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <fieldset>
        <legend>{t('T_MCFR0668')}</legend>
        <div className={classes.columnContainer}>
          <div className={classes.rowContainer}>
            <div className={classes.inputBox}>
              <Input
                label={t('L_REPAYMENT_DATE')}
                orientation="horizontal"
                maxLength={12}
                size="fullWidth"
              />
            </div>
            <div className={classes.inputBox}>
              <Input
                label={t('L_TO_DATE')}
                orientation="horizontal"
                maxLength={12}
                size="fullWidth"
              />
            </div>
          </div>
          <div className={classes.rowContainer}>
            <div className={classes.inputBox}>
              <Select label={t('L_CLASS_FROM')} options={[]} orientation="horizontal" size="md" />
              <Input orientation="horizontal" type="number" pattern={getInputPattern(2)} />
            </div>
            <div className={classes.inputBox}>
              <Select label={t('L_CLASS_TO')} options={[]} orientation="horizontal" size="md" />
              <Input orientation="horizontal" type="number" pattern={getInputPattern(2)} />
            </div>
          </div>
          <div className={classes.rowContainer}>
            <Input
              label={t('L_PAYER')}
              value={'Family name'}
              orientation="horizontal"
              type="number"
              pattern={getInputPattern(10)}
              size="md"
            />
            <Input value={'Private name'} orientation="horizontal" maxLength={12} disabled />
            <Input value={'Private name'} orientation="horizontal" maxLength={12} disabled />
          </div>
          <div className={classes.rowContainer}>
            <Input
              label={t('V_STUDENT')}
              value={'Family name'}
              orientation="horizontal"
              type="number"
              pattern={getInputPattern(10)}
              size="md"
            />
            <Input value={'Private name'} orientation="horizontal" maxLength={12} disabled />
            <Input value={'Private name'} orientation="horizontal" maxLength={12} disabled />
          </div>
        </div>
        <div className={classes.bottomInputContainer}>
          <GroupRadio
            options={[
              { label: t('V_NO'), value: '1' },
              { label: t('V_YES'), value: '2' },
              { label: t('V_ALL'), value: '3' }
            ]}
            name="group1"
            selectedValue=""
            onChange={() => {}}
            orientation="horizontal"
            labelOrientation="horizontal"
            title={t('L_RETURN_PAY')}
          />
          <GroupRadio
            options={[
              { label: t('V_NO'), value: '1' },
              { label: t('V_YES'), value: '2' },
              { label: t('V_ALL'), value: '3' }
            ]}
            name="group1"
            selectedValue=""
            onChange={() => {}}
            orientation="horizontal"
            labelOrientation="horizontal"
            title={t('L_APPROVED')}
          />
          <GroupRadio
            options={[
              { label: t('V_DATE'), value: '1' },
              { label: t('V_PAYER'), value: '2' }
            ]}
            name="group1"
            selectedValue=""
            onChange={() => {}}
            orientation="horizontal"
            labelOrientation="horizontal"
            title={t('L_SORT')}
          />
        </div>
      </fieldset>

      <div className={classes.footer}>
        <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
      </div>
    </div>
  );
};

export default PermanentTransactionFilter;
