import { Color, ITheme, ThemeParams, VariationScale } from '@/themes/types/scale';
import * as colors from '@/themes/variables/colors';

export function createColorMapping(
  fallback: Color,
  partialScale: Partial<VariationScale>
): VariationScale {
  return {
    placeholder: fallback,
    placeholderColorActive: fallback,
    placeholderHovered: fallback,
    textColor: fallback,
    textColorActive: fallback,
    textColorHovered: fallback,
    background: fallback,
    backgroundActive: fallback,
    backgroundHovered: fallback,
    border: fallback,
    borderActive: fallback,
    borderHovered: fallback,
    inputBackground: fallback,
    inputBackgroundActive: fallback,
    inputBackgroundHovered: fallback,
    inputTextColor: fallback,
    badgeBackground: fallback,
    badgeText: fallback,
    badgeBackgroundHovered: fallback,
    badgeTextHovered: fallback,
    badgeBorder: fallback,
    ...partialScale
  };
}

export function applyThemeDefaults(params: ThemeParams): DeepRequired<ThemeParams> {
  const {
    breakpoints = {
      desktop: 1352,
      desktopLg: 1504,
      desktopSm: 1124,
      desktopXl: 1800,
      desktopXs: 1024,
      mobile: 320,
      phablet: 500,
      tablet: 768
    },
    focusColor,
    font = {},
    icons = { huge: '64px', lg: '24px', md: '16px', sm: '12px', xl: '32px' },
    radii = {
      lg: '8px',
      md: '6px',
      oval: '200px',
      round: '100%',
      sm: '4px',
      xl: '12px'
    },
    scales,
    shadows = [
      '0px 2px 10px rgba(8, 19, 79, 0.07)',
      '0px 2px 12px rgba(8, 19, 79, 0.10)',
      '0px 3px 10px rgba(8, 19, 79, 0.16)',
      '1px 4px 12px rgba(8, 19, 79, 0.20)'
    ],
    paddings = {
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      huge: '32px'
    },
    margins = {
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      huge: '32px'
    },
    size = {},
    weight = {
      weights: {
        thin: '300',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '700'
      }
    },
    gaps = {
      sm: '5px',
      md: '10px',
      lg: '15px',
      huge: '20px',
      xl: '50%'
    }
  } = params;
  const {
    base = 4,
    scaling = { lg: 3, md: 2, sm: 1, xl: 4, xs: 0.5, xxl: 5, xxs: 0.25 },
    spacing = {
      '2xl': 10,
      '3xl': 12,
      lg: 6,
      md: 4,
      none: 0,
      sm: 3,
      xl: 8,
      xs: 2,
      xxs: 1
    }
  } = size;
  const {
    baseSize = '14px',
    family = ['Circular', 'sans-serif'],
    letterSpacing = '0px',
    lineHeight = 1.5,
    headings = {
      h1: '32px',
      h2: '24px',
      h3: '20px',
      h4: '18px',
      h5: '16px',
      h6: '14px'
    }
  } = font;

  return {
    breakpoints,
    focusColor,
    font: { baseSize, family, letterSpacing, lineHeight, headings },
    icons,
    radii,
    scales,
    shadows,
    paddings,
    margins,
    size: { base, scaling, spacing },
    weight,
    gaps
  };
}

type DeepRequired<Obj> = Required<{
  [k in keyof Obj]: DeepRequired<Obj[k]>;
}>;

export type ColorVariant =
  | 'base'
  | 'danger'
  | 'disabled'
  | 'primary'
  | 'success'
  | 'warning'
  | 'secondary';

function getThemeScales(
  scales: DeepRequired<ThemeParams>['scales']
): Record<ColorVariant, VariationScale> {
  return {
    base: scales.base,
    primary: scales.primary,
    disabled: scales.disabled,
    success: scales.success,
    warning: scales.warning,
    danger: scales.danger,
    secondary: scales.secondary
  };
}

