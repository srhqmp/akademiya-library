import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

import LogoImg from "../../public/logo-akademiya.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={LogoImg}
              alt="Logo"
              sx={{
                margin: "auto",
              }}
              width={50}
            />
            <Typography
              color="primary.contrastText"
              variant="h5"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Akademiya Library
            </Typography>
          </Box>
          <div>
            <Button color="inherit" variant="a" href="/login">
              Login
            </Button>
            <Button color="inherit" variant="a" href="/signup">
              Sign up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
