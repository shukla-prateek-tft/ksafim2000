import React, { useMemo } from 'react';
import styles from './Pagination.module.scss';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { attachMultipleClasses } from '@/Languages';

interface PaginationProps {
  pagination: {
    pageNumber?: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  handlePaginationChange: (page: number) => void;
  rtl?: boolean;
  showCurrentPage?: boolean;
  maxMiddlePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination = { pageNumber: 1, totalPages: 10, hasPreviousPage: false, hasNextPage: false },
  handlePaginationChange,
  rtl = false,
  showCurrentPage = true,
  maxMiddlePages = 4,
}) => {
  const { pageNumber = 1, totalPages, hasPreviousPage, hasNextPage } = pagination;

  // Call all hooks upfront (never conditionally)
  const { t } = useTranslation('commonButtons');
  const { t: t2 } = useTranslation('pagination');

  const { middleStart, middleEnd, middlePages } = useMemo(() => {
    const half = Math.floor(maxMiddlePages / 2);
    let start = Math.max(3, pageNumber - half);
    let end = Math.min(totalPages - 2, pageNumber + half + (maxMiddlePages % 2 === 0 ? -1 : 0));

    // Adjust range so it always provides maxMiddlePages pages if possible
    const rangeLength = end - start + 1;
    if (rangeLength < maxMiddlePages) {
      if (start === 3) {
        end = Math.min(totalPages - 2, start + maxMiddlePages - 1);
      } else if (end === totalPages - 2) {
        start = Math.max(3, end - maxMiddlePages + 1);
      }
    }

    const pages = Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);

    return { middleStart: start, middleEnd: end, middlePages: pages };
  }, [pageNumber, totalPages, maxMiddlePages]);

  // Guard: Return nothing if pageNumber invalid AFTER hooks are called
  if (!pageNumber || totalPages < 2) return null; // hide pagination if only 1 page

  return (
    <div className={styles.paginationContainer} data-rtl={rtl}>
      {totalPages > 1 && (
        <>
          {/* Prev button */}
          <button
            className={styles.pageButton}
            disabled={!hasPreviousPage}
            onClick={() => handlePaginationChange(pageNumber - 1)}
            title={t('U_ARROW_PREV')}
          >
            {rtl ? <MdKeyboardArrowRight size={20} /> : <MdKeyboardArrowLeft size={20} />} {t2('return')}
          </button>

          {showCurrentPage && (
            <div className={styles.pageNumbers}>
              {/* First 2 pages */}
              {[1, 2]
                .filter((page) => page <= totalPages)
                .map((page) => (
                  <button
                    key={page}
                    className={attachMultipleClasses(styles.pageNumberBtn, pageNumber === page && styles.active)}
                    onClick={() => handlePaginationChange(page)}
                  >
                    {page}
                  </button>
                ))}

              {/* Left ellipsis */}
              {middleStart > 3 && <span className={styles.dots}>...</span>}

              {/* Middle dynamic pages */}
              {middlePages.map((page) => (
                <button
                  key={page}
                  className={attachMultipleClasses(styles.pageNumberBtn, pageNumber === page && styles.active)}
                  onClick={() => handlePaginationChange(page)}
                >
                  {page}
                </button>
              ))}

              {/* Right ellipsis */}
              {middleEnd < totalPages - 2 && <span className={styles.dots}>...</span>}

              {/* Last 2 pages (only render if they are not already part of [1,2]) */}
              {[totalPages - 1, totalPages]
                .filter((page) => page > 2)
                .map((page) => (
                  <button
                    key={page}
                    className={attachMultipleClasses(styles.pageNumberBtn, pageNumber === page && styles.active)}
                    onClick={() => handlePaginationChange(page)}
                  >
                    {page}
                  </button>
                ))}
            </div>
          )}

          {/* Next button */}
          <button
            className={styles.pageButton}
            disabled={!hasNextPage}
            onClick={() => handlePaginationChange(pageNumber + 1)}
            title={t('U_ARROW_NEXT')}
          >
            {t2('next')}
            {rtl ? <MdKeyboardArrowLeft size={20} /> : <MdKeyboardArrowRight size={20} />}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
