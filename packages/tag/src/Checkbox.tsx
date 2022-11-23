import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import * as React from 'react';

export default React.forwardRef<HTMLInputElement, CheckboxProps>(function HdsCheckbox(props, ref) {
  return <Checkbox ref={ref} aria-label="Select Item" variant="hds" {...props} />;
});
