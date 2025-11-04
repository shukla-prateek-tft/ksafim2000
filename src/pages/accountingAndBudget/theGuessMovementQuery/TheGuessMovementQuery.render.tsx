import { Input } from '@/ui/Input';
import classes from './TheGuessMovementQuery.module.scss';
import { useTranslation } from 'react-i18next';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Checkbox } from '@/components';

interface TheGuessMovementQueryUIProps {
  renderActionItems: () => JSX.Element;
}

interface Student {
  serviceType: string;
  accountNumber: string;
  [key: string]: string;
}
const TheGuessMovementQueryUI = ({ renderActionItems }: TheGuessMovementQueryUIProps) => {
  const { t } = useTranslation('common');
  const data: Student[] = [
    {
      serviceType: '',
      accountNumber: 'string'
    }
  ];
  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridContainer}>
        <Input
          label={t('L_YEAR')}
          placeholder={t('L_YEAR')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_INSTI_CODE')}
          placeholder={t('L_INSTI_CODE')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_SET_NUMBER')}
          placeholder={t('L_SET_NUMBER')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_RUN_NUMBER')}
          placeholder={t('L_RUN_NUMBER')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Select
          label={t('L_ACC_DEBIT')}
          placeholder={t('L_ACC_DEBIT')}
          orientation="horizontal"
          size="md"
          options={[]}
        />
        <Select
          label={t('L_ACC_CREDIT')}
          placeholder={t('L_ACC_CREDIT')}
          orientation="horizontal"
          options={[]}
          size="md"
        />
        <Input
          label={t('L_DATE_RELEVANT')}
          placeholder={t('L_DATE_RELEVANT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_VALUE_DATE')}
          placeholder={t('L_VALUE_DATE')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_CHECK_NO1')}
          placeholder={t('L_CHECK_NO1')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_MERGE')}
          placeholder={t('L_MERGE')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_DEBIT')}
          placeholder={t('L_DEBIT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_CREDIT')}
          placeholder={t('L_CREDIT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_START_DEBIT')}
          placeholder={t('L_START_DEBIT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_START_CREDIT')}
          placeholder={t('L_START_CREDIT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_BUDG_DEBIT')}
          placeholder={t('L_BUDG_DEBIT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_BUDG_CREDIT')}
          placeholder={t('L_BUDG_CREDIT')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_START_KAL_DEB')}
          placeholder={t('L_START_KAL_DEB')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Input
          label={t('L_START_KAL_CRED')}
          placeholder={t('L_START_KAL_CRED')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <Checkbox label={t('L_TEMP')} />
        <Checkbox label={t('L_MANUAL')} />
        <Input
          label={t('L_USER_NAME')}
          placeholder={t('L_USER_NAME')}
          orientation="horizontal"
          maxLength={12}
          size="md"
        />
        <div className={classes.fullWidth}>
          <Input
            label={t('L_DETAILS')}
            placeholder={t('L_DETAILS')}
            orientation="horizontal"
            maxLength={12}
            size="fullWidth"
          />
        </div>
      </div>
      <div>
        <p>{t('L_MCFR_FIRST_HINT')}</p>
        <p>{t('L_MCFR_SECOND_HINT')}</p>
      </div>

      <div>
        <BottomToolBar
          pagination={{ pageSize: 8, pageNumber: 1, totalPages: 5 }}
          showPagination={true}
          renderActionItems={renderActionItems}
        />
      </div>
    </div>
  );
};

export default TheGuessMovementQueryUI;
