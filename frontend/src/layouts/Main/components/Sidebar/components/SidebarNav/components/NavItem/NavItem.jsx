import { useState, useEffect } from "react";
import { Box, Button, alpha, useTheme } from "@mui/material";

const NavItem = ({ title, id, href }) => {
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        aria-describedby={id}
        sx={{ cursor: "pointer" }}
      >
        <Button
          component={"a"}
          href={href}
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color:
              activeLink === href
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            backgroundColor:
              activeLink === href
                ? alpha(theme.palette.primary.main, 0.1)
                : "transparent",
            fontWeight: activeLink === href ? 600 : 400,
          }}
        >
          {title}
        </Button>
      </Box>
    </Box>
  );
};

export default NavItem;
