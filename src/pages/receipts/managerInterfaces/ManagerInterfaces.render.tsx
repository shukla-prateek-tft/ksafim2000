import { BottomToolBar } from '@/ui/BottomToolBar';
import { useTranslation } from 'react-i18next';
import classes from "./ManagerInterfaces.module.scss";
import { GroupRadio } from '@/ui/GroupRadio';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

const ManagerInterfacesUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div>
      <fieldset className={classes.fieldSet}>
        <legend>{t('T_MCFW1338')}</legend>
        <GroupRadio
          labelOrientation="horizontal"
          orientation="horizontal"
          name=""
          options={[
            { label: t('L_INSERT_PAYM'), value: 'dsdsd' },
            { label: t('L_UPD_SUM_PAYM'), value: 'dsdsd' }
          ]}
          selectedValue={''}
          onChange={() => {}}
          inversed
        />

        <div className={classes.container}>
          <Input label={t('L_PAY_DATE')} value={''} size="md" type='date'/>
          <Input  type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} label={t('L_SUM')} value={''} size="md" />
        </div>
        <div className={classes.container}>
          <div className={classes.selectWithInput}>
            <Select
            tabIndex={0} 
              label={t('L_SERVICE_TYPE')}
              options={[
                { label: t('L_SERVICE_TYPE'), value: 'dsdsd' },
                { label: t('L_KALEND_YEAR'), value: 'dsdsd' }
              ]}
            />
            <Input type='number' maxLength={4} isLabel value={''} size="sm" />
            <Input  type='number' maxLength={11} isLabel value={''} size="sm" />
          </div>

          <Input label={t('L_ACC_CARD')} value={''} size="md" />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default ManagerInterfacesUI;
