// MCIL0013
import { DialogBox } from "@/ui/DialogBox";
import FindingStudyGroupsUI from "./FindingStudyGroups.render";
import { BackToPageButton, SaveButton, SearchButton } from "@/components/commonButtons";
import classes from "./FindingStudyGroups.module.scss";
import { useState } from "react";
import { FindingStudyGroupsFilterType, StudentGroup } from "./types";
import { CustomRowRenderType } from "../type";

const FindingStudyGroups = () => {
    const [filter, setFilter] = useState<Partial<FindingStudyGroupsFilterType>>({});

    const onChange = (id: keyof FindingStudyGroupsFilterType, value: string | number | boolean) => {
        setFilter({ ...filter, [id]: value });
    }
    const renderActionItems = () => {
        return (
            <div className={classes.actionItems}>
                <BackToPageButton />
                <SaveButton />
                <SearchButton />
            </div>
        );
    };

    const customRowRenderer: CustomRowRenderType<StudentGroup> = (key, row) => {
        switch (key) {
            case 'familyName':
                return <div className={classes.classCodeContainer}>
                    <span>{row?.familyName}</span>
                    <span>{row?.privateName}</span>
                </div>
        }
    }

    return (
        <DialogBox isOpen onClose={() => { }} title="MCIL0013">
            <FindingStudyGroupsUI
                renderActionItems={renderActionItems}
                filter={filter}
                onChange={onChange}
                customRowRenderer={customRowRenderer}
            />
        </DialogBox>
    )
}

export default FindingStudyGroups;
