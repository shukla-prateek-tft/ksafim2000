import React from 'react';
import { BottomToolBar } from '@/ui/BottomToolBar';
import classes from './ListOfSuppliersFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';
const ListOfSuppliersFiltersUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const hidden = true; // This should be replaced with actual logic to determine visibility
  return (
    <div className={classes.container}>
      <fieldset className={classes.fieldSet}>
        <legend>{t('L_MCFS_0600_TITLE')}</legend>
        <Input
          orientation="horizontal"
          size="md"
          label={t('V_SUPP_NUMBER')}
          type="number"
          pattern={getInputPattern(10)}
          tabIndex={1}
        />
        <Input
          orientation="horizontal"
          size="md"
          label={t('L_SUPP_NAME')}
          pattern={REGEX.allCharacter}
          maxLength={30}
          tabIndex={2}
        />
        <Input orientation="horizontal" size="md" label={t('L_ACC_CARD')} tabIndex={3} />
        <Input
          orientation="horizontal"
          size="md"
          type="checkbox"
          label={t('L_MCFS_0600_CHECKBOX')}
          tabIndex={4}
        />
        {!hidden && (
          <Input
            orientation="horizontal"
            size="md"
            label={t('L_SUPP_DEALER')}
            type="number"
            pattern={getInputPattern(10)}
            tabIndex={5}
          />
        )}
        {!hidden && (
          <Input
            orientation="horizontal"
            size="md"
            label={t('L_VAT_FOLDER')}
            type="number"
            pattern={getInputPattern(10)}
            tabIndex={6}
          />
        )}
      </fieldset>
      <div className={classes.description}>
        <p>{t('L_MCFS_0600_DESCRIPTION_TITLE')}</p>
        <p>{t('L_MCFS_0600_DESCRIPTION_TEXT')}</p>
      </div>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default ListOfSuppliersFiltersUI;
