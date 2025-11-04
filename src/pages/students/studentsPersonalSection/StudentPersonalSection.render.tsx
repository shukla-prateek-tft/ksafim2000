import React from 'react';
import { Card } from '@/ui/Card';
import classes from './StudentPersonalSection.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { GroupRadio } from '@/ui/GroupRadio';
import { BottomToolBar } from '@/components';
import { REGEX } from '@/constants/appConstant';

interface StudentPersonalSectionUIProps {
  renderActionItems: () => JSX.Element | null;
}
const StudentPersonalSectionUI = ({ renderActionItems }: StudentPersonalSectionUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <Card title={t('L_MCFS0582_HEADEAR')}>
        <div className={classes.firstSection}>
          <Input
            label={t('L_MCFW0582_ID')}
            orientation="horizontal"
            type={'number'}
            maxLength={10}
            tabIndex={1}
          />
          <Input
            label={t('L_FAMILY_NAME')}
            orientation="horizontal"
            maxLength={20}
            pattern={REGEX.allCharacter}
            type="text"
            tabIndex={2}
          />
          <Input
            label={t('L_PRIVATE_NAME')}
            orientation="horizontal"
            maxLength={20}
            pattern={REGEX.allCharacter}
            type="text"
            tabIndex={3}
          />
          <div className={classes.range}>
            <div className={classes.rangeItem}>
              <Select
                options={[]}
                label={t('L_F_CLASS_CODE')}
                orientation="horizontal"
                tabIndex={4}
              />
              <Input type={'number'} maxLength={2} tabIndex={5} />
            </div>
            <div className={classes.rangeItem}>
              <Select options={[]} label={t('L_TO')} orientation="horizontal" tabIndex={6} />
              <Input tabIndex={7} />
            </div>
          </div>
          <div className={classes.flex}>
            <Input
              label={t('L_PARENT_ID')}
              orientation="horizontal"
              type={'number'}
              maxLength={10}
              tabIndex={8}
            />
            <div className={classes.disabledBox}>{''}</div>
          </div>
          <div className={classes.flex}>
            <Input
              label={t('L_STUDY_GROUP')}
              orientation="horizontal"
              type={'number'}
              maxLength={18}
              tabIndex={9}
            />
            <div className={classes.disabledBox}>{''}</div>
          </div>

          <Input type="checkbox" label={t('L_NOT_POSTED')} orientation="horizontal" tabIndex={10} />
        </div>
      </Card>
      <Card>
        <div className={classes.secondSection}>
          <div>
            <Select
              options={[]}
              label={t('L_REGISTER_STAGE')}
              orientation="vertical"
              tabIndex={11}
            />
          </div>
          <GroupRadio
            name="exampleGroup"
            selectedValue="1"
            onChange={() => {}}
            orientation="vertical"
            labelOrientation="horizontal"
            options={[
              { label: t('V_PERMIT_ALL'), value: '1' },
              { label: t('L_INCLUDE'), value: '2' },
              { label: t('L_NO_INCLUDE'), value: '4' }
            ]}
            tabIndex={12}
          />
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default StudentPersonalSectionUI;
