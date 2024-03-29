import { theme as baseTheme, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    gray: {
      800: "#121C51",
      500: "#60699A",
      400: "#A3B8E8",
      300: "#E0E9FE",
      200: "#E6EDFF",
      100: "#F8FAFF",
      50: "#F2F6FF",
    },
    pink: {
      50: "#fff8fa",
      100: "#fff1f6",
      200: "#ffdce8",
      300: "#ffc6db",
      400: "#ff9cbf",
      500: "#ff71a4",
      600: "#e66694",
      700: "#bf557b",
      800: "#994462",
      900: "#7d3750",
    },
  },
};

const fonts = {
  heading: `Merriweather, ${baseTheme.fonts?.heading}`,
  body: `Poppins, ${baseTheme.fonts?.body}`,
};

const shadows = {
  md: "0px 24px 25px rgba(150, 113, 255, 0.1)",
  pink: "0px 4px 4px rgba(164, 121, 255, 0.25), 0px 4px 17px rgba(255, 40, 40, 0.25)",
};

export const pinkRing = {
  _focus: {
    ring: 0,
  },
};

const inputBorder = {
  _focus: {
    borderColor: "pink.200",
    boxShadow: "none",
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "brand.gray.50",
        color: "brand.gray.800",
        minW: "container.sm",
      },
      "html, body, #root": {
        minHeight: "100%",
      },
    },
  },
  colors,
  fonts,
  shadows,
  components: {
    Container: {
      baseStyle: {
        px: 9,
      },
    },
    Textarea: {
      variants: {
        outline: {
          ...inputBorder,
        },
      },
    },
    Button: {
      baseStyle: {
        ...pinkRing,
      },
      variants: {
        brand: {
          bgColor: "brand.pink.500",
          color: "white",
          _hover: {
            bgColor: "brand.pink.400",
          },
          "&:hover[disabled]": {
            bgColor: "brand.pink.500",
          },
          _focus: {
            bgColor: "brand.pink.500",
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        header: {
          fontFamily: fonts.heading,
        },
        closeButton: {
          borderRadius: "50%",
          _hover: {
            border: "1px solid",
            borderColor: "gray.200",
          },
          ...pinkRing,
        },
      },
    },
  },
});

export default theme;
