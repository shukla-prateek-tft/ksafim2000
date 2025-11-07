import classes from './StudentTransferRatePerYear.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { GroupRadio } from '@/ui/GroupRadio';
import { REGEX } from '@/constants/appConstant';

const StudentTransferRatePerYearUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCBH1355')}`}</legend>

        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_CURRENT_YEAR')}
              type="text"
              maxLength={10}
              pattern={REGEX.allCharacter}
              size='md'
            />
          </div>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_NEY_YEAR')}
              type="text"
              maxLength={10}
              pattern={REGEX.allCharacter}
              size='md'
            />
          </div>
          <div>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_F_CLASS_CODE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
              />
              <Input orientation="horizontal" type="number" maxLength={2} />
            </div>
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
          <div className={classes.lastBox}>
            <div className={classes.groupContainer}>
              <GroupRadio
                onChange={() => {}}
                title={t('L_BOTTON_TEXT2_MCBS1355')}
                labelOrientation="horizontal"
                orientation="horizontal"
                options={[
                  { label: t('V_YES'), value: 'dsdsd' },
                  { label: t('V_NO'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
              />
            </div>
            <div className={classes.flex}>
              <Select
                orientation="horizontal"
                label={t('L_F_CLASS_CODE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
              />
              <Input orientation="horizontal" size="sm" type="number" maxLength={2} />
            </div>
          </div>
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_BOTTON_TEXT_MCBS1355')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default StudentTransferRatePerYearUI;
