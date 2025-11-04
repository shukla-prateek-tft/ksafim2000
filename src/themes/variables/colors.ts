import { Color } from '@/themes/types/scale';

export const exceptionColor = '#FF0000';
export const Colors = {
  // Primary Color Variants
  primary: '#0d3058',
  primaryLight: '#019dce', // lighter shade of primary
  slateBlue: '#8596AF',
  primaryTransparent:'#019ece2e',

  // Secondary Color Variants
  secondary: '#9e1e4e',
  secondaryLight: '#f1e2e9',
  secondaryDark: '#a71d50',
  secondaryTransparent:'#e198b5',

  // Background & Surface
  background: '#f7f7f7',
  surface: '#FFFFFF',

  // Semantic Colors
  success: '#3f6e20',
  successLight: '#7BAF5B',
  successDark: '#2E5217',
  successTransparent:'#ddfecf',

  danger: '#b84a4d',
  dangerLight: '#C76363',
  dangerDark: '#6E1E1E',
  dangerTransparent:'#fdd5d5',

  warning: '#dc6b01',
  warningLight: '#FF9933',
  warningDark: '#A94F00',
  warningTransparent:'#ffecc2',

  info: '#00ACC1',
  infoLight: '#33C9DA',
  infoDark: '#007A8A',
  infoTransparent:'#f4f7fc',

  // UI Utilities
  light: '#F1F1F1',
  dark: '#212121',
  inputBG: '#f1f4fb',
  overlay: 'rgba(0, 0, 0, 0.5)',
  border: '#E0E0E0',
  muted: '#6c757d',
  disabled: '#BDBDBD',
  placeholder: '#9E9E9E',

  // Accent and Link
  accent: '#FF4081',
  link: '#1E88E5',

  // Highlight and Focus
  highlight: '#FFE082',
  focus: '#2962FF',

  // Common Color Aliases
  black: '#000000',
  white: '#FFFFFF',
  tableHeader: '#00ADE13D',
  transparent: 'transparent'
} satisfies Record<string, Color>;
