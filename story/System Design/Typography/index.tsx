import * as React from "react";
import { theme, ThemeProvider } from "../../../packages/hds/dist";
import Accessibility from "./Accessibility";
import ApplyingColors from "./ApplyingColors";
import BoundingBox from "./BoundingBox";
import BrandTypography from "./BrandTypography";
import DosAndDonts from "./DosAndDonts";
import EnsuringReadability from "./EnsuringReadability";
import Footer from "./Footer";
import Hero from "./Hero";
import Monospace from "./Monospace";
import TypeRoles from "./TypeRoles";
import TypeScaling from "./TypeScaling";

export default function Typography() {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <BrandTypography />
      <TypeScaling />
      <TypeRoles />
      <BoundingBox />
      <ApplyingColors />
      <EnsuringReadability />
      <DosAndDonts />
      <Accessibility />
      <Monospace />
      <Footer />
    </ThemeProvider>
  );
}
