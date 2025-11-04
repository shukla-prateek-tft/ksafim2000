type Color = CurrentColor | Hex | HSL | HSLA | RGB | RGBA | Transparent;
type CurrentColor = 'currentColor';
type Hex = `#${string}`;
type HSL = `hsl(${number}deg, ${number}%, ${number}%)`;
type HSLA = `hsla(${number}deg, ${number}%, ${number}%, ${number})`;
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type Transparent = 'transparent';

interface VariationScale {
  placeholder: Color;
  placeholderColorActive: Color;
  placeholderHovered: Color;
  textColor: Color;
  textColorActive: Color;
  textColorHovered: Color;
  background: Color;
  backgroundActive: Color;
  backgroundHovered: Color;
  border: Color;
  borderActive: Color;
  borderHovered: Color;
  inputBackground: Color;
  inputBackgroundActive: Color;
  inputBackgroundHovered: Color;
  inputTextColor: Color;
  buttonBackground: Color;
  buttonBackgroundHovered: Color;
  buttonTextColor: Color;
  badgeBackground: Color;
  badgeText: Color;
  badgeBackgroundHovered: Color;
  badgeTextHovered: Color;
  badgeBorder: Color;
}

declare function createColorMapping(
  fallback: Color,
  partialScale: Partial<VariationScale>
): VariationScale;

type DynamicViewHeight = `${number}dvh`;
type DynamicViewWidth = `${number}dvw`;
type EM = `${number}em`;
type LineHeight = `${number}lh`;
type Percent = `${number}%`;
type Pixel = `${number}px`;
type REM = `${number}rem`;
type ViewHeight = `${number}vh`;
type ViewWidth = `${number}vw`;
type ColorVariant =
  | 'base'
  | 'danger'
  | 'disabled'
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning';

type Unit =
  | DynamicViewHeight
  | DynamicViewWidth
  | EM
  | LineHeight
  | Percent
  | Pixel
  | REM
  | ViewHeight
  | ViewWidth;

type DeepRequired<Obj> = Required<{
  [k in keyof Obj]: DeepRequired<Obj[k]>;
}>;

declare function paramsWithDefaults(params: ThemeParams): DeepRequired<ThemeParams>;

type Shadow =
  | `${Pixel} ${Pixel} ${Pixel} ${Color}`
  | `${Pixel} ${Pixel} ${Pixel} ${Pixel} ${Color}`;

declare const getShadows: (params: ReturnType<typeof paramsWithDefaults>) => Required<Shadow>[];
declare const getBreakpoints: (params: ReturnType<typeof paramsWithDefaults>) => {
  desktop: number;
  desktopLg: number;
  desktopSm: number;
  desktopXl: number;
  desktopXs: number;
  mobile: number;
  phablet: number;
  tablet: number;
};
declare const getRadii: (params: ReturnType<typeof paramsWithDefaults>) => {
  lg: Required<Unit>;
  md: Required<Unit>;
  oval: Required<Unit>;
  round: Required<Unit>;
  sm: Required<Unit>;
  xl: Required<Unit>;
};
declare const getIcons: (params: ReturnType<typeof paramsWithDefaults>) => {
  huge: Required<Unit>;
  lg: Required<Unit>;
  md: Required<Unit>;
  sm: Required<Unit>;
  xl: Required<Unit>;
};
declare const getTiming: (params: ReturnType<typeof paramsWithDefaults>) => {
  tooltip: Required<{
    delay?: Required<number | undefined>;
    skipDelay?: Required<number | undefined>;
  }>;
};

type HeadingFont = {
  h1: Pixel;
  h2: Pixel;
  h3: Pixel;
  h4: Pixel;
  h5: Pixel;
  h6: Pixel;
};

declare const getFont: (params: ReturnType<typeof paramsWithDefaults>) => {
  baseSize:
    | `${number}dvh`
    | `${number}dvw`
    | `${number}em`
    | `${number}lh`
    | `${number}%`
    | `${number}px`
    | `${number}rem`
    | `${number}vh`
    | `${number}vw`;
  family: string[];
  letterSpacing:
    | `${number}dvh`
    | `${number}dvw`
    | `${number}em`
    | `${number}lh`
    | `${number}%`
    | `${number}px`
    | `${number}rem`
    | `${number}vh`
    | `${number}vw`;
  lineHeight: number;
  headings?: HeadingFont;
};

