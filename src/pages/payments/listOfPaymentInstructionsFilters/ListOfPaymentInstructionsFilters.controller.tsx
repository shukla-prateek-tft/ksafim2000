// MCFS-1327
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import ListOfPaymentInstructionsFiltersUI from './ListOfPaymentInstructionsFilters.render';
const ListOfPaymentInstructionsFilters = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
      </>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS-1327">
      <ListOfPaymentInstructionsFiltersUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ListOfPaymentInstructionsFilters;
