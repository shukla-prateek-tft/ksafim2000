import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const secondary = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.white,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.secondary,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.surface,
  border: Colors.secondary,
  borderHovered: Colors.primary,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.primary,
  buttonBackground: Colors.secondary,
  buttonBackgroundHovered: Colors.secondaryLight,
  buttonTextColor: Colors.white,
  badgeBackground:Colors.secondaryTransparent,
  badgeText:Colors.secondary,
  badgeBackgroundHovered:Colors.secondaryTransparent,
  badgeTextHovered:Colors.secondary,
  badgeBorder:Colors.secondary
});
