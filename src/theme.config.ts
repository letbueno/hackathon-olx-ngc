import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#6E0AD6",
  secondary: {
    orange: "#F28000",
    purple: "rgb(134, 27, 169)",
  },
  text: {
    heading: "#4f4f4f",
    description: "#d2d2d2",
  },
  green: "#8CE563",
  border: "#d2d2d2",
  background: "#f6f6f6",
};

const fonts = {
  body: "Nunito Sans, Arial, Helvetica, sans-serif",
  heading: "Nunito Sans, Arial, Helvetica, sans-serif",
};

export const theme = extendTheme({ colors, fonts });
