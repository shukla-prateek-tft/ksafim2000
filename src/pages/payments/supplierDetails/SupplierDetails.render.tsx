import React from 'react';
import { Input } from '@/ui/Input';
import classes from './SupplierDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { BottomToolBar } from '@/components';
import { REGEX } from '@/constants/appConstant';
import { getInputPattern } from '@/utils/commonHelper';

interface SupplierDetailsProps {
  renderActionItems: () => JSX.Element;
}

const SupplierDetails = ({ renderActionItems }: SupplierDetailsProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <fieldset className={classes.fieldset}>
        <Input
          label={t('V_SUPP_NAME')}
          placeholder={t('V_SUPP_NAME')}
          orientation="horizontal"
          pattern={REGEX.allCharacter}
          maxLength={3}
        />
        <div className={classes.subContainer}>
          <Input
            label={t('L_CITY')}
            placeholder={t('L_CITY')}
            type="number"
            orientation="horizontal"
            pattern={getInputPattern(3)}
          />
          <Input
            placeholder={t('L_CITY_NAME')}
            orientation="horizontal"
            maxLength={20}
            pattern={REGEX.allCharacter}
          />
        </div>
        <Input
          label={t('L_STREET')}
          placeholder={t('L_STREET')}
          orientation="horizontal"
          maxLength={17}
          pattern={REGEX.allCharacter}
        />
        <div className={classes.subContainer}>
          <Input
            label={t('L_BUILD_NUM')}
            placeholder={t('L_BUILD_NUM')}
            orientation="horizontal"
            maxLength={5}
            pattern={REGEX.allCharacter}
          />
          <Input
            label={t('L_POST_BOX')}
            placeholder={t('L_POST_BOX')}
            type="number"
            orientation="horizontal"
            pattern={getInputPattern(5)}
          />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default SupplierDetails;
