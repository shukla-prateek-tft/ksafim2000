import { useTranslation } from 'react-i18next';
import classes from './LetterOfDebt.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { TextArea } from '@/ui/TextArea';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { BackToPageButton, Button, SaveButton } from '@/components/commonButtons';
import { GroupRadio } from '@/ui/GroupRadio';
import { getInputPattern } from '@/utils/commonHelper';

const LetterOfDebtUI = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_MCFS0610_LEGEND')}</legend>

        <div className={classes.flex}>
          <div className={classes.flex}>
            <Select options={[]} size="sm" orientation="horizontal" label={t('L_CLASS_FROM')} />
            <Input size="sm" orientation="horizontal" type="number" pattern={getInputPattern(2)} />
          </div>
          <div className={classes.flex}>
            <Select options={[]} size="sm" orientation="horizontal" label={t('L_TO')} />
            <Input size="sm" orientation="horizontal" type="number" pattern={getInputPattern(2)} />
          </div>
          <Input
            type="checkbox"
            size="sm"
            orientation="horizontal"
            label={t('L_INCLUDING_SIBLINGS')}
          />
        </div>

        <div className={classes.flex}>
          <Input
            size="sm"
            orientation="horizontal"
            label={t('L_PARENT')}
            type="number"
            pattern={getInputPattern(10)}
          />
          <p>{t('L_FAMILY_NAME')}</p>
          <p>{t('L_PRIVATE_NAME')}</p>
        </div>
        <div className={classes.flex}>
          <Input
            size="sm"
            orientation="horizontal"
            label={t('L_STUDENT')}
            type="number"
            pattern={getInputPattern(10)}
          />
          <p>{t('L_FAMILY_NAME')}</p>
          <p>{t('L_PRIVATE_NAME')}</p>
        </div>
        <div className={classes.flex}>
          <Input
            size="sm"
            orientation="horizontal"
            label={t('L_STUDY_GROUP')}
            type="number"
            pattern={getInputPattern(18)}
          />
          <p>{t('L_GROUP_NAME')}</p>
          <Input type="checkbox" size="sm" orientation="horizontal" />
        </div>
        <Select options={[]} size="lg" orientation="horizontal" label={t('L_SERVICE_TYPE')} />

        <br />
        <div className={classes.justify}>
          <div>
            <Input
              size="sm"
              orientation="horizontal"
              label={t('L_F_SUM')}
              type="amount"
              maxLength={11}
            />
            <Input type="checkbox" size="sm" orientation="horizontal" label={t('L_WIDTH_ID')} />
            <Input type="checkbox" size="sm" orientation="horizontal" label={t('L_WITH_LEAVING')} />
            <Input type="checkbox" size="sm" orientation="horizontal" label={t('L_FINAL_EXAMS')} />
          </div>
          <TextArea size="lg" orientation="vertical" label={t('L_NO_DISPLAY')} />
        </div>
        <br />
        <GroupRadio
          onChange={() => {}}
          orientation="horizontal"
          options={[
            { label: t('V_ALL'), value: '1' },
            { label: t('V_OBLIGED'), value: '2' },
            { label: t('L_ELIGABLE_CHILD'), value: '3' }
          ]}
          name={''}
          selectedValue={''}
        />
        <GroupRadio
          onChange={() => {}}
          orientation="horizontal"
          options={[
            { label: t('V_DETAIL'), value: '1' },
            { label: t('V_SUMM'), value: '2' }
          ]}
          name={''}
          selectedValue={''}
        />
        <GroupRadio
          onChange={() => {}}
          title={t('IF_ORAT_KEVA')}
          orientation="horizontal"
          options={[
            { label: t('V_PERMIT_ALL'), value: '1' },
            { label: t('L_WITH'), value: '2' },
            { label: t('L_OUT'), value: '3' }
          ]}
          name={''}
          selectedValue={''}
        />
        <GroupRadio
          onChange={() => {}}
          title={t('L_PARENT_MAIL')}
          orientation="horizontal"
          options={[
            { label: t('V_ALL'), value: '1' },
            { label: t('V_YES'), value: '2' },
            { label: t('V_NO'), value: '3' }
          ]}
          name={''}
          selectedValue={''}
        />
        <br />
        <br />

        <div className={classes.justify}>
          <div>
            <Input size="lg" orientation="horizontal" label={t('L_HEADER')} maxLength={80} />
            <Input size="lg" orientation="horizontal" label={t(' ')} maxLength={80} />
          </div>
          <Input type="checkbox" size="sm" orientation="vertical" label={t('L_WEBSITE_LINK')} />
        </div>
        <br />
        <div className={classes.justify}>
          <div>
            <Input size="lg" orientation="horizontal" label={t('L_TRAILER')} maxLength={80} />
            <Input size="lg" orientation="horizontal" label={t(' ')} maxLength={80} />
          </div>
          <Input type="checkbox" size="sm" orientation="vertical" label={t('')} />
        </div>
        <br />
        <br />
        <br />
        <BottomToolBar
          showPagination={false}
          renderActionItems={() => (
            <>
              <BackToPageButton />
              <SaveButton />
              <Button title={t('L_MCFS0610_FOOTER_BTN_TXT')} />
            </>
          )}
        />
      </fieldset>
    </div>
  );
};

export default LetterOfDebtUI;
