// MCFW-1389
import SMSMovementsUI from './SMSMovements.render';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  SaveButton,
} from '@/components/commonButtons';
import classes from './SMSMovements.module.scss';
import { Input } from '@/ui/Input';
import { BiSend } from 'react-icons/bi';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { REGEX } from '@/constants/appConstant';
const SMSMovements = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton tabIndex={1}/>
        <DetailButton tabIndex={2}/>
        <SaveButton tabIndex={3}/>
        <AddButton tabIndex={4}/>
        <CancelButton tabIndex={5}/>
      </div>
    );
  };

  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'c1':
        return <Input type="checkbox" tabIndex={9}/>;
      case 'c2':
        return <Input 
                 type='number' 
                 size='fullWidth'
                 maxLength={7}
                 tabIndex={10}
              />;
      case 'c3':
        return <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                size="fullWidth"
                orientation="horizontal"
                 tabIndex={11}

              />
      case 'c4':
        return <Input type="text" size='fullWidth' maxLength={100} pattern={REGEX.allCharacter} tabIndex={12}/>;
       case 'c5':
        return <Input type="amount" size='fullWidth' maxLength={10} tabIndex={13}/>;      
      case 'c6':
        return <Input type="amount" size='fullWidth' maxLength={10} tabIndex={14} />;      
      case 'c7':
        return <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                size="fullWidth"
                orientation="horizontal"
                tabIndex={15}
              />
       case 'c8':
        return <Input type="text" size='fullWidth' maxLength={15} pattern={REGEX.allCharacter} tabIndex={17}/>;  
      case 'c9':
        return <Button variant="link" renderIcon={<BiSend size={12} color="green" tabIndex={18}/>}/>
    }
  };
  return <SMSMovementsUI renderActionItems={renderActionItems} customRowRender={customRowRender} />;
};

export default SMSMovements;
