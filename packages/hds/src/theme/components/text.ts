import { StyleConfig } from '@chakra-ui/react';

const labels = {
  'label-xl': {
    fontSize: '32px',
    lineHeight: '32px',
  },
  'label-lg': {
    fontSize: '28px',
    lineHeight: '28px',
  },
  'label-md': {
    fontSize: '20px',
    lineHeight: '20px',
  },
  'label-sm': {
    fontSize: '18px',
    lineHeight: '18px',
  },
  'label-xs': {
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  },
  'label-xxs': {
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em',
  },
};

const headings = {
  'header-1': {
    fontSize: '80px',
    fontWeight: 'bold',
    lineHeight: '88px',
    letterSpacing: '-0.02em',
  },
  'header-2': {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: '64px',
    letterSpacing: '-0.02em',
  },
  'header-3': {
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
  },
  'header-4': {
    fontSize: '32px',
    fontWeight: 'medium',
    lineHeight: '36px',
    letterSpacing: '-0.015em',
  },
  'header-5': {
    fontSize: '24px',
    fontWeight: 'medium',
    lineHeight: '28px',
    letterSpacing: '-0.015em',
  },
  'header-6': {
    fontSize: '20px',
    fontWeight: 'medium',
    lineHeight: '24px',
    letterSpacing: '-0.015em',
  },
};

const paragraphs__future = {
  'paragraph-xxl': {
    fontSize: '32px',
    lineHeight: '48px',
  },
  'paragraph-xl': {
    fontSize: '24px',
    lineHeight: '36px',
  },
  'paragraph-lg': {
    fontSize: '20px',
    lineHeight: '32px',
  },
  'paragraph-md': {
    fontSize: '18px',
    lineHeight: '28px',
  },
  'paragraph-sm': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
  },
  'paragraph-xs': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
  },
  'paragraph-xxs': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
  },
};

const paragraphs__legacy = Object.entries(paragraphs__future).reduce<Record<string, any>>(
  (obj, pair) => {
    const sfx = '-default';
    const key = pair[0] + sfx;
    const val = pair[1];

    return { ...obj, [key]: val };
  },
  {},
) as Record<`${keyof typeof paragraphs__future}-default`, any>;

export const Text: StyleConfig = {
  sizes: {
    ...labels,
    ...headings,
    ...paragraphs__future,
    ...paragraphs__legacy,
  },
  defaultProps: {
    size: 'paragraph-md',
  },
};
