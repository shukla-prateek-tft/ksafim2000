import classes from './ListOfScholarships.module.scss';
import { Table } from '@/ui/Table';
import { ListOfScholarshipsColumn } from './components';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Input } from '@/ui/Input';
import { Footer } from '@/ui/Footer';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
const ListOfScholarshipsUI = ({ renderActionItems, customRowRender }: any) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      renderFooter={<Footer pagination={{ pageSize: 10, pageNumber: 1, totalPages: 5 }} />}
      renderHeader={renderActionItems()}
      screenName="MCFW-1330"
    >
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <legend className={classes.legend}>{t('L_MILGA_LIST')}</legend>
          <Table
            data={[
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
            ]}
            columns={ListOfScholarshipsColumn()}
            customRowRenderer={customRowRender}
          />
        </fieldset>
        <div className={classes.bottomDetail}>
          <Badge renderIcon={<PiWarningCircleFill />} title={t('L_CONFIRM_SIGN')} outlined />
          <div className={classes.aligner}>
            <Input
              orientation="horizontal"
              label={t('L_TOTAL') + ':'}
              size='sm'
              type='amount' maxLength={11}
              
            />
            <Input type='amount' maxLength={11} onChange={(()=>{})} onBlur={()=>{}} orientation="horizontal" size='sm'/>
            <Input type='amount' maxLength={11} onChange={(()=>{})} onBlur={()=>{}} orientation="horizontal" size='sm'/>
            <Input type='amount' maxLength={11} onChange={(()=>{})} onBlur={()=>{}} orientation="horizontal" size='sm'/>
            <Input type='number' maxLength={6} orientation="horizontal" size='sm'/>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default ListOfScholarshipsUI;
