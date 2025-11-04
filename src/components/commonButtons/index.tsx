import { VscDebugStepOver } from 'react-icons/vsc';
import {
  FaCalculator,
  FaCheck,
  FaPlus,
  FaFileExcel,
  FaRegHandPointLeft,
  FaSearch
} from 'react-icons/fa';
import { MdOutlinePrint, MdOutlineQuestionMark } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useElementsExistOnEnter from '@/hooks/useElementsHook';
import { Button } from '../../ui/Button';
import { ButtonProps } from '../../ui/Button/Button';
import { DATEPICKER_MODAL_HIDE_CLASSNAME } from '@/constants/appConstant';
import { useAuth } from '@/hooks';
interface saveButtonProps extends ButtonProps {
  classNamesToCheck?: any;
  disableEnter?: boolean;
}
const BackToPageButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  const navigate = useNavigate();
  return (
    <Button
      scale="danger"
      variant="outline"
      renderIcon={<VscDebugStepOver size={15} />}
      onClick={() => (others?.onClick ? others?.onClick() : navigate(-1))}
      title={t('L_RETURN')}
      {...others}
    />
  );
};
const AddButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      scale="warning"
      variant="outline"
      title={t('L_ADD')}
      renderIcon={<FaPlus size={15} />}
      {...others}
    />
  );
};
const SaveButton = ({
  onClick,
  disabled,
  classNamesToCheck = [],
  disableEnter = false,
  ...others
}: saveButtonProps) => {
  const { t } = useTranslation('commonButtons');

  useElementsExistOnEnter([DATEPICKER_MODAL_HIDE_CLASSNAME, ...classNamesToCheck], () => {
    !disableEnter && onClick();
  });
  return (
    <Button
      scale="success"
      title={t('L_DO')}
      renderIcon={<FaCheck size={15} />}
      onClick={onClick}
      disabled={disabled}
      {...others}
    />
  );
};

const DetailButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      scale="primary"
      variant="outline"
      title={t('L_HELP')}
      renderIcon={<MdOutlineQuestionMark size={15} />}
      {...others}
    />
  );
};
const PrintButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      variant="outline"
      scale="primary"
      title={t('L_PRINT')}
      renderIcon={<MdOutlinePrint size={15} />}
      {...others}
    />
  );
};
const PrintExcel = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      variant="outline"
      scale="success"
      title={t('L_EXCEL')}
      renderIcon={<FaFileExcel size={15} />}
      {...others}
    />
  );
};
const OtherDetailButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  const { toggleFlags } = useAuth();
  const handleClick = () => {
    if (others?.onClick) {
      others?.onClick();
    } else {
      toggleFlags('goToScreen', true);
    }
  };
  return (
    <Button
      variant="outline"
      scale="primary"
      title={t('L_MOVETO')}
      renderIcon={<FaRegHandPointLeft size={15} />}
      onClick={handleClick}
      {...others}
    />
  );
};
const SearchButton = ({ onClick, ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      variant="outline"
      scale="warning"
      title={t('L_RETRIEVE')}
      renderIcon={<FaSearch size={15} />}
      onClick={e => {
        e.currentTarget.blur();
        onClick?.(e);
      }}
      {...others}
    />
  );
};
const CancelButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      variant="outline"
      scale="danger"
      title={t('L_DELETE')}
      renderIcon={<ImCross size={15} />}
      {...others}
    />
  );
};
const CalculatorButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      variant="outline"
      scale="primary"
      title={t('calculatorTooltip')}
      renderIcon={<FaCalculator size={15} />}
      {...others}
    />
  );
};
export {
  BackToPageButton,
  SaveButton,
  DetailButton,
  PrintButton,
  OtherDetailButton,
  AddButton,
  CancelButton,
  SearchButton,
  CalculatorButton,
  PrintExcel,
  Button
};
