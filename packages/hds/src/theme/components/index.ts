import { ComponentStyleConfig } from '@chakra-ui/react';
import Box from './box';
import Checkbox from './checkbox';
import Drawer from './drawer';
import Flex from './flex';
import Form from './form';
import Heading from './heading';
import Link from './link';
import PinInputField from './pinInputField';
import RadioImage from './radioImage';
import Select from './select';
import Stack from './stack';
import Spinner from './spinner';
import Switch from './switch';
import Tabs from './tabs';
import Text from './text/text';

const components: { [key: string]: ComponentStyleConfig } = {
  Box,
  Stack,
  Checkbox,
  Link,
  Form,
  Heading,
  Switch,
  Tabs,
  Flex,
  Text,
  Drawer,
  Select,
  RadioImage,
  PinInputField,
  Spinner,
};

export default components;
