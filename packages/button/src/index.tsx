import Button, { ButtonProps } from './components/Button';
import CloseButton, { CloseButtonProps } from './components/CloseButton';
import SocialButton, { SocialButtonProps } from './components/SocialButton';

import withButton from './theme/button/withButton';

import {
  ButtonSizeTypes,
  CloseButtonSizeTypes,
} from '../src/theme/button/sizes';
import {
  ButtonVariantsTypes,
  CloseButtonVariantTypes,
} from '../src/theme/button/variants';

export {
  Button,
  ButtonProps,
  SocialButton,
  SocialButtonProps,
  CloseButton,
  CloseButtonProps,
};

export {
  ButtonVariantsTypes,
  CloseButtonVariantTypes,
  ButtonSizeTypes,
  CloseButtonSizeTypes,
  withButton,
};