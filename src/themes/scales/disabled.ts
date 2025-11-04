import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const disabled = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.secondary,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.disabled,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.surface,
  border: Colors.disabled,
  borderHovered: Colors.disabled,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.disabled,
  buttonBackground: Colors.disabled,
  buttonBackgroundHovered: Colors.disabled,
  buttonTextColor: Colors.white,
  badgeBackground:Colors.disabled,
  badgeText:Colors.secondary,
  badgeBackgroundHovered:Colors.disabled,
  badgeTextHovered:Colors.secondary,
  badgeBorder:Colors.disabled
});
