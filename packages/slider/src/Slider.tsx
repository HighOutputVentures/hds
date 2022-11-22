import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";

type SliderBaseProps = {};

type StylingProps = Omit<SystemStyleObject, "value">;

export type SliderProps = Partial<SliderBaseProps> & StylingProps;

export default React.forwardRef<HTMLDivElement, SliderProps>(function HdsSlider(_props, _ref) {
  return null;
});
