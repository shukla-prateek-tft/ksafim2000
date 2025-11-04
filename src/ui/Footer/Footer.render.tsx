import { MetroPolinateIcon } from '@/assets';
import React, { ReactNode } from 'react';
import classes from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/Languages';
import { useTranslation } from 'react-i18next';
import Pagination from '@/ui/Pagination/Pagination';
import { CiPhone } from 'react-icons/ci';
import { FiPlayCircle } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { HiOutlineLink } from 'react-icons/hi2';
import { PaginationType } from '@/pages/type';

interface FooterUIProps {
  onClick?: () => void;
  icon?: ReactNode;
  title?: string;
  showPagination?: boolean;
  pagination?: PaginationType;
  showCurrentPage?: boolean;
  handlePaginationChange?: (page: number) => void;
}
const FooterUI: React.FC<FooterUIProps> = ({
  handlePaginationChange = () => {},
  showPagination = true,
  showCurrentPage = true,
  pagination = {
    pageNumber: undefined,
    totalPages: 0,
    hasPreviousPage: false,
    hasNextPage: false
  }
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation('footer');
  const RenderActionItem = ({ onClick, icon, title }: FooterUIProps) => {
    return (
      <div className={classes.actionItem} onClick={onClick}>
        <span className={classes.itemLogo}>{icon}</span>
        <span className={classes.itemTitle}>{title}</span>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.paginationContainer}>
        {!!showPagination && (
          <div>
            <Pagination
              showCurrentPage={showCurrentPage}
              rtl={true}
              pagination={pagination}
              handlePaginationChange={handlePaginationChange}
            />
          </div>
        )}
      </div>
      <div className={classes.actionContainer}>
        <div className={classes.actionContainer}>
          <RenderActionItem icon={<HiOutlineLink />} title={t('online')} />
          <RenderActionItem icon={<IoMailOutline />} title={t('mail')} />
          <RenderActionItem icon={<FiPlayCircle />} title={t('video')} />
          <RenderActionItem icon={<CiPhone />} title={t('call')} />
          <RenderActionItem
            onClick={() => navigate(AppRoutes.REPORTING_INVOICES)}
            icon={<img src={MetroPolinateIcon} alt="Logo" className={classes.itemLogo} />}
            title={t('metropolinet')}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(FooterUI);
