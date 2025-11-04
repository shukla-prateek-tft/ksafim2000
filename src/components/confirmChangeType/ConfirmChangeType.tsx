import { Button, Input } from '@/components';
import classes from './ConfirmChangeType.module.scss';
import { FaCheck, FaQuestion, FaRegShareSquare } from 'react-icons/fa';

const ConfirmChangeType = () => {
  return (
    <div className={classes.main}>
      <Input className={classes.inputCommon} value="" onChange={() => {}} />
      <div className={classes.textbox}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi libero voluptatum
        voluptate iure praesentium officia qui.
      </div>
      <div className={classes.alignInputContainer}>
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
      </div>
      <div className={classes.alignInputContainer}>
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
      </div>
      <div className={classes.alignInputContainer}>
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
        <Input className={classes.inputCommon} label="Input1" value="" onChange={() => {}} />
      </div>
      <div className={classes.actionContainer}>
        <Button renderIcon={() => <FaRegShareSquare color="red" />} />
        <Button renderIcon={() => <FaQuestion color="orange" />} />
        <Button renderIcon={() => <FaCheck color="green" />} />
      </div>
    </div>
  );
};

export default ConfirmChangeType;
