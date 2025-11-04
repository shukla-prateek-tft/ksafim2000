import { useTranslation } from 'react-i18next';
import classes from "../CollectionStatusForClass.module.scss"

export const CollectionStatusForClassColumns = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_ID'),
      width: '10%'
    },
    {
      key: 'code2',
      label: t('L_NAME'),
      width: '10%'
    },
    {
      key: 'code3',
      label: t('L_PHONE'),
      width: '10%'
    },
    {
      key: 'code4',
      label: t('L_EXT_PHONE'),
      width: '10%'
    },
    { key: 'code5', label: t('L_COMMENT'), width: '10%' },
    {
      key: 'code6',
      header: () => (
        <div className={classes['column-sixth']}>
          <div>{t('L_STREET')}</div>
          <div>{t('L_CITY')}</div>
        </div>
      ),
      width: '20%',
      align: 'center'
    },
    { key: 'code7', label: t('L_DEBIT'), width: '10%' },
    { key: 'code8', label: t('L_CREDIT'), width: '10%' },
    { key: 'code9', label: t('L_REST'), width: '5%' },
    { key: 'code10', label: t('L_STATUS'), width: '5%' }
  ];
};
