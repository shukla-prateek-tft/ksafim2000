import { CustomRowRenderType } from "../type";

export interface FindingStudyGroupsFilterType {
    studyGroup: number;
    groupName: string;
    subject: number;
    classCode: number;
    classNum: number;
    teacher: number;
    activityGroupOnly: boolean;
}

export interface FindingStudyGroupsProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<FindingStudyGroupsFilterType>;
    onChange: (id: keyof FindingStudyGroupsFilterType, value: string | number | boolean) => void;
    customRowRenderer: CustomRowRenderType<StudentGroup>;
}

export interface StudentGroup {
    studyGroup: string;
    deskAuth: string;
    familyName: string;
    privateName: string;
    majorName: string;
}