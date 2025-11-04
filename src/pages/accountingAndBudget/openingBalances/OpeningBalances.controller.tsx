//MCFW-0596
import { GlobalLoader } from '@/components';
import OpeningBalancesUI from './OpeningBalances.render';
import { AddButton, BackToPageButton, Button, CancelButton, DetailButton, OtherDetailButton, SaveButton, SearchButton } from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const OpeningBalances = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Your save logic...
  };

  const renderActionItems = () => {
    const { t } = useTranslation('common');
    return (
      <>
        <BackToPageButton onClick={() => navigate(-1)} />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton onClick={handleSave} />
        <AddButton />
        <CancelButton />
        <Button title={t('L_COPY')} />
        <SearchButton />
      </>
    );
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <OpeningBalancesUI renderActionItems={renderActionItems} />
    </>
  );
};

export default OpeningBalances;
