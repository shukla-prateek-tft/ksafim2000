import React from 'react';
import styled from 'styled-components';
import { Button } from '../buttons';
import { useTranslation } from 'react-i18next';
const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  direction: ${props => (props.rtl ? 'rtl' : 'ltr')};
  background: rgb(211, 211, 211);
  padding: 2px 10px;
  height: fit-content;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
`;
const CurrentPage = styled.div`
  display: flex;
  direction: rtl;
  margin: 0px 2px;
  width: max-content;
  align-items: center;
  height: 30px;
  min-width: 20px;
  padding: 0px 5px;
  justify-content: space-around;
  background-color: #4e73df;
  color: white;
  font-weight: bold;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  .span {
    margin: 0 3px;
    font-size: 12px !important;
    font-weight: 500 !important;
  }
`;
const PageButton = styled(Button)`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  margin: 0px 2px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.active ? '#4e73df' : 'white')};
  color: ${props => (props.active ? 'white' : '#4e73df')};
  font-weight: bold;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  direction: ${props => (props.rtl ? 'rtl' : 'ltr')};
  &:hover {
    background: #4e73df;
    color: white;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Pagination = ({
  pagination,
  handlePaginationChange,
  rtl = false,
  showCurrentPage = true
}) => {
  const { pageNumber, totalPages, hasPreviousPage, hasNextPage } = pagination;
  const { t } = useTranslation('commonButtons');
  return (
    <>
      {pageNumber && (
        <PaginationContainer rtl={rtl}>
          <PageButton
            tooltip={t('U_ARROW_FIRST')}
            title={rtl ? '»' : '«'}
            disabled={pageNumber === 1 || !totalPages}
            onClick={() => handlePaginationChange(1)}
          />
          <PageButton
            tooltip={t('U_ARROW_PREV')}
            title={rtl ? '›' : '‹'}
            disabled={!hasPreviousPage}
            onClick={() => handlePaginationChange(pageNumber - 1)}
          />
          {showCurrentPage && (
            <CurrentPage>
              {!!(totalPages && pageNumber) && (
                <>
                  <span className="span">{pageNumber}</span>
                  <span className="span">{t('HEBREW_OF')}</span>
                  <span className="span">{totalPages}</span>
                </>
              )}
            </CurrentPage>
          )}

          <PageButton
            tooltip={t('U_ARROW_NEXT')}
            title={rtl ? '‹' : '›'}
            disabled={!hasNextPage}
            onClick={() => handlePaginationChange(pageNumber + 1)}
          />
          <PageButton
            tooltip={t('U_ARROW_LAST')}
            title={rtl ? '«' : '»'}
            disabled={pageNumber === totalPages || !hasNextPage}
            onClick={() => handlePaginationChange(totalPages)}
          />
        </PaginationContainer>
      )}
    </>
  );
};

export default Pagination;
