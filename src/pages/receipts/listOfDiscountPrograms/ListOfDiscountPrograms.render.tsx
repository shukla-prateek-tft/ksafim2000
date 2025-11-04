import classes from './ListOfDiscountPrograms.module.scss';
import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { ProgramColumns } from './components';
import { ReactNode } from 'react';
import { BottomToolBar } from '@/ui/BottomToolBar';

interface ListOfDiscountProgramsUIProps {
  renderActionItems?: () => JSX.Element;
  customRowRenderer: (key: string, row: any, index: number) => ReactNode;
}
const ListOfDiscountProgramsUI = ({
  renderActionItems,
  customRowRenderer
}: ListOfDiscountProgramsUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset>
        <legend className={classes.legend}>{t('T_MCFW0676')}</legend>
        <Table
          data={[{ id: 'asdasd' }, { id: 'asdasd' }, { id: 'asdasd' }, { id: 'asdasd' }]}
          columns={ProgramColumns()}
          customRowRenderer={customRowRenderer}
        />
      </fieldset>

      <div className={classes.remark}>
        <Badge renderIcon={<PiWarningCircleFill />} title={t('L_MCFW0676_REMARK')} />
      </div>

      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ListOfDiscountProgramsUI;
