import Button, { ButtonProps } from './Button';
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
import { DATEPICKER_MODAL_HIDE_CLASSNAME } from '@/constants/appConstant';
const ButtonStyle = {
  height: '35px',
  width: '35px',
  padding: '2px',
  margin: '0px 4px'
};
const BackToPageButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  const navigate = useNavigate();
  return (
    <Button
      style={ButtonStyle}
      renderIcon={() => <VscDebugStepOver size={20} color="red" />}
      onClick={() => (others?.onClick ? others?.onClick() : navigate(-1))}
      tooltip={t('L_RETURN')}
      {...others}
    />
  );
};
const AddButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('L_ADD')}
      renderIcon={() => <FaPlus size={20} color="rgb(253,213,27)" />}
      {...others}
    />
  );
};
const SaveButton = ({
  onClick,
  disabled,
  loading,
  classNamesToCheck = [],
  disableEnter = false,
  ...others
}: ButtonProps) => {
  const { t } = useTranslation('common');

  useElementsExistOnEnter(
    [DATEPICKER_MODAL_HIDE_CLASSNAME, ...classNamesToCheck],
    () => {
      !(disableEnter||disabled) && onClick();
    }
  );
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('L_CONFIRMATION')}
      renderIcon={() => <FaCheck size={20} color="green" />}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      {...others}
    />
  );
};

const DetailButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('L_HELP')}
      renderIcon={() => <MdOutlineQuestionMark size={20} color="rgb(253,213,27)" />}
      {...others}
    />
  );
};
const PrintButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('L_PRINT')}
      renderIcon={() => <MdOutlinePrint size={20} color="red" />}
      {...others}
    />
  );
};
const PrintExcel = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      tooltip={t('L_EXCEL')}
      style={ButtonStyle}
      renderIcon={() => <FaFileExcel size={20} color="green" />}
      {...others}
    />
  );
};
const OtherDetailButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('L_MOVETO')}
      renderIcon={() => <FaRegHandPointLeft size={20} color="white" />}
      {...others}
    />
  );
};
const SearchButton = ({ onClick, ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('L_RETRIEVE')}
      renderIcon={() => <FaSearch size={20} color="orange" />}
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
      style={ButtonStyle}
      tooltip={t('L_DELETE')}
      renderIcon={() => <ImCross size={15} color="red" />}
      {...others}
    />
  );
};
const CalculatorButton = ({ ...others }: ButtonProps) => {
  const { t } = useTranslation('commonButtons');
  return (
    <Button
      style={ButtonStyle}
      tooltip={t('calculatorTooltip')}
      renderIcon={() => <FaCalculator size={15} color="green" />}
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
  PrintExcel
};
