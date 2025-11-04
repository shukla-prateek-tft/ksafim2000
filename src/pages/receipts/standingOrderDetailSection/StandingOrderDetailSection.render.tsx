import React from 'react';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { useTranslation } from 'react-i18next';
import classes from './StandingOrderDetailSection.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { REGEX } from '@/constants/appConstant';

const StandingOrderDetailSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_BANK_TRANS_DET')}</legend>
        <div className={classes.conatiner}>
          <Input
            orientation="horizontal"
            label={t('L_BANK_BRANCH')}
            value={'BANK'}
            size="md"
            type="number"
            maxLength={5}
          />
          <Input
            orientation="horizontal"
            label={t('L_ACCOUNT_NUMBER')}
            value={'BANK'}
            size="md"
            type="number"
            maxLength={10}
          />
        </div>
        <div className={classes.conatiner}>
          <div className={classes.selectWithInput}>
            <Select
              size="md"
              orientation="horizontal"
              label={t('L_CLASS_FROM')}
              options={[{ label: 'Lable1', value: 'value1' }]}
              tabIndex={0}
            />
            <Input value={''} size="sm" type="number" maxLength={2} />
          </div>
          <div className={classes.selectWithInput}>
            <Select
              size="md"
              orientation="horizontal"
              label={t('L_CLASS_TO')}
              options={[{ label: 'Lable1', value: 'value1' }]}
              tabIndex={0}
            />
            <Input value={''} size="sm" type="number" maxLength={2} />
          </div>
        </div>
        <div className={classes.selectWithInput}>
          <Input
            orientation="horizontal"
            label={t('L_PAYER')}
            value={''}
            size="md"
            type="number"
            maxLength={10}
          />
          <Input
            orientation="horizontal"
            value={'FAMILY_NAME'}
            disabled
            pattern={REGEX.allCharacter}
            maxLength={24}
          />
          <Input
            orientation="horizontal"
            value={'PRIVATE_NAME'}
            disabled
            pattern={REGEX.allCharacter}
            maxLength={20}
          />
        </div>
        <div className={classes.selectWithInput}>
          <Input
            orientation="horizontal"
            label={t('L_MCSW0101')}
            value={''}
            size="md"
            type="number"
            maxLength={10}
          />
          <Input
            orientation="horizontal"
            value={'FAMILY_NAME'}
            disabled
            pattern={REGEX.allCharacter}
            maxLength={24}
          />
          <Input
            orientation="horizontal"
            value={'PRIVATE_NAME'}
            disabled
            pattern={REGEX.allCharacter}
            maxLength={20}
          />
        </div>

        <Input
          orientation="horizontal"
          type="checkbox"
          label={t('L_BANK_DETAILS')}
          value={''}
          size="md"
        />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default StandingOrderDetailSectionUI;
