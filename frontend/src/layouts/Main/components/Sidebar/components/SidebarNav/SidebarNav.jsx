import { Box, Button, useTheme } from "@mui/material";
import NavItem from "./components/NavItem";

import LogoType from "../../../../../../../public/logo-type.png";

const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={"flex"}
          component="a"
          href="/"
          title="home"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={"img"}
            src={mode === "light" ? LogoType : LogoType}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={"Home"} href="/" id={"home"} />
        </Box>
        <Box>
          <NavItem title={"Dashboard"} href="/dashboard" id={"dashboard"} />
        </Box>
        <Box>
          <NavItem title={"Books"} href="/books" id={"books"} />
        </Box>
        <Box>
          <NavItem title={"Overdues"} href="/overdues" id={"overdues"} />
        </Box>
        <Box>
          <NavItem title={"FAQs"} href="/faqs" id={"faqs"} />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="/login"
            size="large"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
