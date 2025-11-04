import { Input } from '@/ui/Input';
import classes from './ArticlesForPermanentAdmission.module.scss';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { ReactNode } from 'react';
import { REGEX } from '@/constants/appConstant';
import { ArticlesForAdmissionColumns } from './components';

interface ArticlesForPermanentAdmissionProps {
  renderActionItems: () => JSX.Element;
  customRowRenderer: (key: string, row: any) => ReactNode;
}

interface Student {
  serviceType: string;
  accountNumber: string;
  [key: string]: string;
}
const ArticlesForPermanentAdmissionUI = ({
  renderActionItems,
  customRowRenderer
}: ArticlesForPermanentAdmissionProps) => {
  const { t } = useTranslation('common');
  const data: Student[] = [
    {
      serviceType: '',
      accountNumber: 'string'
    }
  ];
  return (
    <div className={classes.mainContainer}>
      <div className={classes.rowContainer}>
        <fieldset>
          <legend>{t('T_MCFW1285')}</legend>
          <div>
            <Input
              type="number"
              label={t('L_PAYER_NO')}
              placeholder={t('L_PAYER_NO')}
              orientation="horizontal"
              maxLength={10}
              size="md"
            />
            <Input
              label={t('L_NAME')}
              placeholder={t('L_NAME')}
              orientation="horizontal"
              maxLength={30}
              type="text"
              pattern={REGEX.allCharacter}
              size="md"
            />
          </div>
        </fieldset>
      </div>
      <Table
        columns={ArticlesForAdmissionColumns()}
        height="50vh"
        data={data}
        customRowRenderer={customRowRenderer}
      />
      <div className={classes.footer}>
        <BottomToolBar
          pagination={{
            pageSize: 8,
            pageNumber: 1,
            totalPages: 5,
            totalCount: 10,
            hasNextPage: true,
            hasPreviousPage: true
          }}
          showPagination={true}
          renderActionItems={renderActionItems}
        />
      </div>
    </div>
  );
};

export default ArticlesForPermanentAdmissionUI;
