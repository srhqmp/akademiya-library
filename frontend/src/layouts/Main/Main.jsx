import { useState } from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Divider,
  AppBar,
  useScrollTrigger,
} from "@mui/material";
import { Container } from "../../components";

import { Topbar, Sidebar, Footer } from "./components";

import pages from "../navigation";

const Main = ({ children, colorInvert = false, bgcolor = "transparent" }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <AppBar
        position={"sticky"}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
