import { Select, SelectProps, useMultiStyleConfig } from '@chakra-ui/react';
import React, { forwardRef, useId } from 'react';
import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';

export interface SelectFieldProps extends FormContainerProps {
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  defaultValue?: string | number;
  variant?: SelectProps['variant'];
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
      disabled,
      variant = 'outline',
    } = props;
    const styles = useMultiStyleConfig('Form', { variant });
    const uid = useId();

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
          data-testid={`${uid}-select-field-select`}
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
