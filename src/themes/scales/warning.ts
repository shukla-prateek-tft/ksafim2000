import { createColorMapping } from '@/themes/utils/scale';
import { exceptionColor, Colors } from '@/themes/variables/colors';

export const warning = createColorMapping(exceptionColor, {
  placeholder: Colors.placeholder,
  textColor: Colors.secondary,
  textColorActive: Colors.secondaryDark,
  textColorHovered: Colors.secondaryLight,
  background: Colors.warning,
  backgroundActive: Colors.background,
  backgroundHovered: Colors.warning,
  border: Colors.warning,
  borderHovered: Colors.warning,
  inputBackground: Colors.transparent,
  inputBackgroundActive: Colors.inputBG,
  inputBackgroundHovered: Colors.inputBG,
  inputTextColor: Colors.warning,
  buttonBackground: Colors.warning,
  buttonBackgroundHovered: Colors.warning,
  buttonTextColor: Colors.white,
  badgeBackground:Colors.warningTransparent,
  badgeText:Colors.warning,
  badgeBackgroundHovered:Colors.warningTransparent,
  badgeTextHovered:Colors.warning,
  badgeBorder:Colors.warning
});
