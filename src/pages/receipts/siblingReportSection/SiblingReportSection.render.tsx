import classes from './SiblingReportSection.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';

const SiblingReportSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('L_SIBLINK_REPORT')}`}</legend>

        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <Input orientation="horizontal" label={t('L_PARENT')} type='number' maxLength={10} tabIndex={1}/>
            <Input orientation="horizontal" disabled />
            <Input orientation="horizontal" disabled />
          </div>
          <div className={classes.flex}>
            <Input orientation="horizontal" label={t('L_STUDENT')}  type='number' maxLength={10} tabIndex={2}/>
            <Input orientation="horizontal" disabled />
            <Input orientation="horizontal" disabled />
          </div>
          <div className={classes.itemsContainer}>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_F_CLASS_CODE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={3}
              />
              <Input orientation="horizontal" type='number' maxLength={2} tabIndex={4}/>
            </div>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_TO')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={5}
              />
              <Input orientation="horizontal" type='number' maxLength={2} tabIndex={6} />
            </div>
          </div>
          <div className={classes.itemsContainer}>
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_INCLUDING_SIBLINGS')}
              checked={true}
            />
          </div>
          <div className={classes.groupContainer}>
              <GroupRadio
              onChange={() => {}}
              title={t('L_LEFT_TYPE')}
              orientation="horizontal"
              options={[
                { label: t('V_DEBIT'), value: 'dsdsd' },
                { label: t('L_CREDIT_CODE'), value: 'dsdsd' },
                { label: t('L_ALL_OF_THEM'), value: 'dsdsd' },
              ]}
              name={''}
              selectedValue={''}
              labelOrientation="horizontal"
            />
            <GroupRadio
              onChange={() => {}}
              title={t('L_MCSS1415_GROUPRADIO')}
              orientation="horizontal"
              options={[
                { label: t('L_DETAILED'), value: 'dsdsd' },
                { label: t('L_CONCENTRATED'), value: 'dsdsd' },
              ]}
              name={''}
              selectedValue={''}
              labelOrientation="horizontal"
            />
          </div>
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_0654_DESC')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default SiblingReportSectionUI;
