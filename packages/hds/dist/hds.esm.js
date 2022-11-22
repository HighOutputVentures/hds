import { Button as Button$2, Icon, IconButton, extendTheme as extendTheme$1, ChakraProvider } from '@chakra-ui/react';
export { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertDescription, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon, AlertTitle, AspectRatio, Avatar, AvatarBadge, AvatarGroup, Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, ButtonGroup, ButtonSpinner, Center, Checkbox, CheckboxGroup, CheckboxIcon, Circle, CircularProgress, CircularProgressLabel, Collapse, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Fade, Flex, FormControl, FormErrorIcon, FormErrorMessage, FormHelperText, FormLabel, GlobalStyle, Grid, GridItem, HStack, Heading, Hide, Icon, IconButton, Image, Img, Input, InputAddon, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Kbd, LightMode, Link, LinkBox, LinkOverlay, List, ListIcon, ListItem, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalContextProvider, ModalFocusScope, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, OrderedList, PinInput, PinInputField, Popover, PopoverAnchor, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Progress, ProgressLabel, Radio, RadioGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderMark, RangeSliderProvider, RangeSliderThumb, RangeSliderTrack, ScaleFade, Select, Show, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Slide, SlideFade, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Spacer, Spinner, Square, Stack, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Switch, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tag, TagCloseButton, TagLabel, TagLeftIcon, TagRightIcon, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tooltip, Tr, UnorderedList, VStack, Wrap, WrapItem, createStandaloneToast, forwardRef, chakra as hds, keyframes, shouldShowFallbackImage, useBoolean, useBreakpoint, useBreakpointValue, useButtonGroup, useCheckbox, useCheckboxGroup, useClipboard, useColorModeValue, useConst, useDisclosure, useImage, useInputGroupStyles, useMediaQuery, useMenuButton, useModal, useMultiStyleConfig, useOutsideClick, usePrefersReducedMotion, useRadio, useRadioGroup, useSlider, useStyleConfig, useTheme, useToast } from '@chakra-ui/react';
import React, { useId } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { TwitterIcon, GoogleIcon, FigmaIcon, FacebookIcon, DribbleIcon, AppleIcon } from '@highoutput/hds-icons';
import merge from 'lodash-es/merge';
import { Global } from '@emotion/react';
export { isValidMotionProp, motion } from 'framer-motion';

var Button = function Button(props) {
  var uid = useId();
  return React.createElement(Button$2, Object.assign({}, props, {
    "data-testid": uid + "-button"
  }), props.children);
};

var CloseButton = function CloseButton(props) {
  var disabled = props.disabled,
    variant = props.variant,
    size = props.size,
    onClicked = props.onClicked;
  return React.createElement(Button$2, {
    size: size != null ? size : 'button-close-sm',
    variant: variant != null ? variant : 'solid-close-btn',
    isDisabled: disabled,
    "data-testid": "close.btn",
    onClick: onClicked
  }, React.createElement(Icon, {
    as: CloseIcon
  }));
};

