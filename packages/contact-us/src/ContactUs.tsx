import { Box, Center, chakra, Text } from '@chakra-ui/react';
import { Button, MultilineField, TextField } from '@highoutput/hds-forms';
import { HovIcon } from '@highoutput/hds-icons';
import { useToast } from '@highoutput/hds-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { postJson } from './utils';

export interface ContactUsProps {
  /**
   * The api url where we will send the http request
   */
  url: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ url }) => {
  const toast = useToast();

  const { register, formState, handleSubmit, reset } = useForm<TSchema>({
    shouldFocusError: true,
    shouldUnregister: true,
    resolver: yupResolver(schema),
    defaultValues: {
      emailAddress: '',
      message: '',
      details: {
        name: '',
      },
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await postJson(url, data);
      toast.success('Message successfully sent!');
      reset();
    } catch (error) {
      toast.error('Oops, Something went wrong.');
    }
  });

  return (
    <Box paddingBottom={20} data-testid="hds.contact-us">
      <Box
        position="relative"
        color="white"
        bgColor="black"
        width="full"
        paddingTop={20}
        paddingBottom={8}
      >
        <Center>
          <HovIcon width="32px" height="32px" />
        </Center>

        <Center mt={8}>
          <Text
            fontSize="48px"
            lineHeight="48px"
            fontWeight="bold"
            data-testid="hds.contact-us.heading-1"
          >
            Contact Us
          </Text>
        </Center>

        <Center>
          <Text
            color="gray.200"
            fontSize="16px"
            lineHeight="28px"
            data-testid="hds.contact-us.heading-2"
          >
            Tell us what you need and we'll help you out.
          </Text>
        </Center>

        <Box
          position="absolute"
          marginTop="full"
          height="100px"
          width="full"
          bgColor="black"
        />
      </Box>

      <Box
        position="relative"
        maxWidth="480px"
        padding="48px"
        marginX="auto"
        bgColor="white"
        rounded="8px"
        zIndex={1}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
      >
        <Center>
          <Text
            fontWeight="bold"
            fontSize="30px"
            lineHeight="36px"
            color="neutrals.800"
            data-testid="hds.contact-us.form.heading"
          >
            Drop your message
          </Text>
        </Center>

        <chakra.form
          gap={5}
          display="flex"
          flexDirection="column"
          marginTop="8"
          onSubmit={onSubmit}
        >
          <TextField
            label="Name"
            error={formState.errors.details?.name?.message}
            placeholder="Input your name"
            __fieldTestId="hds.contact-us.form.input.name"
            {...register('details.name')}
          />

          <TextField
            label="Email"
            error={formState.errors.emailAddress?.message}
            placeholder="Input your email address"
            __fieldTestId="hds.contact-us.form.input.email"
            {...register('emailAddress')}
          />

          <MultilineField
            label="Desciption of concern"
            error={formState.errors.message?.message}
            placeholder="Enter description"
            __fieldTestId="hds.contact-us.form.input.message"
            {...register('message')}
          />

          <Button
            type="submit"
            width="full"
            isLoading={formState.isSubmitting}
            __testId="hds.contact-us.form.submit-button"
          >
            Send
          </Button>
        </chakra.form>
      </Box>
    </Box>
  );
};

const schema = yup
  .object({
    emailAddress: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    message: yup.string().required('Description is required.'),
    details: yup
      .object({
        name: yup.string().required('Name is required.'),
      })
      .required(),
  })
  .required();

type TSchema = yup.InferType<typeof schema>;
