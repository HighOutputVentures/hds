import { extendTheme as chakraExtendTheme } from '@chakra-ui/react';
import defaultTheme from '../theme';
import mergeDeep from './mergeDeep';

type Dict = Record<string, any>;

export default function extendTheme(...customTheme: Dict[]): Dict {
  return chakraExtendTheme(
    customTheme.reduce((t, c) => {
      return mergeDeep(t, c);
    }, defaultTheme)
  );
}
