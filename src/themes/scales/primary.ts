import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const primary = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.white,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.primary,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.surface,
  border: Colors.primaryLight,
  borderHovered: Colors.primary,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.primary,
  buttonBackground: Colors.primaryLight,
  buttonBackgroundHovered: Colors.primaryTransparent,
  buttonTextColor: Colors.white,
  badgeBackground:Colors.primaryTransparent,
  badgeText:Colors.secondary,
  badgeBackgroundHovered:Colors.primaryTransparent,
  badgeTextHovered:Colors.secondary,
  badgeBorder:Colors.secondary
});
