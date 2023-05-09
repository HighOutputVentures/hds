export function useStyles(variant: 'group' | 'minimal' | 'relay') {
  if (variant === 'group') {
    return {
      group: buttonGroupStyles,
      select: selectStyles,
    };
  }

  if (variant === 'relay') {
    return {
      icon: iconStyles,
      legend: legendStyles,
      select: selectStyles,
      selectIcon: selectIconStyles,
      group: buttonGroupStyles,
    };
  }

  return {
    icon: iconStyles,
    legend: legendStyles,
    button({ isOutlined }: { isOutlined?: boolean } = {}) {
      return {
        color: 'neutrals.700',
        bgColor: 'white',
        fontWeight: 'medium',
        fontSize: '18px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        _hover: {},
        _focus: {},
        _active: {},
        _disabled: {},
        /*
         * outlined
         */
        ...(isOutlined && {
          border: '1px solid',
          borderColor: 'neutrals.300',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          borderRadius: '8px',
          padding: '10px 14px',
        }),
      };
    },
    pageControl({ isActive }: { isActive?: boolean }) {
      return {
        width: '40px',
        height: '40px',
        color: isActive ? 'neutrals.900' : 'neutrals.600',
        fontSize: '14px',
        lineHeight: '20px',
        bgColor: isActive ? 'neutrals.100' : 'white',
        _disabled: {
          cursor: 'not-allowed',
        },
        _hover: {},
        _focus: {},
        _active: {},
      };
    },
  };
}

const legendStyles = {
  color: 'neutrals.600',
  fontSize: '14px',
  linHeight: '20px',
  fontWeight: 'medium',
};

const iconStyles = {
  color: 'neutrals.600',
  width: '20px',
  height: '20px',
};

const selectStyles = {
  fontSize: '14px',
  height: '40px',
  width: 'full',
  color: '#525252!important',
  rounded: 'lg',
  border: '1px solid',
  borderColor: 'neutrals.300',
  paddingX: 2.5,
};

const selectIconStyles = {
  width: '14px!important',
  height: '14px!important',
  stroke: 'neutrals.600',
  strokeWidth: 2.5,
};

const buttonGroupStyles = {
  button: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'medium',
    rounded: '0px',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'neutrals.300',
    borderLeft: '1px solid',
    borderLeftColor: 'neutrals.200',
    color: 'neutrals.600',
    bgColor: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '40px',
    height: '40px',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 1,
    },
    _hover: {
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'neutrals.300',
      borderLeft: '1px solid',
      borderLeftColor: 'neutrals.200',
    },
    _focus: {},
    _active: {},
    _selected: {
      color: 'neutrals.900',
      bgColor: 'neutrals.100',
    },
    _first: {
      roundedLeft: '8px',
      borderLeft: '1px solid',
      borderColor: 'neutrals.300',
      _hover: {
        borderLeft: '1px solid',
        borderColor: 'neutrals.300',
      },
    },
    _last: {
      roundedRight: '8px',
      borderRight: '1px solid',
      borderColor: 'neutrals.300',
      _hover: {
        borderRight: '1px solid',
        borderColor: 'neutrals.300',
      },
    },
  },
  'button[data-freeflow]': {
    color: 'neutrals.700',
    width: 'unset',
    padding: '10px 16px',
  },
};
