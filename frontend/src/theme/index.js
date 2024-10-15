import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#076F78",
      contrastText: "#FFFFFF", // Ensures that text is visible on the primary color background
    },
    background: {
      default: "#FFFFFF", // Primary background color
      paper: "#F9F9F9", // For cards or paper elements
    },
    grey: {
      100: "#F5F5F5", // Light gray for borders, dividers, or backgrounds
      200: "#E0E0E0", // Slightly darker for secondary elements
      300: "#B0B0B0", // Mid-tone gray for icons or text
      500: "#808080", // Darker gray for text or icons
    },
    text: {
      primary: "#333333", // Dark gray for most text
      secondary: "#808080", // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      color: "#333333", // Headings will use dark gray
    },
    body1: {
      color: "#333333", // Regular text will use dark gray
    },
    body2: {
      color: "#808080", // Secondary text will use a lighter gray
    },
  },
});

export default theme;
