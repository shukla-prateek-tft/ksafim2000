// MCGL-0021
import GoToScreenUI from './GoToScreen.render';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './GoToScreen.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { GoTOScreenData } from '@/constants/routeConstants';
import { DialogCommonPropsType } from '../type';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';

interface GoToScreenProps {
  isOpen: boolean;
  onClose: () => void;
}
interface GoToScreenConfig {
  name: string;
  screen: string;
  screenId: string;
  path: string;
  index?: number;
  isModal?: boolean;
  element?: (props: DialogCommonPropsType) => JSX.Element;
}

const GoToScreen = ({ isOpen, onClose }: GoToScreenProps) => {
  const [screenNumber, setScreenNumber] = useState<string | null>(null);
  const {t}=useTranslation('common')

  const navigate = useNavigate();
  const { setGlobalRenderedComponent,toggleFlags } = useAuth();

  const onSave = () => {
    const CurrentScreenData: GoToScreenConfig | undefined = GoTOScreenData.find(
      elem => elem?.screenId === screenNumber
    );

    if (CurrentScreenData) {
      if (CurrentScreenData.element) {
        setGlobalRenderedComponent(
          () => () =>
            CurrentScreenData.element!({
              isOpen: true,
              onClose: () => setGlobalRenderedComponent(null)
            })
        );
        onClose();
      } else {
        navigate(CurrentScreenData.path);
        onClose();
      }
    } else {
      toast.warn('No Screen Found');
      toggleFlags({showValidationError:true,'errorData':{
        type:'error',
        message:`${t('E_024')}   -   ${getFormatedDate(new Date(),'DD.MM.YYYY-HH:MM_SS')}`,
        confirmText:t('V_ACCEPT')
      }})
    }
  };

  const renderActionItems = () => (
    <div className={classes.actionItems}>
      <BackToPageButton onClick={onClose} />
      <SaveButton onClick={onSave} />
    </div>
  );

  return (
    <DialogBox important closeOnOverlay={false} isOpen={isOpen} onClose={onClose} title="MCGL-0021">
      <GoToScreenUI
        renderActionItems={renderActionItems}
        screenNumber={screenNumber}
        setScreenNumber={setScreenNumber}
      />
    </DialogBox>
  );
};

export default GoToScreen;
