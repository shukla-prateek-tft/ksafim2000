import styles from './BottomToolBar.module.scss';
import { attachMultipleClasses } from '@/Languages';
import Pagination from './Pagination';
const ButtonStyle = {
  height: '35px',
  width: '35px',
  padding: '2px'
};
interface paginationInterface {
  pageNumber?: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
interface BottomToolBarProps {
  handlePaginationChange?: (page: number) => void;
  renderActionItems?: () => JSX.Element | null;
  showPagination?: boolean;
  className?: string;
  pagination?: paginationInterface;
  showCurrentPage?: boolean;
  paginationConatinerClassName?: string;
}

const BottomToolBar: React.FC<BottomToolBarProps> = ({
  handlePaginationChange,
  renderActionItems = () => null,
  showPagination = true,
  className,
  showCurrentPage = true,
  pagination = {
    pageNumber: null,
    pageSize: 10,
    totalPages: null,
    totalCount: 1,
    hasPreviousPage: false,
    hasNextPage: false
  },
  paginationConatinerClassName
}) => {
  return (
    <div className={attachMultipleClasses(styles.main, className)}>
      <div className={styles.actionContainer}>{renderActionItems()}</div>
      {!!showPagination && (
        <div
          className={attachMultipleClasses(
            styles.paginationContainer,
            paginationConatinerClassName
          )}
        >
          <Pagination
            showCurrentPage={showCurrentPage}
            rtl={true}
            pagination={pagination}
            handlePaginationChange={handlePaginationChange}
          />
        </div>
      )}
    </div>
  );
};

export default BottomToolBar;
