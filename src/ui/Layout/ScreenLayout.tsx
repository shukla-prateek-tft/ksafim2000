import React, { ReactNode } from 'react';
import classes from './ScreenLayout.module.scss';
import { useNavigate } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import { useAuth } from '@/hooks';
import { attachMultipleClasses } from '@/Languages';

interface ScreenLayoutProps {
  renderHeader?: ReactNode | (() => ReactNode);
  renderFooter?: ReactNode | (() => ReactNode);
  children: ReactNode;
  screenNumber?: string;

  screenName?: string;
  handleGoBack?: () => void;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  renderHeader,
  renderFooter,
  children,
  screenNumber,
  screenName,
  handleGoBack
}) => {
  const { isMunicipality } = useAuth();
  const uiScale = isMunicipality ? 'primary' : 'secondary';
  const navigate = useNavigate();
  const goBack = () => {
    if (typeof handleGoBack === 'function') {
      handleGoBack();
    } else {
      navigate(-1);
    }
  };
  const renderNode = (node?: ReactNode | (() => ReactNode)) => {
    if (typeof node === 'function') {
      return node();
    }
    return node || null;
  };
  return (
    <div className={attachMultipleClasses(classes.container,classes[`scale-${uiScale}`])}>
      <div className={classes.headerContainer}>
        <div className={classes.gridHeader}>
          <div className={classes.screenDetailContainer}>
            <ImArrowRight2 size={27} className={classes.backIcon} onClick={goBack} />
            <h3 className={classes.screenNumber}>{screenNumber}</h3>
            <h3 className={classes.screenName}>{screenName}</h3>
          </div>
          <div className={classes.screenActionContainer}>{renderNode(renderHeader)}</div>
        </div>
      </div>
      <div className={classes.mainContainer}>{children}</div>
      <div className={classes.footerContainer}>{renderNode(renderFooter)}</div>
    </div>
  );
};

export default ScreenLayout;
