import { PaginationType } from '@/pages/type';
import styles from './BottomToolBar.module.scss';
import Pagination from '@/ui/Pagination/Pagination';
import React from 'react';

interface BottomToolBarProps {
  handlePaginationChange?: (page: number) => void;
  renderActionItems?: () => JSX.Element | null;
  showPagination?: boolean;
  pagination?: PaginationType;
  showCurrentPage?: boolean;
}

const BottomToolBar: React.FC<BottomToolBarProps> = ({
  handlePaginationChange = () => {},
  renderActionItems = () => null,
  showPagination = true,
  showCurrentPage = true,
  pagination = {
    pageNumber: 1,
    totalPages: 1,
    hasPreviousPage: false,
    hasNextPage: false
  }
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.actionContainer}>{renderActionItems()}</div>
      {!!showPagination && (
        <div className={styles.paginationContainer}>
          <Pagination
            showCurrentPage={showCurrentPage}
            rtl={true}
            maxMiddlePages={2}
            pagination={{
              pageNumber: pagination.pageNumber,
              totalPages: pagination.totalPages,
              hasPreviousPage: pagination.hasPreviousPage,
              hasNextPage: pagination.hasNextPage
            }}
            handlePaginationChange={handlePaginationChange}
          />
        </div>
      )}
    </div>
  );
};

export default BottomToolBar;
