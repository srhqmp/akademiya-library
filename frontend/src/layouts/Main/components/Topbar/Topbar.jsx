import { useState, useEffect } from "react";
import { Box, Button, alpha, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

import { ThemeModeToggler } from "../../../../components";
import { NavItem } from "./components";
import LogoType from "../../../../assets/logo-type.png";
import { UserMenu } from "./components/UserMenu";

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { userInfo } = useSelector((state) => state.auth);

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="home"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={mode === "light" && !colorInvert ? LogoType : LogoType}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box>
          <NavItem title={"Home"} href="/" id={"home"} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"Dashboard"} href="/dashboard" id={"dashboard"} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"Books"} href="/books" id={"books"} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"Overdues"} href="/overdues" id={"overdues"} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"FAQs"} href="/faqs" id={"faqs"} />
        </Box>
        <Box marginLeft={4}>
          {userInfo ? (
            <UserMenu />
          ) : (
            <Box>
              {activeLink === "/signin" ? null : (
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href="/signin"
                  size="small"
                >
                  Login
                </Button>
              )}
            </Box>
          )}
        </Box>
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        alignItems={"center"}
        gap={1}
      >
        <Box>
          {userInfo ? (
            <UserMenu />
          ) : (
            <Box>
              {activeLink === "/signin" ? null : (
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href="/signin"
                  size="small"
                >
                  Login
                </Button>
              )}
            </Box>
          )}
        </Box>
        <Box>
          <ThemeModeToggler />
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
            marginLeft: 1,
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
