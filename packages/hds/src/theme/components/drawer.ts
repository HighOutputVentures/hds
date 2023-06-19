import { MultiStyleConfig } from '@chakra-ui/react';
import { runIfFn } from '../../utils/runIfFn';
import { Modal } from './modal';

export const Drawer: MultiStyleConfig = {
  parts: Modal.parts,
  baseStyle(ctx) {
    return runIfFn(Modal.baseStyle, ctx) ?? {};
  },
};
