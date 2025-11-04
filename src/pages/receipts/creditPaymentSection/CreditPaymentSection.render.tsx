import React from 'react';
import classes from './CreditPaymentSection.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { REGEX } from '@/constants/appConstant';

interface CreditPaymentSectionUIProps {
  renderActionItems: () => JSX.Element | null;
}
const CreditPaymentSectionUI: React.FC<CreditPaymentSectionUIProps> = ({ renderActionItems }) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_PAYMENT_SPREAD')}`}</legend>

        <div className={classes.mainContainer}>
          <Select
            orientation="horizontal"
            label={t('L_CREDIT_TYPE')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            tabIndex={1}
          />

          <Input
            label={t('L_TOTAL_SUM')}
            size="md"
            orientation="horizontal"
            type="amount"
            min={0}
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
            disabled
            tabIndex={2}
          />

          <Input
            orientation="horizontal"
            label={t('L_PAYMENT_NUMBER')}
            size="md"
            type="number"
            maxLength={2}
            tabIndex={3}
          />
          <Input
            label={t('L_FIRST_PAYMENT')}
            size="md"
            orientation="horizontal"
            type="amount"
            min={0}
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
            tabIndex={4}
          />
          <Input
            orientation="horizontal"
            label={`+ ${t('L_PAYMENTS_SUM')}/ ${t('L_MONEY')}`}
            size="md"
            type="amount"
            min={0}
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
            tabIndex={5}
          />
          <Input
            label={t('L_CREDIT_NUMBER')}
            size="lg"
            maxLength={100}
            pattern={REGEX.allCharacter}
            type="text"
            tabIndex={6}
          />
          <div className={classes.flex}>
            <Input
              orientation="vertical"
              label={t('L_MCFW0712_FIELD')}
              size="lg"
              type="number"
              maxLength={16}
              tabIndex={7}
            />
            <Input
              orientation="vertical"
              label={t('L_VALID_DATE')}
              type="number"
              maxLength={4}
              tabIndex={8}
            />
          </div>
          <Input
            orientation="horizontal"
            size="sm"
            label={t('CVV')}
            maxLength={4}
            pattern={REGEX.allCharacter}
            type="text"
            tabIndex={9}
          />
          <Input
            orientation="horizontal"
            size="md"
            label={t('L_ID')}
            type="number"
            maxLength={10}
            tabIndex={10}
          />
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_MCFW0712_DESC')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CreditPaymentSectionUI;
