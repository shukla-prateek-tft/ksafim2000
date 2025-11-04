import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ClassBalanceCut.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import { TextArea } from '@/ui/TextArea';
import { GroupRadio } from '@/ui/GroupRadio';
import { REGEX } from '@/constants/appConstant';

const ClassBalanceCutUI = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_HEADER_MCFS1282')}</legend>
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            <Select
              options={[]}
              size="sm"
              orientation="horizontal"
              label={t('L_CLASS_FROM')}
              tabIndex={0}
            />
            <Input size="sm" orientation="horizontal" type="number" maxLength={2} />
          </div>
          <div className={classes.innerContainer}>
            <Select
              options={[]}
              size="sm"
              orientation="horizontal"
              label={t('L_CLASS_TO')}
              tabIndex={0}
            />
            <Input size="sm" orientation="horizontal" type="number" maxLength={2} />
          </div>
        </div>

        <Select
          options={[]}
          size="sm"
          orientation="horizontal"
          label={t('L_SERVICE_TYPE')}
          tabIndex={0}
        />

        <div className={classes.container}>
          <Select
            options={[]}
            size="sm"
            orientation="horizontal"
            label={t('L_ACC_ACT_TYPE')}
            tabIndex={0}
          />
          <div className={classes.innerContainer}>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_CITY')}
              value={'city_name'}
              type="number"
              maxLength={5}
            />
            <Input
              size="sm"
              orientation="horizontal"
              value={t('CITY_NAME')}
              disabled
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
          </div>
        </div>

        <Select options={[]} size="sm" orientation="horizontal" label={t('L_MAJOR')} tabIndex={0} />

        <div className={classes.container}>
          <div>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_STUDY_GROUP')}
              value={'STUDY_GROUP'}
              type="number"
              maxLength={18}
            />
            <Input type="checkbox" orientation="horizontal" label={t('L_WITH_REMARK')} />
            <Input type="checkbox" orientation="horizontal" label={t('IF_ORAT_KEVA')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_SUM_NOT_ZERO')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_INCLUDE_DIS')} />
          </div>
          <div className={classes.innerContainer}>
            <Input type="checkbox" />
            <Input type="checkbox" />
          </div>

          <TextArea
            size="md"
            orientation="vertical"
            label={t('L_INCLUDE_DIS')}
            value="NO DISPLAY NAME"
          />
        </div>
        <div>
          <GroupRadio
            orientation="horizontal"
            labelOrientation="horizontal"
            onChange={() => {}}
            title={t('L_REGISTER_STAGE')}
            options={[
              { label: t('V_PERMIT_ALL'), value: '1' },
              { label: t('L_INCLUDE'), value: '2' },
              { label: t('L_NO_INCLUDE'), value: '3' }
            ]}
            name={''}
            selectedValue={''}
            inversed
          />
        </div>

        <Select options={[]} size="sm" orientation="horizontal" tabIndex={0} />

        <div className={classes.container}>
          <GroupRadio
            onChange={() => {}}
            labelOrientation="horizontal"
            title={t('L_LEFT_TYPE')}
            orientation="horizontal"
            options={[
              { label: t('V_CREDIT'), value: '1' },
              { label: t('V_DEBIT'), value: '2' },
              { label: t('V_ALL_STUDENTS'), value: '3' }
            ]}
            name={''}
            selectedValue={''}
            inversed
          />
          <GroupRadio
            onChange={() => {}}
            title={t('L_STATUS')}
            orientation="horizontal"
            labelOrientation="horizontal"
            options={[
              { label: t('L_LEAVING_ONLY'), value: '1' },
              { label: t('L_WITH_LEAVING'), value: '2' },
              { label: t('L_NOT_LEAVING'), value: '3' }
            ]}
            name={''}
            selectedValue={''}
            inversed
          />
        </div>
        <div className={classes.container}>
          <div>
            <Input type="checkbox" orientation="horizontal" label={t('L_INC_CLASS_SHT')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_INC_SPECIAL_CL')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_INC_FIXED')} />
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_MCFS_0654_CHECKBOX_TITLE_1')}
            />
          </div>
          <div>
            <Input type="checkbox" orientation="horizontal" label={t('L_DEBIT_FIX')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_CREDIT_FIX')} />
          </div>
        </div>
        <BottomToolBar
          showPagination={false}
          renderActionItems={() => (
            <div className={classes.actionItem}>
              <BackToPageButton />
              <DetailButton />
              <SaveButton />
            </div>
          )}
        />
      </fieldset>
    </div>
  );
};

export default ClassBalanceCutUI;
