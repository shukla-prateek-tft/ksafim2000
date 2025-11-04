//MCFL-0019
import { BackToPageButton, SaveButton, SearchButton } from '@/components/commonButtons';
import CentralizedChargeCorrectionUI from './CentralizedChargeCorrection.render';
import { DialogBox, GlobalLoader } from '@/components';
import classes from './CentralizedChargeCorrection.module.scss';

const CentralizedChargeCorrection = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton tabIndex={1} />
        <SaveButton tabIndex={2}/>
        <SearchButton tabIndex={3} />
      </div>
    );
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <DialogBox isOpen onClose={() => {}} title="MCFL-0019">
        <CentralizedChargeCorrectionUI renderActionItems={renderActionItems} />
      </DialogBox>
    </>
  );
};

export default CentralizedChargeCorrection;
