import classes from './CalculationCollectionAmount.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import { PiWarningCircleFill } from 'react-icons/pi';
import Badge from '@/ui/Badge/Badge';
import { Card } from '@/ui/Card';

const CalculationCollectionAmountUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const hidden = true;
  return (
    <div className={classes.mainContainer}>
      <Card>
        <div className={classes.itemContainer}>
          <Select
          size='md'
            orientation="horizontal"
            label={t('L_CLASS_CODE')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
          />
          <Input type='number' size='md' maxLength={2} orientation="horizontal" label={t('L_CLASS_NUM')} />
        </div>
        <div className={classes.rowFlex}>
          <Input size='md' orientation="horizontal" label={t('L_INSTI')} />
          <Input disabled />
        </div>
        <div className={classes.rowFlex}>
          <Input size='md' type='number' maxLength={10} orientation="horizontal" label={t('L_STUDENT')} />
          <Input disabled />
          <Input disabled />
        </div>
        <div className={classes.rowFlex}>
          <div className={classes.groupContainer}>
            <GroupRadio
              onChange={() => {}}
              labelOrientation="horizontal"
              title={t('L_DISC_STUDENT')}
              orientation="horizontal"
              options={[
                { label: t('L_YOUNG'), value: 'dsdsd' },
                { label: t('L_GRAD'), value: 'dsdsd' }
              ]}
              name={''}
              selectedValue={''}
              inversed
            />
          </div>
          {!hidden && <Input size='md' orientation="horizontal" label={t('L_BROTHER_DISC')} />}
        </div>
      </Card>
      <Badge renderIcon={<PiWarningCircleFill />} variant="warning" title={t('L_1162_DESC')} />
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CalculationCollectionAmountUI;
