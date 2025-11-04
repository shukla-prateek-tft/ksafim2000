import { Card } from '@/ui/Card';
import classes from './StudentCollectionStatusSection.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { ListBox } from '@/ui/ListBox';
import { GroupRadio } from '@/ui/GroupRadio';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { BottomToolBar } from '@/ui/BottomToolBar';

interface StudentCollectionStatusSectionUIProps {
  renderActionItems: () => JSX.Element | null;
}
const StudentCollectionStatusSectionUI = ({
  renderActionItems
}: StudentCollectionStatusSectionUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <Card title={`${t('L_QUERY')}: ${t('T_MCFR0707')}`}>
        <div className={classes.section}>
          <div>
            <Input
              type="checkbox"
              checked={true}
              label={t('L_INC_FIXED')}
              orientation="horizontal"
              size='fullWidth'
            />
            <Input
              type="checkbox"
              checked={true}
              label={t('L_WITH_LEAVING')}
              orientation="horizontal"
              size='fullWidth'
            />

            <Select size='md' options={[]} label={t('L_SERVICE_TYPE')} orientation="horizontal" />
          </div>
          <div>
            <ListBox
              label={t('L_NO_DISPLAY')}
              options={[{ label: 'asda', value: '324' }]}
              selectedValues={[]}
              onChange={() => {}}
            />
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes.section2}>
          <Select size='md' options={[]} label={t('L_REGISTER_STAGE')} orientation="vertical" />

          <GroupRadio
            name="exampleGroup"
            selectedValue="1"
            onChange={() => {}}
            labelOrientation="horizontal"
            orientation="vertical"
            options={[
              { label: t('V_PERMIT_ALL'), value: '1' },
              { label: t('L_INCLUDE'), value: '2' },
              { label: t('L_NO_INCLUDE'), value: '4' }
            ]}
            inversed
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

export default StudentCollectionStatusSectionUI;
