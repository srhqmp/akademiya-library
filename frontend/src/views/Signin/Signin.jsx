import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Main from "../../layouts/Main";
import { Form } from "./components";

const SigninSimple = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        position={"relative"}
        minHeight={"calc(100vh - 247px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={1}
      >
        <Box maxWidth={600} padding={isMd ? 0 : 2}>
          <Form />
        </Box>
      </Box>
    </Main>
  );
};

export default SigninSimple;
