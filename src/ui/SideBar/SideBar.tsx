import { motion } from 'framer-motion';
import classes from './SideBar.module.scss';
import { TiThMenu } from 'react-icons/ti';
import React, { ReactNode } from 'react';
import { attachMultipleClasses } from '@/Languages';
import { useTranslation } from 'react-i18next';
import {
  MdAccountBalance,
  MdInbox,
  MdLocalPlay,
  MdOutlineBuild,
  MdOutlineCreditCard,
  MdOutlineHelpOutline,
  MdOutlineInsertDriveFile,
  MdOutlineLayers,
  MdOutlinePeopleOutline,
  MdOutlineReceipt,
  MdToll
} from 'react-icons/md';
import { MainIcon_Municipal, MainIcon_Parent } from '@/assets';
import { useAuth } from '@/hooks';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SideBarItemData {
  title: string;
  icon?: ReactNode;
  onSelect?: () => void;
  selected?: boolean;
}

const sideBarItems: SideBarItemData[] = [
  {
    title: 'V_FILE',
    icon: <MdOutlineInsertDriveFile size={20} className={classes.actionItemIcon} />
  },
  { title: 'L_RECEIPTS', icon: <MdToll size={20} className={classes.actionItemIcon} /> },
  {
    title: 'L_PAY_NUM',
    icon: <MdOutlineCreditCard size={20} className={classes.actionItemIcon} />
  },
  { title: 'T_MCFW1330', icon: <MdLocalPlay size={20} className={classes.actionItemIcon} /> },
  { title: 'L_BANK_S', icon: <MdAccountBalance size={20} className={classes.actionItemIcon} /> },
  { title: 'T_SMALL_PURSE', icon: <MdInbox size={20} className={classes.actionItemIcon} /> },
  { title: 'T_INVENTORY', icon: <MdOutlineLayers size={20} className={classes.actionItemIcon} /> },
  {
    title: 'T_NATIONAL_ACCOUNT_OFFICE',
    icon: <MdOutlineReceipt size={20} className={classes.actionItemIcon} />
  },
  {
    title: 'V_STUDENTS',
    icon: <MdOutlinePeopleOutline size={20} className={classes.actionItemIcon} />
  },
  { title: 'T_MAINTENANCE', icon: <MdOutlineBuild size={20} className={classes.actionItemIcon} /> },
  {
    title: 'L_GEN_GRADE',
    icon: <MdOutlineHelpOutline size={20} className={classes.actionItemIcon} />
  }
];

const SideBarItem = ({
  title,
  icon,
  isOpen,
  onSelect,
  selected
}: SideBarItemData & { isOpen: boolean }) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={attachMultipleClasses(
        classes.actionItem,
        isOpen && classes.openActionItem,
        selected && classes.selected
      )}
      onClick={onSelect}
    >
      {icon}
      <span className={classes.actionItemTitle}>{t(title)}</span>
    </div>
  );
};

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const { isMunicipality } = useAuth();
  const uiScale = isMunicipality ? 'primary' : 'secondary';
  const [selectedItem, setSelectedItem] = React.useState<number | null>(0);
  return (
    <motion.div
      animate={{ width: isOpen ? '10vw' : '6vw' }}
      className={attachMultipleClasses(classes.sideBarContainer, classes[`scale-${uiScale}`])}
    >
      <div className={classes.menuContainer}>
        <img
          src={isMunicipality ? MainIcon_Municipal : MainIcon_Parent}
          className={classes.menuIcon}
          onClick={() => setIsOpen(prev => !prev)}
        />
      </div>
      <div className={classes.renderContainer}>
        {sideBarItems.map((item, index) => (
          <SideBarItem
            selected={selectedItem === index}
            key={item.title}
            {...item}
            isOpen={isOpen}
            onSelect={() => setSelectedItem(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
