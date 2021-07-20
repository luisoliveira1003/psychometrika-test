import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      "900": "#FFFFFF",
      "300": "#E5E5E5",
    },
    cyan: {
      "600": "#005c71",
      "500": "#00718A",
    },
    blue: {
      "100": "#0683F9",
    },
    gray: {
      "700": "#424242",
      "600": "#65676B",
      "500": "#616161",
      "300": "#8C939D",
      "100": "rgba(0, 0, 0, 0.25)",
    },
    black: {
      "5": "rgba(0, 0, 0, 0.05)",
      "75": "rgba(0, 0, 0, 0.75)",
      "900": "#000000",
    },
  },
  fonts: {
    heading: "Segoe UI",
    body: "Segoe UI",
  },
  styles: {
    global: {
      body: {
        bg: "white.300",
        color: "gray.700",
      },
    },
  },
});
