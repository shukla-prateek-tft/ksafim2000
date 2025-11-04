import React, { createContext, ReactNode } from 'react';
import { ITheme, ThemeParams } from '@/themes/types/scale';
import { CustomTheme } from '@/themes';
import {
  extractBreakpoints,
  extractFont,
  extractIcons,
  extractPalette,
  extractRadii,
  extractShadows,
  extractSize,
  applyThemeDefaults,
  injectThemeCssVars,
  injectColorVars,
  extractWeight,
  getMargins,
  getPaddings,
  extractGaps
} from '@/themes/utils/scale';
import { getCurrentLanguage } from '@/Languages/i18n/i18';

const createTheme = (themeParams: ThemeParams): ITheme => {
  const lang = getCurrentLanguage(); // 'ar', 'en', etc.
  const params = applyThemeDefaults(themeParams);

  // Modify font values based on language
  if (lang === 'ar') {
    params.font = {
      ...params.font,
      baseSize: '1.063rem',
      weight: 400,
      family: ['Cairo', 'sans-serif']
    };
  }

  return {
    breakpoints: extractBreakpoints(params),
    font: extractFont(params),
    icons: extractIcons(params),
    scales: extractPalette(params),
    radii: extractRadii(params),
    shadows: extractShadows(params),
    size: extractSize(params),
    weight: extractWeight(params),
    paddings: getPaddings(params),
    margins: getMargins(params),
    gaps: extractGaps(params)
  };
};
export const theme = createTheme(CustomTheme);

const ThemeContext = createContext<{
  theme: ITheme;
}>({
  theme: theme
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  console.log('Theme123:', theme);
  React.useEffect(() => {
    injectThemeCssVars(theme);
    injectColorVars();
  }, []);
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
