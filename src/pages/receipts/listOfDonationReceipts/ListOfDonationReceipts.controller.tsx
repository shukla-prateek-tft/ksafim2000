//MCFW-1323
import ListOfDonationReceiptsUI from './ListOfDonationReceipts.render';
import { GlobalLoader } from '@/components';

const ListOfDonationReceipts = () => {
  const handleSave = () => {
    // Your save logic...
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ListOfDonationReceiptsUI />
    </>
  );
};

export default ListOfDonationReceipts;
