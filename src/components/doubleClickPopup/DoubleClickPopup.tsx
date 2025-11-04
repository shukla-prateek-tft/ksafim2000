import { BackToPageButton, Button, SaveButton, SearchButton } from '../ui';
import { customRowRender } from './component/CustomRowRender';
import {
  StyledDialogBox,
  StyledToolBar,
  Container,
  FlexBox,
  StyledSmallInput,
  Fieldset,
  TableContainer
} from './styles';
import { useTranslation } from 'react-i18next';
interface DialogInputsData {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
}
interface paginationInterface {
  pageNumber?: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
interface DoubleClickPopupUIProps {
  HeaderTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  TableColumns?: Array<any>;
  TableData?: any;
  setSelectedSupplier?: any;
  selectedSuppliers?: any;
  handleDailogBoxSave?: () => void;
  dailogInputsData?: DialogInputsData;
  handleInputDailogChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showThirdInput?: boolean;
  handleDailogBoxClose: () => void;
  handleShowButton?: () => void;
  handlePagination?: (page: number) => void;
  pagination?: paginationInterface;
  selectedRowkey?: string;
  lablesArray?: any;
  maximumArray?: any;
  showFieldLabel?: boolean;
  isTypeAccCard?: boolean;
  disabledButton?: boolean;
}

const DoubleClickPopup = ({
  isOpen,
  onClose,
  HeaderTitle,
  TableColumns,
  TableData,
  setSelectedSupplier,
  selectedSuppliers,
  handleDailogBoxSave,
  dailogInputsData,
  handleInputDailogChange,
  showThirdInput = false,
  handleDailogBoxClose,
  handlePagination,
  pagination,
  selectedRowkey,
  handleShowButton,
  lablesArray,
  maximumArray,
  showFieldLabel,
  isTypeAccCard,
  disabledButton
}: DoubleClickPopupUIProps) => {
  const { t } = useTranslation('paymentSuppliersList');

  const handleSelectSupplier = (item: any) => {
    setSelectedSupplier(item);
  };

  const renderFooter = () => {
    return (
      <>
        <BackToPageButton onClick={handleDailogBoxClose} />
        <SaveButton
          onClick={handleDailogBoxSave}
          disabled={selectedSuppliers === null || disabledButton}
        />
        <SearchButton onClick={handleShowButton} />
      </>
    );
  };

  return (
    <StyledDialogBox
      title={HeaderTitle}
      style={{ zIndex: 10000000000000 }}
      isOpen={isOpen}
      onClose={handleDailogBoxClose}
    >
      <Container>
        <Fieldset>
          {showFieldLabel && <legend>{lablesArray?.[2]}</legend>}
          <FlexBox>
            <StyledSmallInput
              id={isTypeAccCard ? 'secondInput' : 'firstInput'}
              label={lablesArray?.[0]}
              defaultValue={
                isTypeAccCard ? dailogInputsData?.secondInput : dailogInputsData?.firstInput || ''
              }
              onBlur={handleInputDailogChange}
              maxLength={maximumArray?.[0]}
            />
            <StyledSmallInput
              id={!isTypeAccCard ? 'secondInput' : 'firstInput'}
              label={lablesArray?.[1]}
              defaultValue={
                !isTypeAccCard ? dailogInputsData?.secondInput : dailogInputsData?.firstInput || ''
              }
              onBlur={handleInputDailogChange}
              maxLength={maximumArray?.[1]}
            />
            <Button className="actionButton" title={t('show')} onClick={handleShowButton} />
          </FlexBox>
          {showThirdInput && (
            <StyledSmallInput
              id="thirdInput"
              label={lablesArray?.[2]}
              className="marginRight"
              defaultValue={dailogInputsData?.thirdInput || ''}
              onBlur={handleInputDailogChange}
              maxLength={maximumArray?.[2]}
            />
          )}

          <Fieldset>
            {showFieldLabel && <legend>{lablesArray?.[3]}</legend>}
            <TableContainer
              innerContainerClassName="main-table conatiner-dialog-table"
              data={TableData}
              columns={TableColumns}
              headersAlign="center"
              rowRenderer={row =>
                customRowRender({
                  row,
                  selected: selectedSuppliers,
                  handleSelect: handleSelectSupplier,
                  selectedRowkey: selectedRowkey,
                  handleDailogBoxSave: handleDailogBoxSave
                })
              }
            />
          </Fieldset>
        </Fieldset>
        <StyledToolBar
          renderActionItems={renderFooter}
          pagination={pagination}
          handlePaginationChange={handlePagination}
        />
      </Container>
    </StyledDialogBox>
  );
};

export default DoubleClickPopup;
