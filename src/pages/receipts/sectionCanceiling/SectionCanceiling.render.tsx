import { useTranslation } from 'react-i18next';
import classes from './SectionCanceiling.module.scss';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
interface SectionCanceilingProps {
  renderActionItems?: () => JSX.Element | null;
}

const SectionCanceilingUI = ({ renderActionItems }: SectionCanceilingProps) => {
  const { t } = useTranslation('common');
  const isHidden = true;
  return (
    <div className={classes.container}>
      <fieldset>
        <legend>{`${t('L_QUERY')}:${t('T_MCFW1277')}`}</legend>
        <Input
          type={'number'}
          maxLength={6}
          orientation="horizontal"
          size="md"
          label={t('L_RECEIPT')}
        />
        {!isHidden && (
          <Input
            maxLength={7}
            orientation="horizontal"
            size="md"
            isLabel
          />
        )}
        <Input
          orientation="horizontal"
          size="md"
          type="checkbox"
          label={t('L_GIFT_RECEPT')}
        />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default SectionCanceilingUI;
