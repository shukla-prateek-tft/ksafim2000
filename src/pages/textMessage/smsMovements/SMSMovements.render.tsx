import classes from './SMSMovements.module.scss';
import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Input } from '@/ui/Input';
import { Footer } from '@/ui/Footer';
import { SMSMovementsColumns } from './components';
import { Button } from '@/ui/Button';
import { attachMultipleClasses } from '@/Languages';
import { BiSend } from 'react-icons/bi';
const SMSMovementsUI = ({ renderActionItems, customRowRender }: any) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      renderFooter={<Footer pagination={{ pageSize: 10, pageNumber: 1, totalPages: 5 }} />}
      renderHeader={renderActionItems()}
      screenName="MCFW-1389"
    >
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <legend className={classes.legend}>{t('L_SMS_LIST')}</legend>
          <div className={classes.aligner}>
            <div className={classes.inputAlign}>
              <Input orientation="horizontal" label={t('L_MCFW1389_INPUT_LABEL1')} type='number' maxLength={7} tabIndex={6}/>
            <Button variant="link" renderIcon={<BiSend size={12} color="green" />} tabIndex={7}/>
            </div>
            <Input orientation="horizontal" label={t('T_TEXT2_MCFW1388')}type='number' maxLength={7} tabIndex={8}/>
          </div>

          <Table
            height="60vh"
            data={[
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
          
            ]}
            columns={SMSMovementsColumns()}
            customRowRenderer={customRowRender}
          />
        </fieldset>
        <div className={classes.bottomDetail}>
          <div className={attachMultipleClasses(classes.aligner, classes.bottomAligner)}>
            <Input inversed type="checkbox" orientation="horizontal" label={t('L_STUD_EXIST')} />
            <Input orientation="horizontal" label={t('L_TOTAL') + ':'} type='amount'maxLength={10} onBlur={()=>{}}/>
            <Input orientation="horizontal" type='amount'maxLength={10} />
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default SMSMovementsUI;