export const extractPalette = (params: ReturnType<typeof applyThemeDefaults>) =>
  getThemeScales(params.scales);

export const extractFont = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.font
});

export const extractSize = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.size
});
export const extractWeight = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.weight
});

export const extractShadows = (params: ReturnType<typeof applyThemeDefaults>) => [
  ...params.shadows
];

export const extractBreakpoints = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.breakpoints
});

export const extractRadii = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.radii
});

export const extractIcons = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.icons
});
export const getPaddings = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.paddings
});
export const getMargins = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.margins
});
export const extractGaps = (params: ReturnType<typeof applyThemeDefaults>) => ({
  ...params.gaps
});
/**
 * Injects theme color scales as CSS variables on the document root.
 * Call this in your ThemeProvider or at app startup.
 */
export function injectThemeCssVars(theme: ITheme) {
  const root = document.documentElement;
  // Loop through all color variants (scales)
  Object.entries(theme.scales).forEach(([scaleName, scaleObj]) => {
    Object.entries(scaleObj).forEach(([key, value]) => {
      // e.g. --base-interactiveText: #222;
      root.style.setProperty(`--${scaleName}-${key}`, value);
    });
  });
  // Inject radii
  if (theme.radii) {
    Object.entries(theme.radii).forEach(([key, value]) => {
      root.style.setProperty(`--radii-${key}`, value);
    });
  }

  if (theme.font) {
    Object.entries(theme.font).forEach(([key, value]) => {
      if (key === 'headings' && typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([hKey, hValue]) => {
          root.style.setProperty(`--font-headings-${hKey}`, String(hValue));
        });
      } else {
        root.style.setProperty(
          `--font-${key}`,
          Array.isArray(value) ? value.join(', ') : String(value)
        );
      }
    });
  }

  //inject breakpoints
  if (theme.breakpoints) {
    Object.entries(theme.breakpoints).forEach(([key, value]) => {
      root.style.setProperty(`--breakpoint-${key}`, `${value}px`);
    });
  }

  //inject shadows
  if (theme.shadows) {
    theme.shadows.forEach((shadow, index) => {
      root.style.setProperty(`--shadow-${index}`, shadow);
    });
  }
  //inject icons
  if (theme.icons) {
    Object.entries(theme.icons).forEach(([key, value]) => {
      root.style.setProperty(`--icon-${key}`, value);
    });
  }
  //inject padding
  if (theme.paddings) {
    Object.entries(theme.paddings).forEach(([key, value]) => {
      root.style.setProperty(`--padding-scaling-${key}`, value);
    });
  }
  //inject margin
  if (theme.margins) {
    Object.entries(theme.margins).forEach(([key, value]) => {
      root.style.setProperty(`--margin-scaling-${key}`, value);
    });
  }
  //inject gaps
  if (theme.gaps) {
    Object.entries(theme.gaps).forEach(([key, value]) => {
      root.style.setProperty(`--gap-scaling-${key}`, value);
    });
  }
  //inject size
  if (theme.size) {
    Object.entries(theme.size).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--size-${key}-${subKey}`, `${subValue}`);
        });
      } else {
        root.style.setProperty(`--size-${key}`, `${value}`);
      }
    });
  }
  // inject weights
  if (theme.weight.weights) {
    Object.entries(theme.weight.weights).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, String(value));
    });
  }
}

export function injectColorVars() {
  const root = document.documentElement;
  const colorScales: Array<keyof typeof colors> = [
    'greens',
    'blues',
    'whites',
    'grays',
    'reds',
    'purples',
    'yellows'
  ];
  colorScales.forEach(scale => {
    const scaleObj = (colors as unknown as Record<string, Record<string, string>>)[scale];
    if (scaleObj) {
      Object.entries(scaleObj).forEach(([step, value]) => {
        root.style.setProperty(`--${scale}-${step}`, value);
      });
    }
  });
}
