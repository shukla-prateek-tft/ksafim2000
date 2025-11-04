import { ScreenLayout } from '@/ui/Layout';
import { Table } from '@/ui/Table';
import SelectingStudentsForAscholarshipColumn from './components';
import { Card } from '@/ui/Card';
import { BackToPageButton, SaveButton, SearchButton, Button } from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import classes from './SelectingStudentsForAscholarship.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { GroupRadio } from '@/ui/GroupRadio';
import { TextArea } from '@/ui/TextArea';
import { MdModeEdit } from 'react-icons/md';

const data = [
  {
    code1: true,
    code2: 'STUDENT_ID',
    code3: 'FAMILY_NAME',
    code4: 'PRIVATE_NAME',
    code5: 'CLASS',
    code6: 'REST',
    code7: false
  }
];

const SelectingStudentsForAscholarshipUI = ({ customRowRender }: any) => {
  const { t } = useTranslation('common');
 
  const TopHeader = () => {
    return (
      <div className={classes.buttonContainer}>
        <BackToPageButton />
        <SaveButton />
        <SearchButton />
      </div>
    );
  };
  const ActionInput = () => {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div>
            <div className={classes.innerContainer}>
              <Input size="md" label={t('L_ID')} orientation="horizontal" value={'ID'} />
              <Input
                size="md"
                label={t('L_FAMILY_NAME')}
                orientation="horizontal"
                value={'FAMILY_NAME'}
              />
              <Input
                size="md"
                label={t('L_PRIVATE_NAME')}
                orientation="horizontal"
                value={'PRIVATE_NAME'}
              />
            </div>

            <div className={classes.innerContainer}>
              <Input size="md" label={t('L_PARENT')} orientation="horizontal" value={'PARENT_ID'} />
              <Input
                size="md"
                label={t('L_FAMILY_NAME')}
                orientation="horizontal"
                value={'PARENT_F_NAME'}
              />
              <Input
                size="md"
                label={t('L_PRIVATE_NAME')}
                orientation="horizontal"
                value={'PARENT_PR_NAME'}
              />
            </div>
          </div>
          <div className={classes.innerContainer}>
            <Button>{t("L_SEARCH")}</Button>
            <Button renderIcon={<MdModeEdit />} />
          </div>
        </div>

        <div className={classes.innerContainer}>
          <Select
            options={[{ label: `${t('L_F_CLASS_CODE')}`, value: 'DAT' }]}
            size="md"
            label={t('L_MONEY_AMNT')}
            orientation="horizontal"
          />
          <Input size="sm" value={''} />
          <Select
            options={[{ label: `${t('L_CLASS_TO')}`, value: 'DAT' }]}
            size="md"
            label={t('L_MONEY_AMNT')}
            orientation="horizontal"
          />
          <Input size="sm" value={''} />
          <Input
            size="md"
            label={t('L_STUDY_GROUP')}
            orientation="horizontal"
            value={'STUDY_GROUP'}
          />
          <Input value={'GROUP_NAME'} disabled />
        </div>
        <div className={classes.innerContainer}>
          <Input type="checkbox" size="md" label={t('IF_ORAT_KEVA')} orientation="horizontal" />
          <GroupRadio
            labelOrientation="horizontal"
            inversed={true}
            onChange={() => {}}
            title={t('IF_ORAT_KEVA')}
            options={[
              { label: t('L_ELIGABLE_CHILD'), value: 'dsdsd' },
              { label: t('L_WITH'), value: 'dsdsd' },
              { label: t('L_OUT'), value: 'dsdsd' }
            ]}
            orientation="horizontal"
            name={''}
            selectedValue={''}
          />
        </div>
        <div className={classes.innerContainer}>
          <Input size="md" label={t('L_CITY_CODE')} orientation="horizontal" value={'CITY_CODE'} />
          <Select
            size="md"
            label={t('L_CITY_NAME')}
            options={[{ label: `${t('GURGAON')}`, value: 'CITY_NAME' }]}
            orientation="horizontal"
          />
        </div>
        <div className={classes.innerContainer}>
          <Input size="md" label={t('L_FROM_SUM')} orientation="horizontal" value={'F_REST'} />
          <Input
            size="md"
            label={t('L_UP_TO_AN_AMOUNT')}
            orientation="horizontal"
            value={'T_REST'}
          />
        </div>
        <div className={classes.serviceType}>
          <Select
            orientation="horizontal"
            size="md"
            label={t('L_SERVICE_TYPE')}
            options={[{ label: `${t('L_SERVICE_TYPE')}`, value: 'COUNTRY' }]}
          />
        </div>
        <div className={classes.vAllRadio}>
          <GroupRadio
            size="fullWidth"
            onChange={() => {}}
            labelOrientation="horizontal"
            inversed
            orientation="horizontal"
            options={[
              { label: t('V_ALL'), value: 'V_ALL' },
              { label: t('V_OBLIGED'), value: 'V_OBLIGED' },
              { label: t('L_ELIGABLE_CHILD'), value: 'L_ELIGABLE_CHILD' }
            ]}
            name={''}
            selectedValue={''}
          />
        </div>

        <div className={classes.innerContainer}>
          <Select
            label={t('L_REGISTER_STAGE')}
            options={[{ label: `${t('L_BANK_ACC')}`, value: 'BANK_ACC' }]}
            size="md"
          />
          <GroupRadio
            size="fullWidth"
            onChange={() => {}}
            orientation="vertical"
            inversed={true}
            labelOrientation="horizontal"
            options={[
              { label: t('V_PERMIT_ALL'), value: 'dsdsd' },
              { label: t('L_INCLUDE'), value: 'dsdsd' },
              { label: t('L_NO_INCLUDE'), value: 'dsdsd' }
            ]}
            name={''}
            selectedValue={''}
          />
          <TextArea
            size="md"
            label={t('L_NO_CLAUSES')}
            orientation="horizontal"
            value={'NO_DISPLAY_TYPE'}
          />
        </div>
      </div>
    );
  };
  return (
    <ScreenLayout screenName="MCFL1329" renderHeader={<TopHeader />}>
      <Card title={t('L_LOCATE')}>
        <ActionInput />
      </Card>
      <Card title="TMCSQ">
        <div className={classes.tableInfo}>
          <div className={classes.table}>
            <Table
              data={data}
              height="45vh"
              customRowRenderer={customRowRender}
              columns={SelectingStudentsForAscholarshipColumn()}
            />
            
            <Input size="md" label={`${t('L_SIGNED')} :`} orientation="horizontal" value={'0'} />
          </div>
          <div className={classes.textBox}>HIBRU TEXT</div>
        </div>
      </Card>
    </ScreenLayout>
  );
};

export default SelectingStudentsForAscholarshipUI;
