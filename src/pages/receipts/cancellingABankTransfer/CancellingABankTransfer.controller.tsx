// MCFW-1179
import React, { useEffect } from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CancellingABankTransferUI from './CancellingABankTransfer.render';
import classes from './CancellingABankTransfer.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import {
  CancellingABankTransferFilterType,
  getCancellingBankTransferListResponse,
  GridRowType,
  PerformCancelBankTransferResponse
} from './types';
import { adminServices } from '@/services';
import { useApiQuery } from '@/hooks';
import { ServiceFn } from '../type';
import { GetCancellingBankTransferListPayloadType } from '@/services/receipt/types';
const CancellingABankTransfer = () => {
  const [filter, setFilter] = useState<CancellingABankTransferFilterType>({});
  const [gridData, setGridData] = useState<GridRowType[]>([]);
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    state: { data: getCancellingBankTransferListResponse },
    callService: getCancellingBankTransferListService
  } = useApiQuery(
    adminServices.receipt
      .getCancellingBankTransferList as ServiceFn<GetCancellingBankTransferListPayloadType>
  );

  const {
    state: {
      data: PerformCancelBankTransferResponse,
      loading: PerformCancelBankTransferLoading,
      isSuccess: isPerformCancelBankTransferSuccess,
      isError: isPerformCancelBankTransferError,
      error: PerformCancelBankTransferError
    },
    callService: onPerformCancelBankTransfer
  } = useApiQuery<PerformCancelBankTransferResponse, PerformCancelBankTransferPayloadType>(
    adminServices.receipt
      .PerformCancelBankTransfer as ServiceFn<PerformCancelBankTransferPayloadType>
  );

  useEffect(() => {
    if (isPerformCancelBankTransferSuccess && PerformCancelBankTransferResponse) {
      toast.success('1805 - שמירה בוצעה בהצלחה (MCFW1179:מסך)'); //currently flow is not clear it take us to other print screen
    }

    if (isPerformCancelBankTransferError && PerformCancelBankTransferError) {
      showToastErrors(PerformCancelBankTransferError);
    }
  }, [
    isPerformCancelBankTransferSuccess,
    PerformCancelBankTransferResponse,
    isPerformCancelBankTransferError,
    PerformCancelBankTransferError
  ]);

  useEffect(() => {
    getCancellingBankTransferListService({
      SystemYear: 2024,
      Institution: 114348,
      Receipt_No: 00015,
      Pay_way: 15
    });
  }, []);

  useEffect(() => {
    if (getCancellingBankTransferListResponse?.data?.data[0]?.grid) {
      setGridData(getCancellingBankTransferListResponse.data.data[0].grid);
    }
  }, [getCancellingBankTransferListResponse]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    getCancellingBankTransferListService({
      SystemYear: user?.instiYear, //replace with actual value
      Institution: user?.instiCode, //replace with actual value
      Receipt_No: 15, //replace with actual value
      Pay_way: 15, //replace with actual value
      Page: page,
      Size: '1',
      SortColumn: '',
      SortType: ''
    });
  };

  const onFilterChange = (
    id: keyof CancellingABankTransferFilterType,
    value: string | number | Date | undefined
  ) => {
    setFilter({ ...filter, [id]: value });
  };

  const onGridChange = (
    rowIndex: number,
    key: keyof GridRowType,
    value: GridRowType[keyof GridRowType]
  ) => {
    setGridData(prevGrid => {
      const updatedGrid = [...prevGrid];
      if (!updatedGrid[rowIndex]) return prevGrid;
      updatedGrid[rowIndex] = { ...updatedGrid[rowIndex], [key]: value };
      return updatedGrid;
    });
  };

  const handleSave = () => {
    const originalData = {
      ...(getCancellingBankTransferListResponse?.data?.data?.[0] || {})
    };

    originalData.grid = gridData;

    const payload: PerformCancelBankTransferPayloadType = {
      systemYear: user?.instiYear || 2024,
      institutionCode: user?.instiCode || 114348,
      cancellingBankTransferCommandDtos: [
        {
          ...originalData,
          ...filter
        }
      ],
      ledger_Split: false, //its a configurable file we have to store it somewhere for time being its kept false
      cancelInvoice: false
    };
    console.log(payload);
    //before calling we have to show popup for this cancel invoice true or false then accordingly we have to set the value and call the api
    // onPerformCancelBankTransfer(payload);
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton onClick={handleSave} />
      </div>
    );
  };
  return (
    <DialogBox isOpen title="MCFW-1179" onClose={() => {}}>
      <CancellingABankTransferUI
        getCancellingBankTransferListResponseData={getCancellingBankTransferListResponse?.data}
        renderActionItems={renderActionItems}
        filter={filter}
        onFilterChange={onFilterChange}
        gridData={gridData}
        pagination={getCancellingBankTransferListResponse?.metaInfo}
        onGridChange={onGridChange}
      />
    </DialogBox>
  );
};

export default CancellingABankTransfer;
