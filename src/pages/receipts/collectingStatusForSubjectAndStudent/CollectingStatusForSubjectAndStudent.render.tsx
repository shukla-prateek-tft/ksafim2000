import { GroupRadio } from '@/ui/GroupRadio';
import classes from './CollectingStatusForSubjectAndStudent.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
const CollectingStatusForSubjectAndStudentUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const hidden = true;
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend>{`${t('L_QUERY')} : ${t('T_MCFR0654')}`}</legend>

        <Select
          orientation="horizontal"
          label={t('L_SERVICE_TYPE')}
          size='md'
          placeholder=" "
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
        />

        {!hidden && (
          <Select
            orientation="horizontal"
            label={t('2')}
            placeholder=" "
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
          />
        )}
        <div className={classes.selectorAlign}>
          <div className={classes.inputWithSelect}>
            <Input orientation="horizontal" label={t('L_F_CLASS_CODE')}  size='md'/>
            <Select
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          </div>
      
          <div className={classes.inputWithSelect}>
            <Input size='md' label={t('L_TO')}  orientation="horizontal" />
            <Select
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          </div>
        </div>
        <GroupRadio
          onChange={() => {}}
          title={t('L_LEFT_TYPE')}
          orientation="horizontal"
          labelOrientation="horizontal"
          options={[
            { label: t('L_CREDIT'), value: 'dsdsd' },
            { label: t('L_DEBIT'), value: 'dsdsd' },
            { label: t('V_ALL_STUDENTS'), value: 'dsdsd' }
          ]}
          name={''}
          selectedValue={''}
        />
        <div className={classes.bottomContainer}>
          <div>
            <Input type="checkbox" orientation="horizontal" label={t('L_WITH_LEAVING')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_INC_FIXED')} />
          </div>
          <div>
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_MCFS_0654_CHECKBOX_TITLE_1')}
            />
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_MCFS_0654_CHECKBOX_TITLE_2')}
            />
          </div>
        </div>
        <div className={classes.innerContainer}>
          <p>{t('L_REMARK')}</p>
          <p>{t('L_0654_DESC')}</p>
        </div>
        {!hidden && <p>{t('L_MCFS_0654_BOTTOM_TITLE_1')}</p>}
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CollectingStatusForSubjectAndStudentUI;
