//MCSL-0012
import React from 'react';
import LocatingHouseholdsUI from './LocatingHouseholds.render';
import { GlobalLoader } from '@/components';
import { useNavigate } from 'react-router-dom';

const LocatingHouseholds = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Your save logic...
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <LocatingHouseholdsUI />
    </>
  );
};

export default LocatingHouseholds;
