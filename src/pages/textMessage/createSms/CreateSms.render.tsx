import classes from './CreateSms.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import { TextArea } from '@/ui/TextArea';
import { ListBox } from '@/ui/ListBox';
import { attachMultipleClasses } from '@/Languages';
import { ScreenLayout } from '@/ui/Layout';
import { Label } from '@/ui/Label';

const CreateSmsUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout renderHeader={renderActionItems} screenNumber='1390'>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')}: ${t('T_MCFW1390_HEADER')}`}</legend>
        <legend className={attachMultipleClasses(classes.legend, classes.center)}>{`SMS`}</legend>
        <div className={classes.itemContainer}>
          <Input orientation="horizontal" label={t('L_ACT_NO1')} size="md" type="number" maxLength={7} disabled />
          <Input orientation="horizontal" label={t('L_TOPIC_MES')} size="lg" disabled/>
        </div>
        <Input orientation="horizontal" label={t(' ')} disabled size="lg" type='alphaNumeric' maxLength={85}/>
        <TextArea orientation="horizontal" label={t('L_COMMENT_FREE')} size="fullWidth"maxLength={250}/>
        <GroupRadio
          onChange={() => {}}
          title={t(' ')}
          labelOrientation="horizontal"
          orientation="horizontal"
          options={[
            { label: t('L_PAY_BALANCE'), value: 'dsdsd' },
            { label: t('L_SEC_BALANCE'), value: 'dsdsd' },
            { label: t('L_BALANCE_SUB'), value: 'dsdsd' },
            { label: t('L_NO_ITRA'), value: 'dsdsd' }
          ]}
          name={''}
          selectedValue={''}
          inversed
        />

        <div className={classes.itemContainer}>
          <Select
            size="md"
            orientation="horizontal"
            label={t('L_ARTICLE')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
          />
          <ListBox label={t('')} options={[]} selectedValues={[]} size="md" onChange={() => {}} />
        </div>
        <Input orientation="horizontal" label={t(' ')} disabled size="fullWidth" type='alphaNumeric' maxLength={100} />
        <TextArea orientation="horizontal" label={t('L_COMMENT_FREE')} size="fullWidth" maxLength={250} />
        <div className={classes.itemContainer}>
          <div>
            <Input orientation="horizontal" label={t(' ')} size="lg" type='alphaNumeric' maxLength={85} />
            <Input orientation="horizontal" label={t(' ')} disabled size="md" type='alphaNumeric' maxLength={80} />
          </div>
          <div className={classes.itemContainer}>
            <Label label={t('L_WEBSITE_LINK')} />
            <GroupRadio
              onChange={() => {}}
              size="md"
              labelOrientation="horizontal"
              options={[
                { label: t('L_DATE_RELEVANT'), value: 'dsdsd' },
                { label: t('L_VALUE_DATE'), value: 'dsdsd' }
              ]}
              name={''}
              selectedValue={''}
              inversed
            />
          </div>
        </div>
      </fieldset>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_SMS_TEXT')}</legend>
        <TextArea orientation="horizontal" label={t(' ')} size="fullWidth" maxLength={1000} />
      </fieldset>
    </ScreenLayout>
  );
};

export default CreateSmsUI;
