//MCFW-1324
import React from 'react';
import WebsiteCollectionDatesUI from './WebsiteCollectionDates.render';
import { GlobalLoader } from '@/components';
import { adminServices } from '@/services';
import { useNavigate } from 'react-router-dom';
import { ServiceFn } from '../type';
import { useApiQuery } from '@/hooks';
import { useEffect } from 'react';
import { WebsiteCollectionDatesResponse } from './type';

const WebsiteCollectionDates = () => {
  const navigate = useNavigate();
  const {
    state: { data: WebsitecollectiondateResponse },
    callService: WebsitecollectiondateService
  } = useApiQuery<WebsiteCollectionDatesResponse>(
    adminServices.system.getWebsiteCollectionDates1324 as ServiceFn
  );

  useEffect(() => {
    WebsitecollectiondateService();
  }, []);

  const handleSave = () => {
    // Your save logic...
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <WebsiteCollectionDatesUI />
    </>
  );
};

export default WebsiteCollectionDates;
