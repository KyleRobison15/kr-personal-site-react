import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#848c94",
      500: "#6b737b",
      600: "#525960",
      700: "#3a4045",
      800: "#22262c",
      900: "#050e15",
    },

    // gray: {
    //   50: "#e9f4fb",
    //   100: "#cddae5",
    //   200: "#aec2d1",
    //   300: "#8ea8be",
    //   400: "#848c94",
    //   500: "#6b737b",
    //   600: "#525960",
    //   700: "#3a4045",
    //   800: "#22262c",
    //   900: "#050e15",
    // },
  },
});

export default theme;
