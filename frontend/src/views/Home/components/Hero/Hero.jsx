import {
  useTheme,
  useMediaQuery,
  Box,
  Button,
  Typography,
} from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h3"
            color="text.primary"
            align={"center"}
            sx={{
              fontWeight: 700,
            }}
          >
            Welcome to Akademiiya Library.
            <br />
            Discover Knowledge, Fuel Your Curiosity.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={"center"}
          >
            At Akademiya Library, we believe that every book opens a new world.
            Explore our extensive collection of books, journals, and multimedia
            resources that cater to readers of all ages and interests. Whether
            you&apos;re a student, researcher, or a casual reader, Akademiya
            Library is your gateway to endless knowledge.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretched", sm: "center" }}
          justifyContent={"center"}
        >
          <Button
            component={"a"}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={"/books"}
            target={"_blank"}
          >
            Search Titles
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: "100%", md: "auto" }}
          >
            <Button
              component={"a"}
              href={"/login"}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Create an Account
            </Button>
          </Box>
        </Box>
      </Box>
      {/* TODO: Display books */}
    </Box>
  );
};

export default Hero;
