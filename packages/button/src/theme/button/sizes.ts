export type ButtonSizeTypes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type CloseButtonSizeTypes =
  | 'button-close-sm'
  | 'button-close-md'
  | 'button-close-lg';

export const buttonSizes = {
  sm: {
    p: '8px 14px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em',
  },
  md: {
    p: '10px 16px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  },
  lg: {
    p: '10px 18px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
  },
  xl: {
    p: '12px 20px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px',
  },
  '2xl': {
    p: '16px 28px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
  },
  'button-close-sm': {
    width: '36px',
    height: '36px',
  },
  'button-close-md': {
    width: '40px',
    height: '40px',
  },
  'button-close-lg': {
    width: '44px',
    height: '44px',
  },
};
