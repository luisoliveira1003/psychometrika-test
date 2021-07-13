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
    gray: {
      "700": "#424242",
      "400": "#8C939D",
    },
    black: {
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
