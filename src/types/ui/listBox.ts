export type ListBoxScale =
  | 'base'
  | 'success'
  | 'warning'
  | 'danger'
  | 'primary'
  | 'disabled'
  | 'secondary';
export type ListBoxOrientation = 'vertical' | 'horizontal';
export type ListBoxSizes = 'sm' | 'md' | 'lg' | 'fullWidth';
export type ListBoxVariants = 'filled' | 'outlined' | 'standard' | 'borderless';

export type Option = {
  label: string;
  value: string;
};
