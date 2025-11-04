import { Card } from '@/ui/Card';
import classes from './SettingCollectionStatusCutoff.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/components';
import { ListBox } from '@/ui/ListBox';
import { GroupRadio } from '@/ui/GroupRadio';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { getInputPattern } from '@/utils/commonHelper';

interface SettingCollectionStatusCutoffUIProps {
  renderActionItems: () => JSX.Element | null;
}
const SettingCollectionStatusCutoffUI = ({
  renderActionItems
}: SettingCollectionStatusCutoffUIProps) => {
  const { t } = useTranslation('common');
  const hidden = true; // This variable is not used in the provided code, but it can be used for conditional rendering if needed.
  return (
    <div className={classes.container}>
      <Card title={`${t('L_QUERY')}: ${t('T_MCFR0637')}`}>
        <div className={classes.section}>
          <div>
            <div className={classes.actionItems}>
              <Select options={[]} label={t('L_CLASS_AGE')} orientation="horizontal" size="md" />
              {!hidden && (
                <Input
                  label={t('L_CLASS_NUM')}
                  orientation="horizontal"
                  type="number"
                  pattern={getInputPattern(2)}
                />
              )}
              <Select options={[]} size={'sm'} orientation="horizontal" />
            </div>
            <div className={classes.inputContainer}>
              <div className={classes.colInputs}>
                <Input
                  type="checkbox"
                  checked={true}
                  label={t('L_INC_FIXED')}
                  orientation="horizontal"
                  inversed
                  size="fullWidth"
                />
                <Input
                  type="checkbox"
                  checked={true}
                  label={t('L_WITH_LEAVING')}
                  orientation="horizontal"
                  inversed
                  size="fullWidth"
                />
                {!hidden && (
                  <Select
                    options={[]}
                    size="md"
                    label={t('L_SERVICE_TYPE')}
                    orientation="horizontal"

                  />
                )}
              </div>
              {!hidden && (
                <div>
                  <ListBox
                    label={t('L_NO_DISPLAY')}
                    options={[]}
                    selectedValues={[]}
                    onChange={() => {}}
                    size="fullWidth"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes.section2}>
          <div>
            <Select options={[]} label={t('L_REGISTER_STAGE')} orientation="vertical" />
          </div>
          <GroupRadio
            name="exampleGroup"
            selectedValue="1"
            onChange={() => {}}
            orientation="vertical"
            labelOrientation="horizontal"
            inversed
            options={[
              { label: t('V_PERMIT_ALL'), value: '1' },
              { label: t('L_INCLUDE'), value: '2' },
              { label: t('L_NO_INCLUDE'), value: '4' }
            ]}
          />
        </div>
      </Card>
      <Card>
        <Badge renderIcon={<PiWarningCircleFill />} title={t('L_MCFS0707_REMARK')} />
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default SettingCollectionStatusCutoffUI;
