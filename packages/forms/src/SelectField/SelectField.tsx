import { Select, SelectProps, useMultiStyleConfig } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';

export interface SelectFieldProps extends FormContainerProps {
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  defaultValue?: string | number;
  variant?: SelectProps['variant'];
  __testId?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
    const {
      options,
      onChange,
      onBlur,
      name,
      placeholder,
      defaultValue,
      __testId,
      disabled,
      variant = 'outline',
    } = props;
    const styles = useMultiStyleConfig('Form', { variant });

    return (
      <FormContainer {...props}>
        <Select
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          sx={styles.formInput}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          data-testid={__testId ?? `hds.select.field`}
        >
          {options.map(({ value, label }) => (
            <option
              key={value}
              style={{
                padding: 0,
              }}
              value={value}
            >
              {label}
            </option>
          ))}
        </Select>
      </FormContainer>
    );
  }
);

export default SelectField;