var SocialButton = function SocialButton(props) {
  var disabled = props.disabled,
    _props$type = props.type,
    type = _props$type === void 0 ? 'google' : _props$type,
    variant = props.variant,
    buttonText = props.buttonText,
    onClicked = props.onClicked;
  var useIcon = function useIcon() {
    switch (type) {
      case 'apple':
        return React.createElement(AppleIcon, {
          isDisabled: disabled,
          variant: variant
        });
      case 'dribble':
        return React.createElement(DribbleIcon, {
          isDisabled: disabled,
          variant: variant
        });
      case 'facebook':
        return React.createElement(FacebookIcon, {
          isDisabled: disabled,
          variant: variant
        });
      case 'figma':
        return React.createElement(FigmaIcon, {
          isDisabled: disabled
        });
      case 'google':
        return React.createElement(GoogleIcon, {
          isDisabled: disabled
        });
      case 'twitter':
        return React.createElement(TwitterIcon, {
          isDisabled: disabled,
          variant: variant
        });
    }
  };
  var defaultStyle = {
    google: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : 'white',
      color: 'black',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#F9FAFB',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : 'white',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    facebook: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#1877F2',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#0C63D4',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#1877F2',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    figma: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#000000',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#000000',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#000000',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      }
    },
    apple: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#000000',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#000000',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#000000',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    dribble: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#EA4C89',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#EA4C89',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#E62872',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    twitter: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#1DA1F2',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#0C63D4',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#0C8BD9',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    }
  };
  return React.createElement(React.Fragment, null, buttonText ? React.createElement(Button$2, Object.assign({
    p: "10px 16px",
    height: '44px'
  }, defaultStyle[type], {
    leftIcon: useIcon(),
    variant: variant,
    isDisabled: disabled,
    "data-testid": type + ".social.btn",
    onClick: onClicked
  }), buttonText) : React.createElement(IconButton, Object.assign({}, defaultStyle[type], {
    width: '44px',
    height: '44px',
    "data-testid": type + ".social.btn",
    "aria-label": "btn-" + useIcon(),
    disabled: disabled,
    icon: useIcon(),
    onClick: onClicked
  })));
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var colors = {
  'alpha.white': {
    500: '#FFFFFF'
  },
  'alpha.black': {
    500: '#000000'
  },
  'canvas.light': {
    500: '#E5E5E5'
  },
  'canvas.dark': {
    500: '#1F1E1F'
  },
  'brand.primary': {
    900: '#414180',
    800: '#5353A3',
    700: '#7070DD',
    600: '#C0C0FC',
    500: '#E3E3FC'
  },
  'brand.secondary': {
    900: '#57805D',
    800: '#62A36B',
    700: '#BAEFC2',
    600: '#DEFCE3',
    500: '#F2FCF4'
  },
  'brand.tertiary': {
    900: '#295580',
    800: '#346DA3',
    700: '#75AEE4',
    600: '#CAE5FC',
    500: '#E8F3FC'
  },
  neutrals: {
    900: '#0F0F0F',
    800: '#2E2E2E',
    700: '#525252',
    600: '#7A7A7A',
    500: '#A3A3A3',
    400: '#B8B8B8',
    300: '#D1D1D1',
    200: '#E6E6E6',
    100: '#FAFAFA'
  },
  'interface.error': {
    900: '#800C05',
    800: '#9E241C',
    700: '#DC180C',
    600: '#FCD2CF',
    500: '#FCEAE8'
  },
  'interface.success': {
    900: '#008005',
    800: '#139E19',
    700: '#00C408',
    600: '#A3F0A7',
    500: '#E8FCE9'
  },
  'interface.warning': {
    900: '#CC8900',
    800: '#E59A00',
    700: '#FFAB00',
    600: '#FCDFA2',
    500: '#FCEFD4'
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D'
  },
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B'
  },
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  }
};

