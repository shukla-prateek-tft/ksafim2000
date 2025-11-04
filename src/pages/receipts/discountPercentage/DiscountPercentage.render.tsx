
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import Badge from '@/ui/Badge/Badge';
import { Card } from '@/ui/Card';
import { DiscountPercentageUIProps } from './types';
const DiscountPercentageUI = ({
  renderActionItems,
  discountData,
  onChange
}: DiscountPercentageUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <fieldset>
        <Input
          type="amount"
          orientation="horizontal"
          maxLength={9}
          label={t('L_PERCENT')}
          size="md"
          value={discountData.percentageOne}
          onChange={(e) => onChange('percentageOne', e.target.value)}
        />
        <Input
          isLabel
          type="amount"
          orientation="horizontal"
          size="md"
          maxLength={9}
          value={discountData.percentageTwo}
          onChange={(e) => onChange('percentageTwo', e.target.value)}
        />
        <Card>
          <Badge variant="warning" title={t('L_MCFS0622_BOTTOM_DESC')} />
        </Card>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default DiscountPercentageUI;
