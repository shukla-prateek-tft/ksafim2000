import { BottomToolBar } from '@/ui/BottomToolBar';
import classes from './ListOfSuppliersFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';
import { Card } from '@/ui/Card';
const ListOfSuppliersFiltersUI = ({
  renderActionItems,
  isSuppNumDealerAndVatHide,
  formData,
  handleChange,
  handleNumberBlur
}: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
        <Card title={t('L_MCFS_0600_TITLE')}>
        <Input
          orientation="horizontal"
          size="md"
          label={t('V_SUPP_NUMBER')}
          type="number"
          pattern={getInputPattern(10)}
          value={formData?.supp_num}
          tabIndex={1}
          onChange={event => handleChange(event, 'supp_num')}
          onBlur={() => handleNumberBlur('supp_num')}
          maxLength={10}
        />
        <Input
          orientation="horizontal"
          size="md"
          label={t('L_SUPP_NAME')}
          pattern={REGEX.allCharacter}
          maxLength={30}
          value={formData?.supp_name}
          tabIndex={2}
          onChange={event => handleChange(event, 'supp_name')}
        />
        <Input
          orientation="horizontal"
          size="md"
          label={t('L_ACC_CARD')}
          type="number"
          pattern={getInputPattern(10)}
          value={formData?.acc_card}
          tabIndex={3}
          onChange={event => handleChange(event, 'acc_card')}
           onBlur={() => handleNumberBlur('acc_card')}
          maxLength={10}
        />
        <Input
          orientation="horizontal"
          size="md"
          type="checkbox"
          label={t('L_MCFS_0600_CHECKBOX')}
          checked={formData?.supp_off}
          tabIndex={4}
          onChange={event => handleChange(event, 'supp_off')}
        />
        {!isSuppNumDealerAndVatHide && (
          <Input
            orientation="horizontal"
            size="md"
            label={t('L_SUPP_DEALER')}
            type="number"
            pattern={getInputPattern(10)}
            value={formData?.supp_num_dealer}
            onChange={event => handleChange(event, 'supp_num_dealer')}
            tabIndex={5}
            onBlur={() => handleNumberBlur('supp_num_dealer')}
            maxLength={10}
          />
        )}
        {!isSuppNumDealerAndVatHide && (
          <Input
            orientation="horizontal"
            size="md"
            label={t('L_VAT_FOLDER')}
            type="number"
            pattern={getInputPattern(10)}
            value={formData?.supp_vat_num}
            tabIndex={6}
            onChange={event => handleChange(event, 'supp_vat_num')}
            onBlur={() => handleNumberBlur('supp_vat_num')}
            maxLength={10}
          />
        )}
      </Card>
      <div className={classes.description}>
        <p>{t('L_MCFS_0600_DESCRIPTION_TITLE')}</p>
        <p>{t('L_MCFS_0600_DESCRIPTION_TEXT')}</p>
      </div>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default ListOfSuppliersFiltersUI;