var Text = {
  sizes: {
    /* Headers */
    'header-1': {
      fontSize: '80px',
      fontWeight: 'bold',
      lineHeight: '88px',
      letterSpacing: '-0.02em'
    },
    'header-2': {
      fontSize: '56px',
      fontWeight: 'bold',
      lineHeight: '64px',
      letterSpacing: '-0.02em'
    },
    'header-3': {
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '44px',
      letterSpacing: '-0.02em'
    },
    'header-4': {
      fontSize: '32px',
      fontWeight: 'medium',
      lineHeight: '36px',
      letterSpacing: '-0.015em'
    },
    'header-5': {
      fontSize: '24px',
      fontWeight: 'medium',
      lineHeight: '28px',
      letterSpacing: '-0.015em'
    },
    'header-6': {
      fontSize: '20px',
      fontWeight: 'medium',
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    },
    /* Paragraphs */
    'paragraph-xxl-default': {
      fontSize: '32px',
      lineHeight: '48px'
    },
    'paragraph-xl-default': {
      fontSize: '24px',
      lineHeight: '36px'
    },
    'paragraph-lg-default': {
      fontSize: '20px',
      lineHeight: '32px'
    },
    'paragraph-md-default': {
      fontSize: '18px',
      lineHeight: '28px'
    },
    'paragraph-sm-default': {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.02em'
    },
    'paragraph-xs-default': {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.02em'
    },
    /* Labels */
    'label-xl-default': {
      fontSize: '32px',
      lineHeight: '32px'
    },
    'label-lg-default': {
      fontSize: '28px',
      lineHeight: '28px'
    },
    'label-md-default': {
      fontSize: '20px',
      lineHeight: '20px'
    },
    'label-sm-default': {
      fontSize: '18px',
      lineHeight: '18px'
    },
    'label-xs-default': {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '0.02em'
    },
    'label-xxs-default': {
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '0.02em'
    },
    /* Buttons */
    'button-default': {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 500
    },
    'button-uppercase': {
      fontSize: '18px',
      lineHeight: '18px',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }
};

var Box = {
  baseStyle: {},
  variants: {},
  sizes: Text.sizes
};

var buttonSizes = {
  sm: {
    p: '8px 14px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em'
  },
  md: {
    p: '10px 16px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  lg: {
    p: '10px 18px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px'
  },
  xl: {
    p: '12px 20px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px'
  },
  '2xl': {
    p: '16px 28px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px'
  },
  'button-close-sm': {
    width: '36px',
    height: '36px'
  },
  'button-close-md': {
    width: '40px',
    height: '40px'
  },
  'button-close-lg': {
    width: '44px',
    height: '44px'
  }
};

var buttonVariants = {
  'solid-primary': {
    bg: 'brand.primary.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #7070DD',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      _disabled: {
        bg: 'brand.primary.500',
        border: 'none',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: 'brand.primary.900',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: 'brand.primary.500',
      border: 'none',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'outline-primary': {
    color: 'neutrals.700',
    bg: 'white',
    border: '1px solid #D1D1D1',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      bg: '#FFFFFF',
      _disabled: {
        bg: '#FFFFFF',
        border: '1px solid #D1D1D1',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      },
      border: '1px solid #D1D1D1'
    },
    _active: {
      bg: '#FFFFFF',
      border: '1px solid #D1D1D1',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#FFFFFF',
      border: '1px solid #D1D1D1',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'ghost-primary': {
    color: 'brand.primary.700',
    bg: '#E3E3FC',
    border: '1px solid #E3E3FC',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      bg: '#E3E3FC',
      _disabled: {
        bg: '#E3E3FC',
        border: '1px solid #E3E3FC',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: '#C0C0FC',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#E3E3FC',
      border: '1px solid #E3E3FC',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'solid-error': {
    bg: 'interface.error.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #DC180C',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'interface.error.700',
      border: '1px solid #DC180C',
      _disabled: {
        bg: '#FCEAE8',
        border: '1px solid #FCEAE8',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: 'interface.error.900',
      border: '1px solid #800C05',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#FCEAE8',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'outline-error': {
    bg: 'white',
    color: '#DC180C',
    borderRadius: '4px',
    border: '1px solid #DC180C',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'white',
      border: '1px solid #DC180C',
      _disabled: {
        bg: '#FFFFFF',
        border: '1px solid #FCD2CF',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: 'interface.error.500',
      border: '1px solid #800C05',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#FFFFFF',
      border: '1px solid #FCD2CF',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'ghost-error': {
    bg: 'interface.error.500',
    color: 'interface.error.700',
    borderRadius: '4px',
    border: '1px solid #FCEAE8',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'interface.error.500',
      border: '1px solid #FCEAE8',
      _disabled: {
        bg: 'rgba(252, 234, 232, 0.5)',
        border: '1px solid rgba(252, 234, 232, 0.5)',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: ' rgba(220, 24, 12, 0.15)',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: 'rgba(252, 234, 232, 0.5)',
      border: '1px solid rgba(252, 234, 232, 0.5)',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'solid-close-btn': {
    bg: 'brand.primary.700',
    borderRadius: '4px',
    _hover: {
      _disabled: {
        bg: 'brand.primary.500'
      }
    },
    _disabled: {
      bg: 'transparent'
    }
  },
  'outline-close-btn': {
    color: 'neutrals.600',
    _hover: {
      color: 'neutrals.700'
    },
    _focus: {
      color: 'neutrals.600'
    }
  },
  'ghost-close-btn': {
    bg: 'transparent',
    borderRadius: '4px',
    color: 'brand.primary.700',
    _hover: {
      bg: 'rgba(227, 227, 252, 0.5)',
      color: 'brand.primary.900'
    },
    _focused: {
      bg: 'rgba(227, 227, 252, 0.5)',
      color: 'brand.primary.700'
    }
  }
};

var Button$1 = {
  baseStyle: {
    _focus: {
      boxShadow: 'none'
    },
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '8px',
    color: 'neutrals.100',
    outline: 'none'
  },
  sizes: buttonSizes,
  variants: /*#__PURE__*/_extends({
    primary: {
      color: 'neutrals.100',
      bg: 'brand.primary.700',
      p: '8px 14px',
      borderRadius: '8px',
      _hover: {
        bg: 'brand.primary.700',
        _disabled: {
          bg: 'brand.primary.500'
        }
      },
      _disabled: {
        bg: 'brand.primary.500'
      }
    }
  }, buttonVariants),
  defaultProps: {
    variant: 'primary'
  }
};

var Checkbox = {
  baseStyle: {
    control: {
      borderRadius: 'base',
      padding: '6px'
    }
  },
  variants: {
    primary: {
      control: {
        borderColor: 'gray.200',
        pointerEvents: 'none',
        _focus: {
          shadow: 'none'
        },
        _checked: {
          bg: 'brand.primary.700',
          color: 'brand.primary.700',
          borderColor: 'brand.primary.700',
          _hover: {
            bg: 'brand.primary.700',
            color: 'brand.primary.700',
            borderColor: 'brand.primary.700'
          }
        }
      }
    },
    orange: {
      control: {
        borderColor: 'gray.200',
        _focus: {
          shadow: 'none'
        },
        _checked: {
          bg: 'orange.500',
          color: 'white',
          borderColor: 'orange.500',
          _hover: {
            bg: 'orange.500',
            color: 'white',
            borderColor: 'orange.500'
          }
        }
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

var Drawer = {
  parts: ['closeButton'],
  baseStyle: {
    closeButton: {
      _focus: {
        boxShadow: 'none'
      },
      color: 'gray.800'
    }
  }
};

var Flex = {
  baseStyle: {},
  variants: {}
};

var Form = {
  parts: ['formLabel', 'formInput', 'formTextarea', 'formHelperText', 'formErrorMessage'],
  baseStyle: {
    formLabel: {
      size: 'label-xs-medium',
      color: 'neutrals.900'
    },
    formInput: {
      size: 'paragraph-sm-default',
      padding: '8px 14px',
      _placeholder: {
        color: 'neutrals.500'
      },
      _focus: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      _focusVisible: {
        outline: 'none'
      },
      _hover: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      _disabled: {
        bgColor: 'neutrals.100',
        borderColor: 'neutrals.200'
      },
      border: '1px solid',
      borderColor: 'neutrals.200'
    },
    formTextarea: {
      size: 'paragraph-sm-default',
      _placeholder: {
        color: 'neutrals.500'
      },
      _hover: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      padding: '14px 10px',
      _focus: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      _focusVisible: {
        outline: 'none'
      }
    },
    formHelperText: {
      size: 'label-xs-default',
      mt: '6px',
      color: 'neutrals.700'
    },
    formErrorMessage: {
      size: 'label-xs-default',
      mt: '6px',
      color: 'interface.error.700'
    }
  },
  sizes: {
    formLabel: Text.sizes
  },
  variants: {
    outline: {
      formInput: {
        height: '44px',
        bgColor: 'alpha.white.500',
        borderColor: 'neutrals.200',
        border: '1px solid',
        _focus: {
          border: '1px solid',
          borderColor: 'brand.primary.700'
        },
        _focusVisible: {
          outline: 'none'
        },
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        borderRadius: '8px',
        color: 'neutrals.900',
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            border: '1px solid',
            borderColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        size: 'paragraph-sm-default',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        border: '1px solid',
        borderColor: 'neutrals.300',
        color: 'neutrals.900',
        borderRadius: '8px',
        _focus: {
          border: '1px solid',
          borderColor: 'brand.primary.700'
        },
        _focusVisible: {
          outline: 'none'
        },
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            borderColor: 'interface.error.700',
            border: '1px solid'
          }
        }
      }
    },
    flushed: {
      formInput: {
        height: '44px',
        bgColor: 'alpha.white.500',
        borderBottomColor: 'neutrals.200',
        borderBottom: '1px solid',
        _focus: {
          borderBottom: '1px solid',
          borderBottomColor: 'brand.primary.700'
        },
        borderRadius: '0px',
        color: 'neutrals.900',
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottom: '1px solid',
            borderBottomColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        size: 'paragraph-sm-default',
        borderBottom: '1px solid',
        borderBottomColor: 'neutrals.300',
        color: 'neutrals.900',
        borderRadius: '0px',
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottomColor: 'interface.error.700',
            borderBottom: '1px solid'
          }
        }
      }
    },
    filled: {
      formInput: {
        height: '44px',
        bgColor: 'brand.primary.500',
        _focus: {
          bgColor: 'transparent'
        },
        borderRadius: '8px',
        color: 'neutrals.900',
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            border: '1px solid',
            borderColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        color: 'neutrals.900',
        borderRadius: '8px',
        bgColor: 'brand.primary.500',
        _focus: {
          bgColor: 'transparent'
        },
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottomColor: 'interface.error.700',
            borderBottom: '1px solid'
          }
        }
      }
    },
    unstyled: {
      formInput: {
        height: '44px',
        bgColor: 'transparent',
        border: '0px',
        color: 'neutrals.900',
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            border: '1px solid',
            borderColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        color: 'neutrals.900',
        bgColor: 'transparent',
        border: '0px',
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottomColor: 'interface.error.700',
            borderBottom: '1px solid'
          }
        }
      }
    },
    'check-in-edit': {
      formInput: {
        height: '34px',
        _focus: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focus: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        }
      },
      formTextarea: {
        _focusVisible: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focusVisible: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        },
        fontSize: '14px'
      }
    },
    'check-in': {
      formInput: {
        border: 'none',
        _focus: {
          border: '2px solid !important',
          borderColor: '#FFC107 !important'
        },
        _hover: {
          border: '1px dashed',
          borderColor: 'gray.400'
        }
      },
      formTextarea: {
        _focusVisible: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focusVisible: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        },
        fontSize: '14px'
      }
    }
  },
  defaultProps: {
    variant: 'outline'
  }
};

var Heading = {
  sizes: Text.sizes
};

var Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'underline'
    }
  },
  sizes: Text.sizes,
  variants: {
    primary: {
      fontWeight: 'medium',
      color: 'brand.primary.700'
    },
    orange: {
      fontWeight: 'medium',
      color: 'orange.500'
    }
  }
};

var PinInputField = {
  baseStyle: {
    _placeholder: {
      color: 'neutrals.500'
    },
    fontSize: '44px',
    _focusVisible: {
      outline: 'none',
      borderColor: 'brand.primary.500'
    },
    border: '1px solid',
    bgColor: 'alpha.white.500',
    textAlign: 'center',
    borderColor: 'brand.primary.500',
    color: 'brand.primary.700'
  },
  sizes: {
    sm: {
      h: '64px',
      w: '64px',
      borderRadius: 'sm'
    },
    md: {
      h: '80px',
      w: '80px',
      borderRadius: 'md'
    },
    lg: {
      h: '96px',
      w: '96px',
      borderRadius: 'lg'
    }
  },
  variants: {
    outline: {
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      borderRadius: '8px',
      _focus: {
        borderColor: 'brand.primary.500',
        caretColor: 'black',
        boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      }
    },
    flushed: {
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      border: '0px',
      borderRadius: '0px',
      borderBottom: '1px solid',
      borderBottomColor: 'brand.primary.500',
      _focus: {
        borderColor: 'brand.primary.500',
        caretColor: 'black',
        boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      }
    },
    filled: {
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      borderRadius: '8px',
      _focus: {
        borderColor: 'brand.primary.500',
        caretColor: 'black',
        bgColor: 'alpha.white.500',
        boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      },
      bgColor: 'brand.primary.500'
    },
    unstyled: {
      bgColor: 'transparent',
      border: '0px',
      _focus: {
        caretColor: 'black'
      }
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'outline'
  }
};

var RadioImage = {
  baseStyle: function baseStyle() {
    return {
      padding: 1,
      borderRadius: 180,
      w: 14,
      color: 'brand.primary.700'
    };
  },
  variants: {
    primary: function primary() {
      return {
        padding: 1,
        color: 'brand.primary.700'
      };
    }
  }
};

var Select = {
  parts: ['icon'],
  baseStyle: {
    icon: {
      color: 'gray.400'
    }
  }
};

var Stack = {
  baseStyle: {
    spacing: 4,
    p: 0
  },
  variants: {}
};

var Switch = {
  baseStyle: {
    track: {
      _focus: {
        boxShadow: 'none'
      }
    }
  },
  variants: {
    primary: {
      track: {
        _checked: {
          bg: 'brand.primary.700'
        }
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

var Tabs = {
  parts: ['tab', 'tabpanel', 'tablist'],
  baseStyle: {
    root: {
      w: 'full',
      mt: 6
    },
    tab: {
      fontWeight: 'semibold',
      color: 'gray.500',
      marginRight: 4
    },
    tabpanel: {
      p: 0,
      mt: 4,
      mb: 12
    }
  },
  variants: {
    primary: {
      tab: {
        _selected: {
          paddingBottom: '6px',
          borderBottom: '2px solid',
          borderBottomColor: 'brand.primary.700',
          color: 'gray.800',
          fontWeight: 'semibold'
        },
        _focus: {
          boxShadow: 'none'
        },
        marginBottom: '-2px'
      },
      tablist: {
        borderBottom: '1px solid',
        borderBottomColor: 'gray.100'
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

var components = {
  Box: Box,
  Stack: Stack,
  Button: Button$1,
  Checkbox: Checkbox,
  Link: Link,
  Form: Form,
  Heading: Heading,
  Switch: Switch,
  Tabs: Tabs,
  Flex: Flex,
  Text: Text,
  Drawer: Drawer,
  Select: Select,
  RadioImage: RadioImage,
  PinInputField: PinInputField
};

var config = {};

var fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif'
};

var fontSizes = {
  '2xs': '10px',
  '3xs': '8px'
};

var styles = {
  global: {
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      minH: '100vh',
      color: 'neutrals.900',
      bgColor: 'white',
      scrollBehavior: 'smooth'
    }
  }
};

var zIndices = {
  commentDrawer: 1450,
  commentOverlay: 1400
};

var theme = /*#__PURE__*/extendTheme$1({
  config: config,
  styles: styles,
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  components: components,
  zIndices: zIndices
});

var extendTheme = function extendTheme(customTheme) {
  return extendTheme$1(merge(theme, customTheme));
};

var Fonts = function Fonts() {
  return React.createElement(Global, {
    styles: "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n      "
  });
};

var _excluded = ["children"];
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement(ChakraProvider, Object.assign({}, props, {
    theme: extendTheme(props.theme)
  }), React.createElement(Fonts, null), children);
};

export { Button, CloseButton, SocialButton, ThemeProvider, extendTheme, theme };
//# sourceMappingURL=hds.esm.js.map
