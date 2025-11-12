//MCFS-0600
import React, { useCallback, useEffect, useState } from 'react';
import ListOfSuppliersFiltersUI from './ListOfSuppliersFilters.render';
import classes from './ListOfSuppliersFilters.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import { padWithZeros } from '@/utils/commonHelper';
import { NumericFieldName, SupplierFiltersForm } from './type';

const ListOfSuppliersFilters = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [title, setTitle] = useState('');
  const [isSuppNumDealerAndVatHide, setIsSuppNumDealerAndVatHide] = useState(false);
  const [formData, setFormData] = useState<SupplierFiltersForm>({
    supp_num: null,
    supp_name: '',
    acc_card: null,
    supp_off: false,
    supp_num_dealer: null,
    supp_vat_num: null
  });
  const [selectItems, setSelectItems] = useState('');
  console.log('selectItems', selectItems);

  useEffect(() => {
    // call the gp_trg_execute function to get the title of the screen, use title state for this
    setTitle('Faizan');
    // Call gp_getparam("work_with_licence_vat_supp",$licence_vat_supp$)

    let licence_vat_supp = 2; // this value will come from above API, for now it is hardcoded
    setIsSuppNumDealerAndVatHide(licence_vat_supp !== 1);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName?: keyof SupplierFiltersForm) => {
      const { value, type, checked } = e.target;

      if (!fieldName) return;

      setFormData(prevState => ({
        ...prevState,
        [fieldName]: type === 'checkbox' ? checked : value
      }));
    },
    []
  );

  const handleNumberBlur = useCallback((fieldName: NumericFieldName) => {
    setFormData(prev => {
      const padded = padWithZeros(prev[fieldName], 10);
      return { ...prev, [fieldName]: padded };
    });
  }, []);

  const handleSave = useCallback(() => {
    const { supp_num_dealer, supp_vat_num, supp_name, supp_num, acc_card, supp_off } = formData;

    const filterData: string[] = [
      `supp_name=${supp_name ?? ''}`,
      `supp_num=${supp_num ? Number(supp_num) : null}`,
      `acc_card=${acc_card ? Number(acc_card) : null}`,
      `supp_off=${supp_off ?? false}`
    ];

    if (!isSuppNumDealerAndVatHide) {
      filterData.unshift(
        `supp_num_dealer=${supp_num_dealer ? Number(supp_num_dealer) : null}`,
        `supp_vat_num=${supp_vat_num ? Number(supp_vat_num) : null}`
      );
    }

    const filterDataString = filterData.join('\n');

    // An API will call with this filter
    setSelectItems(filterDataString);
  }, [formData, selectItems, isSuppNumDealerAndVatHide]);

  function handleClose() {
    setSelectItems('');
    setFormData({
      supp_num: null,
      supp_name: '',
      acc_card: null,
      supp_off: false,
      supp_num_dealer: null,
      supp_vat_num: null
    });
    onClose();
  }

  function handleDetail() {
    // handle details which will be a PDF and same for all screens
  }

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={handleClose} />
        <DetailButton onClick={handleDetail} />
        <SaveButton onClick={handleSave} />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title={title}>
      <ListOfSuppliersFiltersUI
        renderActionItems={renderActionItems}
        isSuppNumDealerAndVatHide={isSuppNumDealerAndVatHide}
        formData={formData}
        handleChange={handleChange}
        handleNumberBlur={handleNumberBlur}
      />
    </DialogBox>
  );
};

export default ListOfSuppliersFilters;
