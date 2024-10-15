import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

import theme from "./theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomeScreen />
    </ThemeProvider>
  );
}
