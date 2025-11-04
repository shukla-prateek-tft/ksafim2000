import classes from './ClassRoomsInTheInstitution.module.scss';
import { BottomToolBar } from '@/components';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { ClassRoomsInTheInstitutionColumn } from './components';
import type { ClassRoomsInTheInstitutionUIProps } from './type';

const ClassRoomsInTheInstitutionUI = ({
  renderActionItems,
  customRowRender,
  data,
  onSort
}: ClassRoomsInTheInstitutionUIProps) => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW1220')}</legend>
        <Table
          customRowRenderer={customRowRender}
          data={data || []}
          columns={ClassRoomsInTheInstitutionColumn()}
          onSort={onSort}
        />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ClassRoomsInTheInstitutionUI;
