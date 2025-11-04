import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const danger = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.secondary,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.danger,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.surface,
  border: Colors.danger,
  borderHovered: Colors.danger,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.primary,
  buttonBackground: Colors.danger,
  buttonBackgroundHovered: Colors.dangerLight,
  buttonTextColor: Colors.white,
  badgeBackground: Colors.dangerTransparent,
  badgeText: Colors.danger,
  badgeBackgroundHovered: Colors.dangerTransparent,
  badgeTextHovered: Colors.danger,
  badgeBorder: Colors.danger
});
