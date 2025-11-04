import React from 'react';
import styles from './GlobalLoader.module.scss';
import { AnimationCard } from '../animationCard';
import { LoadingAnimation } from '@/assets/animations';

interface LoaderProps {
  text?: string;
  loading: boolean;
  showOnFullScreen?: boolean;
}

const GlobalLoader: React.FC<LoaderProps> = ({ text, loading, showOnFullScreen = true }) => {
  if (!loading) return null;
  return (
    <>
      <div
        className={`${text ? styles.loading : styles.animationLoader} ${showOnFullScreen ? styles.positionFixed : styles.fullScreen}`}
      >
        {text ? <div>{text}</div> : <AnimationCard height={300} width={300} data={LoadingAnimation} />}
      </div>
    </>
  );
};

export default GlobalLoader;
