import React from 'react';
import classes from './CrossSection.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import { Card } from '@/ui/Card';
import { REGEX } from '@/constants/appConstant';
const CrossSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card title={`${t('L_QUERY')} : ${t('L_MONEY_STATUS')}`}>
        <div className={classes.mainContainer}>
          <div>
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
                label={t('L_TO')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={3}
              />
              <Input orientation="horizontal" type="number" maxLength={2} tabIndex={4} />
            </div>
          </div>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_PARENT')}
              type="number"
              maxLength={10}
              tabIndex={5}
            />
            <Input
              orientation="horizontal"
              disabled
              maxLength={24}
              pattern={REGEX.allCharacter}
              type="text"
              tabIndex={6}
            />
            <Input
              orientation="horizontal"
              disabled
              maxLength={20}
              pattern={REGEX.allCharacter}
              type="text"
              tabIndex={7}
            />
          </div>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_STUDENT')}
              type="number"
              maxLength={10}
              tabIndex={8}
            />
            <Input
              orientation="horizontal"
              disabled
              maxLength={24}
              pattern={REGEX.allCharacter}
              type="text"
              tabIndex={9}
            />
            <Input
              orientation="horizontal"
              disabled
              maxLength={20}
              pattern={REGEX.allCharacter}
              type="text"
              tabIndex={10}
            />
          </div>
          <div>
            <Select
              orientation="horizontal"
              label={t('L_S_STUDIES')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              tabIndex={11}
            />
            <Input
              orientation="horizontal"
              disabled
              label={t('L_S_STUDIES')}
              maxLength={10}
              pattern={REGEX.allCharacter}
              type="text"
              tabIndex={12}
            />
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_INCLUDING_SIBLINGS')}
              checked={true}
              tabIndex={13}
            />
            <div className={classes.groupContainer}>
              <GroupRadio
                onChange={() => {}}
                title={t('L_MAKE_STATUS')}
                orientation="horizontal"
                labelOrientation="horizontal"
                size="sm"
                options={[
                  { label: t('L_DETAILED'), value: 'dsdsd' },
                  { label: t('L_CONCENTRATED'), value: 'dsdsd' },
                  { label: t('L_CONCENTRATED'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
                tabIndex={15}
              />
            </div>
          </div>
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_REMARK')}</p>
          <p>{t('L_0654_DESC')}</p>
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CrossSectionUI;
