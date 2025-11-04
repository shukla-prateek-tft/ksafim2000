import classes from './TransferBetweenCentralizedSections.module.scss';
import { Table } from '@/ui/Table';
import { TransferBetweenCentralizedSectionsColumn } from './component';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import clsx from 'clsx';
import { Button } from '@/components/commonButtons';
import { BiEdit } from 'react-icons/bi';
import { GroupRadio } from '@/ui/GroupRadio';
import { Footer } from '@/ui/Footer';
import { TransferBetweenCentralizedSectionsUIProps } from './types';
const TransferBetweenCentralizedSectionsUI = ({
  renderActionItems,
  customRowRender,
  filter,
  onChange
}: TransferBetweenCentralizedSectionsUIProps) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      renderFooter={
        <Footer
          pagination={{
            pageSize: 10,
            pageNumber: 1,
            totalPages: 10,
            hasNextPage: true,
            hasPreviousPage: true
          }}
        />
      }
      renderHeader={renderActionItems()}
      screenName="MCFW-1382"
    >
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <legend className={classes.legend}>{t('T_MCFW1382_TITLE')}</legend>
          <div className={classes.topContainer}>
            <div className={classes.sectionContainer}>
              <Select
                size="md"
                orientation="horizontal"
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                label={t('L_SERVICE_TYPE')}
                value={filter.serviceType}
                onChange={(e) => onChange('serviceType', e.target.value)}
              />

              <div className={classes.flex}>
                <Input
                  orientation="horizontal"
                  size="md"
                  label={t('L_FROM_CLASS')}
                  value={filter.fromClass}
                  onChange={(e) => onChange('fromClass', e.target.value)}
                  maxLength={2}
                  type='number'
                />
                <Select
                  value={filter.fromClassSelect}
                  onChange={(e) => onChange('fromClassSelect', e.target.value)}
                  options={[
                    { label: 'dsd', value: 'dsdsd' },
                    { label: 'dsd', value: 'dsdsd' }
                  ]}
                />
              </div>
              <Select
                value={filter.actType}
                onChange={(e) => onChange('actType', e.target.value)}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                label={t('L_ACT_TYPE')}
                orientation='horizontal'
                size='md'
              />
            </div>
            <div className={classes.sectionContainer}>
              <Input
                orientation="horizontal"
                value={filter.accCardName}
                onChange={(e) => onChange('accCardName', e.target.value)}
                label={t('L_ACC_CARD')}
                size="md"
                maxLength={40}
              />
              <div className={classes.flex}>
                <Input
                  orientation="horizontal"
                  label={t('L_TO')}
                  size="md"
                  value={filter.toClass}
                  type='number'
                  maxLength={2}
                  onChange={(e) => onChange('toClass', e.target.value)}
                />
                <Select
                  options={[
                    { label: 'dsd', value: 'dsdsd' },
                    { label: 'dsd', value: 'dsdsd' }
                  ]}
                  value={filter.toClassSelect}
                  onChange={(e) => onChange('toClassSelect', e.target.value)}
                />
              </div>
              <div className={classes.flex}>
                <Input
                  orientation="horizontal"
                  type='checkbox'
                  size="md"
                  label={t('L_WITH_LEAVING')}
                  checked={filter.includingLeaving}
                  onChange={(e) => onChange('includingLeaving', e.target.checked)}
                />
              </div>
            </div>
            <div className={clsx(classes.sectionContainer, classes.center)}>
              <Button title={t('L_SEARCH')} variant="outline" />
              <Button variant="outline" renderIcon={<BiEdit />} />
              <GroupRadio
                options={[
                  { label: t('L_TO_OWE'), value: '1' },
                  { label: t('L_ALL_RIGHTS_CLAUSES'), value: '2' }
                ]}
                orientation="horizontal"
                labelOrientation="horizontal"
                name="group1"
                selectedValue=""
                onChange={() => { }}
                inversed
              />
            </div>
          </div>
          <Table
            data={[
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' }
            ]}
            columns={TransferBetweenCentralizedSectionsColumn()}
            customRowRenderer={customRowRender}
          />
        </fieldset>
        <div className={classes.bottomDetail}>
          <p>{t('L_MCFW1382_BOTTOM_TITLE')}</p>
          <Input orientation="horizontal" label={t('L_TOT_STUDENT') + ':'} size="md" />
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TransferBetweenCentralizedSectionsUI;
