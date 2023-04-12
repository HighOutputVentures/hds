import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactNode } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { ArrayFieldSchema, ArrayFieldTypeValues } from './validation';

export interface ArrayFieldProps {
  buttonRemoveChildren?: ReactNode;
  buttonAddChildren?: ReactNode;
  defaultValues: {
    input: ArrayFieldTypeValues[];
  };
  onChange: (data: Record<string, any>) => void;
  onRemove: (data: Record<string, any>) => void;
  onAppend: (data: Record<string, any>) => void;
  onBlur: (data: Record<string, any>) => void;
  maxValue?: number;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  __btnTestId?: string;
  __inputTestId?: string;
}

const ArrayField = (props: ArrayFieldProps) => {
  const {
    placeholder,
    defaultValues,
    onChange,
    onRemove,
    onBlur,
    onAppend,
    label,
    isRequired,
    __inputTestId,
    __btnTestId,
    buttonAddChildren,
    buttonRemoveChildren,
    maxValue,
  } = props;
  const { control, register, handleSubmit, formState } = useForm<{
    input: ArrayFieldTypeValues[];
  }>({
    defaultValues,
    resolver: isRequired ? yupResolver(ArrayFieldSchema) : undefined,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'input',
  });

  const handleAddField = handleSubmit(async (data) => {
    if (maxValue && fields.length <= maxValue - 1) {
      append({
        value: '',
      });
      onAppend(data);
    }
  });

  const handleOnBlurInput = handleSubmit(async (data) => {
    onBlur(data);
  });

  const handleRemove = handleSubmit(async (data) => {
    onRemove(data);
  });

  const handleOnChangeInput = handleSubmit(async (data) => {
    onChange(data);
  });

  return (
    <Flex flexDir="column" gap={2}>
      {label && <Text>{label}</Text>}
      {fields.map((item, idx) => (
        <Flex
          gap={2}
          key={item.id}
          onBlur={handleOnBlurInput}
          onChange={handleOnChangeInput}
        >
          <TextField
            id={'input'}
            placeholder={placeholder ?? ''}
            {...register(`input.${idx}.value`)}
            __fieldTestId={__inputTestId ?? 'hds.array-field.input'}
            error={
              isRequired ? formState.errors?.input?.[idx]?.value?.message : ''
            }
          />
          <VStack>
            <Button
              variant="outline"
              onClick={() => {
                remove(idx);
                handleRemove();
              }}
              data-testid={__btnTestId ?? 'hds.array-field.remove.btn'}
              disabled={fields.length <= 1}
              width="32px"
              height="40px"
            >
              {buttonRemoveChildren ? (
                buttonRemoveChildren
              ) : (
                <Icon as={DeleteIcon} />
              )}
            </Button>
            {idx === fields.length - 1 && (
              <Button
                variant="outline"
                width="32px"
                height="40px"
                data-testid={__btnTestId ?? 'hds.array-field.add.btn'}
                disabled={maxValue === fields.length}
                onClick={handleAddField}
              >
                {buttonAddChildren ? buttonAddChildren : <Icon as={AddIcon} />}
              </Button>
            )}
          </VStack>
        </Flex>
      ))}
    </Flex>
  );
};

export default ArrayField;
