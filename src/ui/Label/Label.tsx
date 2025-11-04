import React from 'react';
import classes from './Label.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { GroupTitlePositionTypes } from '@/types/ui/groupRadio';

interface LabelProps {
  label?: string;
  isLabel?: boolean;
  titlePosition?:GroupTitlePositionTypes;
}

const Label: React.FC<LabelProps> = ({ label, isLabel = false,titlePosition='center' }) => {
  if (label) {
    return (
      <label
        className={attachMultipleClasses(classes.label, label.length === 1 && classes.removeMargin,classes[titlePosition])}
      >
        {label}
      </label>
    );
  }

  if (isLabel) {
    return <span className={classes.noLabel}>&nbsp;</span>;
  }

  return null;
};

export default Label;
