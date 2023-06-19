import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Progress,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Skeleton,
  SkeletonCircle,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
  Tooltip,
  VStack,
  chakra,
  useToast,
} from '@highoutput/hds';
import { PropsWithChildren } from 'react';

export default function LoginPage() {
  const toast = useToast();

  return (
    <Wrapper>
      <FormControl isInvalid>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Username" />
        <FormErrorMessage>This is an error</FormErrorMessage>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password" />
        <FormHelperText>This is a hint</FormHelperText>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Select</FormLabel>
        <Select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </Select>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Lorem ipsum..." />
      </FormControl>

      <Switch mt={4} />

      <Box mt={4}>
        <Checkbox>I accept the terms!!</Checkbox>
      </Box>

      <Box mt={4}>
        <Progress value={50} min={0} max={100} />
      </Box>

      <Box mt={4}>
        <Slider defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      <Box mt={4}>
        <RangeSlider defaultValue={[10, 30]}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>

      <HStack mt={4} spacing={1}>
        {'Aa|Bb|Cc|Dd|Ee'.split(/\|/).map((s) => (
          <Tag key={s}>
            <TagLabel>{s}</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </HStack>

      <HStack mt={6}>
        <Spinner colorScheme="primary" />
        <Spinner colorScheme="error" />
        <Spinner colorScheme="warning" />
        <Spinner colorScheme="success" />
        <Spinner colorScheme="neutral" />
      </HStack>

      <HStack mt={6}>
        <PinInput placeholder="0">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <HStack mt={4}>
        <SkeletonCircle />
        <VStack spacing={1.5} align="start">
          <Skeleton w="70px" h={3} />
          <Skeleton w="120px" h={3} />
        </VStack>
      </HStack>

      <Button
        mt={4}
        w="full"
        onClick={() => {
          toast({ status: 'info', description: 'Hello world!' });
          toast({ status: 'error', description: 'Hello world!' });
          toast({ status: 'success', description: 'Hello world!' });
          toast({ status: 'warning', description: 'Hello world!' });
        }}
      >
        Login
      </Button>

      <Button w="full" mt={4} variant="outline" colorScheme="gray">
        Register
      </Button>

      <Box mt={4}>
        <Tooltip label="Hello world!" hasArrow>
          <chakra.span fontSize="xs" fontWeight="medium" color="neutral.600">
            Hover me
          </chakra.span>
        </Tooltip>
      </Box>
    </Wrapper>
  );
}

function Wrapper({ children }: PropsWithChildren) {
  return (
    <Flex as="main" flexDir="column" justifyContent="center" minH="100vh" p={8}>
      <Box>
        <Box w="400px" mx="auto" maxW="full">
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
