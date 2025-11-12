// MCGL-0021
import GoToScreenUI from './GoToScreen.render';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './GoToScreen.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { GoTOScreenData } from '@/constants/routeConstants';
import { DialogCommonPropsType } from '../type';

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

const SCREEN_MAP = new Map(GoTOScreenData.map(screen => [screen.screenId, screen]));

const GoToScreen = ({ isOpen, onClose }: GoToScreenProps) => {
  const [screenNumber, setScreenNumber] = useState<string | null>(null);
  const navigate = useNavigate();
  const { renderComponent, closeComponent } = useAuth();

  const onSave = useCallback(() => {
    if (!screenNumber) return;

    const screen: any = SCREEN_MAP.get(screenNumber);

    if (screen.isModal) {
      renderComponent(screen.screen, {
        isOpen: true,
        onClose: closeComponent,
        ...screen.defaultProps
      });
    } else {
      navigate(screen.path, { state: { screenData: screen } });
    }

    onClose();
  }, [screenNumber, renderComponent, closeComponent, navigate, onClose]);

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
