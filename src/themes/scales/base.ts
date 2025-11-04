import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const base = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.secondary,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.primary,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.surface,
  border: Colors.slateBlue,
  borderHovered: Colors.primary,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.secondary,
  buttonBackground: Colors.secondary,
  buttonBackgroundHovered: Colors.primary,
  buttonTextColor: Colors.white,
  badgeBackground: Colors.infoTransparent,
  badgeText: Colors.primary,
  badgeBackgroundHovered: Colors.infoTransparent,
  badgeTextHovered: Colors.primary,
  badgeBorder: Colors.primary
});
