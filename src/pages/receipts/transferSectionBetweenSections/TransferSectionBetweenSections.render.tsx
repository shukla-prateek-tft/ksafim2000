import classes from './TransferSectionBetweenSections.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
import Badge from '@/ui/Badge/Badge';

const TransferSectionBetweenSectionsUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_QUERY') + ' : ' + t('L_MOVE_PARAG')}</legend>
        <Select
          size="md"
          orientation="horizontal"
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          label={t('L_STUDY_YEAR')}
          tabIndex={1}
        />
        <div className={classes.selectorAlign}>
          <div className={classes.inputWithSelect}>
            <Select
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
             tabIndex={2}
            />
            <Input label={t('L_CLASS_FROM')} size="md" orientation="horizontal" type='number' maxLength={2} tabIndex={3}/>
          </div>
          <div className={classes.inputWithSelect}>
            <Select
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
                tabIndex={4}
            />
            <Input label={t('L_TO')} size="md" orientation="horizontal" type='number' maxLength={2} tabIndex={5}/>
          </div>
        </div>
        <div className={classes.inputWithDisable}>
          <Input size="md" orientation="horizontal" label={t('L_PARENT')} type='number' maxLength={10}  tabIndex={6} />
          <Input disabled />
          <Input disabled />
        </div>{' '}
        <div className={classes.inputWithDisable}>
          <Input size="md" orientation="horizontal" label={t('L_STUDENT')} type='number' maxLength={10}  tabIndex={7}/>
          <Input disabled />
          <Input disabled />
        </div>
        <Input type="checkbox" orientation="horizontal" label={t('L_WITH_LEAVING')}  tabIndex={8} />
        <Badge title={t('L_0654_DESC')}/>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default TransferSectionBetweenSectionsUI;
