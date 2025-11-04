import React from 'react';
import classes from './ScholarshipReport.module.scss';
import { BottomToolBar, Checkbox } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';

const ScholarshipReportUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_HEADER_MCFS1282')}</legend>

        <div className={classes.mainContainer}>
          <div className={classes.itemsContainer}>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_CLASS_FROM')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={1}
              />
              <Input orientation="horizontal" type="number" maxLength={2} tabIndex={2} />
            </div>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_CLASS_TO')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={3}
              />
              <Input orientation="horizontal" type="number" maxLength={2} tabIndex={4} />
            </div>
          </div>
          <div>
            <Select
              orientation="horizontal"
              label={t('L_SERVICE_TYPE')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              tabIndex={5}
            />
            <Select
              orientation="horizontal"
              label={t('L_ACC_ACT_TYPE')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              tabIndex={6}
            />
          </div>
          <div>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_ACC_NO')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={7}
              />
              <Input orientation="horizontal" type="number" maxLength={10} tabIndex={8} />
            </div>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_ACC_NO')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={9}
              />
              <Input orientation="horizontal" type="number" maxLength={10} tabIndex={10} />
            </div>
          </div>

          <div className={classes.itemsContainer}>
            <Checkbox
              label={t('L_WITH_REMARK')}
              checked={true}
              labelClassName={classes.commonInputLabel}
              tabIndex={11}
            />
          </div>
          <fieldset>
            <div className={classes.radioBox}>
              <GroupRadio
                onChange={() => {}}
                labelOrientation="horizontal"
                title={t('L_LEFT_TYPE')}
                options={[
                  { label: t('V_CREDIT'), value: 'dsdsd' },
                  { label: t('V_DEBIT'), value: 'dsdsd' },
                  { label: t('V_ALL_STUDENTS'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
                tabIndex={12}
              />
              <GroupRadio
                onChange={() => {}}
                labelOrientation="horizontal"
                title={t('L_Status')}
                options={[
                  { label: t('L_LEAVE_LEARN'), value: 'dsdsd' },
                  { label: t('L_WITH_LEAVING'), value: 'dsdsd' },
                  { label: t('L_NOT_LEAVING'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
                tabIndex={13}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className={classes.radioBox}>
              <GroupRadio
                onChange={() => {}}
                orientation="vertical"
                labelOrientation="horizontal"
                options={[{ label: t('L_COLLECT_SITU'), value: 'dsdsd' }]}
                name={''}
                selectedValue={''}
                tabIndex={14}
              />
              <GroupRadio
                onChange={() => {}}
                orientation="vertical"
                labelOrientation="horizontal"
                options={[{ label: t('L_COLLECT_STATUS'), value: 'dsdsd' }]}
                name={''}
                selectedValue={''}
                tabIndex={15}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className={classes.radioBox}>
              <GroupRadio
                onChange={() => {}}
                labelOrientation="horizontal"
                options={[
                  { label: t('L_DEBIT'), value: 'dsdsd' },
                  { label: t('L_CREDIT'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
                tabIndex={16}
              />
              <GroupRadio
                onChange={() => {}}
                labelOrientation="horizontal"
                options={[
                  { label: t('L_INC_CLASS_SHT'), value: 'dsdsd' },
                  { label: t('L_INC_SPECIAL_CL'), value: 'dsdsd' },
                  { label: t('L_INC_FIXED'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
                tabIndex={17}
              />
            </div>
          </fieldset>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ScholarshipReportUI;