declare const getSize: (params: ReturnType<typeof paramsWithDefaults>) => {
  base: number;
  scaling: Required<{
    lg: number;
    md: number;
    sm: number;
    xl: number;
    xs: number;
    xxl: number;
    xxs: number;
  }>;
  spacing: Required<{
    '2xl': number;
    '3xl': number;
    lg: number;
    md: number;
    none: number;
    sm: number;
    xl: number;
    xs: number;
    xxs: number;
  }>;
};
declare const getFontWeight: (params: ReturnType<typeof paramsWithDefaults>) => {
  base: number;
  weights: Required<{
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semiBold: number;
    bold: number;
  }>;
};
type SpacingValue =
  | Unit
  | `${Unit} ${Unit}`
  | `${Unit} ${Unit} ${Unit}`
  | `${Unit} ${Unit} ${Unit} ${Unit}`;

declare const getPaddings: (params: ReturnType<typeof paramsWithDefaults>) => {
  sm: SpacingValue;
  md: SpacingValue;
  lg: SpacingValue;
  xl: SpacingValue;
  huge: SpacingValue;
};
declare const getMargins: (params: ReturnType<typeof paramsWithDefaults>) => {
  sm: SpacingValue;
  md: SpacingValue;
  lg: SpacingValue;
  xl: SpacingValue;
  huge: SpacingValue;
};
declare const getPalette: (
  params: ReturnType<typeof paramsWithDefaults>
) => Record<ColorVariant, VariationScale>;
interface ITheme {
  breakpoints: ReturnType<typeof getBreakpoints>;
  font: ReturnType<typeof getFont>;
  icons: ReturnType<typeof getIcons>;
  scales: ReturnType<typeof getPalette>;
  radii: ReturnType<typeof getRadii>;
  shadows: ReturnType<typeof getShadows>;
  size: ReturnType<typeof getSize>;
  weight: ReturnType<typeof getFontWeight>;
  paddings: ReturnType<typeof getPaddings>;
  margins: ReturnType<typeof getMargins>;
  gaps: ReturnType<typeof getGaps>;
}
interface ThemeParams {
  breakpoints?: {
    desktop: number;
    desktopLg: number;
    desktopSm: number;
    desktopXl: number;
    desktopXs: number;
    mobile: number;
    phablet: number;
    tablet: number;
  };
  focusColor: Color;
  font?: {
    baseSize?: Unit;
    family?: string[];
    letterSpacing?: Unit;
    lineHeight?: number;
    headings?: HeadingFont;
    weight?: number;
  };
  icons?: {
    huge: Unit;
    lg: Unit;
    md: Unit;
    sm: Unit;
    xl: Unit;
  };
  radii?: {
    lg: Unit;
    md: Unit;
    oval: Unit;
    round: Unit;
    sm: Unit;
    xl: Unit;
  };
  paddings?: {
    sm: SpacingValue;
    md: SpacingValue;
    lg: SpacingValue;
    xl: SpacingValue;
    huge: SpacingValue;
  };
  margins?: {
    sm: SpacingValue;
    md: SpacingValue;
    lg: SpacingValue;
    xl: SpacingValue;
    huge: SpacingValue;
  };
  gaps?: {
    sm: Unit;
    md: Unit;
    lg: Unit;
    xl: Unit;
    huge: Unit;
  };
  scales: Record<ColorVariant, VariationScale>;
  shadows?: Shadow[];
  size?: {
    base?: number;
    scaling?: {
      lg: number;
      md: number;
      sm: number;
      xl: number;
      xs: number;
      xxl: number;
      xxs: number;
    };
    spacing?: {
      '2xl': number;
      '3xl': number;
      lg: number;
      md: number;
      none: number;
      sm: number;
      xl: number;
      xs: number;
      xxs: number;
    };
  };
  weight?: {
    base: number;
    weights: Required<{
      thin: number;
      light: number;
      normal: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
    }>;
  };
}
declare const getGaps: (params: ReturnType<typeof paramsWithDefaults>) => {
  sm: Unit;
  md: Unit;
  lg: Unit;
  xl: Unit;
  huge: Unit;
};

declare function createTheme(themeParams: ThemeParams): ITheme;

export type { ITheme, Color, ThemeParams, VariationScale, Unit };
export {
  createColorMapping,
  getBreakpoints,
  getIcons,
  getRadii,
  getShadows,
  getSize,
  getFont,
  getPalette,
  getTiming,
  paramsWithDefaults,
  createTheme,
  getPaddings,
  getMargins,
  getGaps
};
