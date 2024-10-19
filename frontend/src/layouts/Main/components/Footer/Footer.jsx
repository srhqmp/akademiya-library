import { Grid2 as Grid, Box, Link, Typography, useTheme } from "@mui/material";

import LogoType from "../../../../assets/logo-type.png";
import LogoTypeDark from "../../../../assets/logo-type-dark.png";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box display={"flex"} component="a" href="/" title="Home" width={80}>
            <Box
              component={"img"}
              src={mode === "light" ? LogoType : LogoTypeDark}
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle2"}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/books"
                color="text.primary"
                variant={"subtitle2"}
              >
                Books
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
          gutterBottom
        >
          &copy; Akademiya Library. 2024. All rights reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="text.secondary"
          component={"p"}
        >
          srhqmp
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
