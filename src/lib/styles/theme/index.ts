import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";

const breakpoints = {
  sm: "30em",
  md: "55em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const customTheme = extendTheme({
  breakpoints,
  fonts,
  colors,
  config,
  components,
});

export default customTheme;
