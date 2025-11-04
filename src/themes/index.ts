import * as internalColors from '@/themes/variables/colors';
import * as scales from '@/themes/scales';
import { ThemeParams } from './types/scale';

export const CustomTheme: ThemeParams = {
  breakpoints: {
    desktop: 1300,
    desktopLg: 1500,
    desktopSm: 1124,
    desktopXl: 1800,
    desktopXs: 1024,
    mobile: 320,
    phablet: 500,
    tablet: 700
  },
  focusColor: internalColors.Colors.focus,
  font: {
    baseSize: '11px',
    weight: 500
  },
  scales,
  paddings: {
    sm: '2px 4px',
    md: '4px 8px',
    lg: '6px 12px',
    xl: '8px 16px',
    huge: '10px 20px'
  },
  margins: {
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    huge: '10px'
  },
  size: {},
  weight: {
    base: 500,
    weights: {
      light: 200,
      thin: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 700
    }
  },
  gaps: {
    sm: '5px',
    md: '10px',
    lg: '15px',
    huge: '20px',
    xl: '50%'
  },
  icons: { huge: '64px', lg: '24px', md: '16px', sm: '12px', xl: '32px' },
  radii: {
    lg: '8px',
    md: '6px',
    oval: '200px',
    round: '100%',
    sm: '4px',
    xl: '12px'
  },
  shadows: [
    '0px 2px 10px rgba(8, 19, 79, 0.07)',
    '0px 2px 12px rgba(8, 19, 79, 0.10)',
    '0px 3px 10px rgba(8, 19, 79, 0.16)',
    '1px 4px 12px rgba(8, 19, 79, 0.20)'
  ]
};
