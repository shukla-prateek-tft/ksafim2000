import { Input } from '@/ui/Input';
import classes from './FindingStudyGroups.module.scss';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { Select } from '@/ui/Select';
import { Button } from '@/components/commonButtons';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Checkbox } from '@/components';
import { FindingStudyGroupsProps, StudentGroup } from './types';
import { FindingStudyGroupsColumns } from './components';

const FindingStudyGroups = ({
    renderActionItems,
    filter,
    onChange
}: FindingStudyGroupsProps) => {
    const { t } = useTranslation("common");
    const data: StudentGroup[] = [
        {
            studyGroup: `SID1`,
            deskAuth: "aut",
            familyName: `Family1`,
            privateName: `Private1`,
            majorName: `Major`,
        }
    ];
    return (
        <div>
            <fieldset className={classes.rowContainer}>
                <legend className={classes.legend}>{t('T_MCIL0013')}</legend>

                <div>
                    <div className={classes.rowContainer}>
                        <Input label={t('L_MCIL0013_STUDY_GROUP')} placeholder={t('L_MCIL0013_STUDY_GROUP')} orientation="horizontal" maxLength={18} type='number' value={filter.studyGroup} onChange={(e) => onChange('studyGroup', e.target.value)} />
                        <Input label={t('L_MCIL0013_GROUP_NAME')} placeholder={t('L_MCIL0013_GROUP_NAME')} orientation="horizontal" maxLength={30} type='text' value={filter.groupName} onChange={(e) => onChange('groupName', e.target.value)} />
                    </div>
                    <div className={classes.rowContainer}>
                        <Checkbox label={t('L_MCIL0013_CHECKBOX')} className={classes.checkbox} checked={filter.activityGroupOnly} onChange={(e) => onChange('activityGroupOnly', e.target.value)}  />
                        <Select
                            label={t('L_SUBJECT')}
                            placeholder={t('L_SUBJECT')} orientation="horizontal"
                            options={[]}
                            value={filter.subject}
                            onChange={(e) => onChange('subject', e.target.value)}
                        />
                    </div>
                    <div className={classes.rowContainer}>
                        <div className={classes.rowContainer}>
                            <Select
                                label={t('L_CLASS_CODE')}
                                placeholder={t('L_CLASS_CODE')} orientation="horizontal"
                                options={[]}
                                value={filter.classCode}
                                onChange={(e) => onChange('classCode', e.target.value)}
                            />
                            <Input
                                placeholder={t('L_CLASS_NUM')}
                                orientation="horizontal"
                                maxLength={2}
                                type='number'
                                value={filter.classNum}
                                onChange={(e) => onChange('classNum', e.target.value)}
                            />
                        </div>
                        <Select
                            label={t('L_TEACHER')}
                            placeholder={t('L_TEACHER')} orientation="horizontal"
                            options={[]}
                            value={filter.teacher}
                            onChange={(e) => onChange('teacher', e.target.value)}
                        />
                    </div>
                </div>
                <Button>{t('L_SEARCH')}</Button>
            </fieldset>
            <Table
                columns={FindingStudyGroupsColumns()}
                height="50vh"
                data={data}

            />
            <div className={classes.footer}>
                <BottomToolBar pagination={{ pageSize: 8, pageNumber: 1, totalPages: 5 }} showPagination={true} renderActionItems={renderActionItems} />
            </div>
        </div>
    )
}

export default FindingStudyGroups;
