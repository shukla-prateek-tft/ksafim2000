import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const success = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.secondary,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.success,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.success,
  border: Colors.success,
  borderHovered: Colors.success,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.success,
  buttonBackground: Colors.success,
  buttonBackgroundHovered: Colors.success,
  buttonTextColor: Colors.white,
  badgeBackground: Colors.successTransparent,
  badgeText: Colors.success,
  badgeBackgroundHovered: Colors.successTransparent,
  badgeTextHovered: Colors.success,
  badgeBorder: Colors.success
});
