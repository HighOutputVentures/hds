export const Tabs = {
  parts: ['tab', 'tabpanel', 'tablist'],
  baseStyle: {
    root: { w: 'full', mt: 6 },
    tab: {
      fontWeight: '500',
      color: 'gray.500',
      orientation: {
        vertical: {
          tab: {
            w: '142px',
          },
        },
      },
    },
  },
  sizes: {
    sm: {
      tab: {
        w: 'auto',
        height: '30px',
      },
    },
    md: {
      tab: {
        minW: '249px',
        height: '34px',
      },
    },
  },
  variants: {
    primary: {
      tab: {
        _selected: {
          borderRadius: '6px',
          color: 'brand.primary.700',
          backgroundColor: 'brand.primary.500',
        },
        color: 'neutrals.600',
        padding: '8px 12px',
        _focus: { boxShadow: 'none' },
        marginBottom: '-2px',
      },
      tablist: { borderBottom: '0px' },
    },
    filled: {
      tab: {
        _selected: {
          color: 'neutrals.800',
          backgroundColor: 'alpha.white.500',
          fontWeight: 'semibold',
          borderRadius: '6px',
          boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          _focus: {
            boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          },
        },
        padding: '8px 12px',
      },
      tablist: {
        padding: '6px',
        backgroundColor: 'neutrals.100',
        borderRadius: '8px',
        border: '1px solid #F2F4F7',
      },
    },
    plain: {
      tab: {
        _selected: {
          color: 'neutrals.800',
          backgroundColor: 'neutrals.100',
          fontWeight: 'semibold',
          borderRadius: '6px',
        },
        padding: '8px 12px',
      },
      tablist: { borderBottom: '0px' },
    },
    underlined: {
      tab: {
        _selected: {
          color: 'brand.primary.700',
          borderBottom: '2px solid',
          borderBottomColor: 'brand.primary.700',
        },
        padding: '1px 4px 19px 4px',
        borderBottom: '2px',
        borderBottomColor: 'transparent',
      },
      tablist: {
        borderBottom: '1px solid',
        borderBottomColor: 'neutrals.200',
        paddingBottom: '3px',
      },
    },
    'solid-underlined': {
      tab: {
        _selected: {
          color: 'brand.primary.700',
          backgroundColor: 'brand.primary.500',
          borderBottom: '2px solid',
          borderBottomColor: 'brand.primary.700',
        },
        padding: '12px',
        borderBottom: '2px solid',
        borderBottomColor: 'transparent',
      },
      tablist: {
        borderBottom: '1px solid',
        borderBottomColor: 'neutrals.200',
        paddingBottom: '3px',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'sm',
  },
};

export default Tabs;
