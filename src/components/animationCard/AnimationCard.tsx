import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

interface AnimationCardProps {
  data: object;
  className?: string;
  loop?: boolean;
  height?: number;
  width?: number;
  style?: any;
}

const AnimationCard: React.FC<AnimationCardProps> = ({
  data,
  className,
  loop = true,
  height = 200,
  width = 200,
  style
}) => {
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animationInstance = Lottie.loadAnimation({
      container: animationRef.current!,
      renderer: 'svg',
      loop,
      autoplay: true,
      animationData: data
    });

    return () => {
      animationInstance.destroy();
    };
  }, [data, loop]);

  return (
    <div
      ref={animationRef}
      className={className}
      style={{ height, width, marginTop: 30, marginBottom: 30, ...style }}
    />
  );
};

export default AnimationCard;
