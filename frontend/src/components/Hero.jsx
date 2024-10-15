import {
  Container,
  Card,
  Button,
  Box,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";

import LogoType from "../../public/logo-type.png";
import LogoImg from "../../public/logo-akademiya.png";

export default function Hero() {
  return (
    <Box sx={{ p: 5, mt: { xs: 2, md: 20 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: { md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={LogoType}
          alt="Logo"
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={LogoImg}
          alt="Logo"
          sx={{ display: { xs: "block", md: "none" }, margin: "auto", py: 6 }}
        />
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ lineHeight: 1.5 }}
            >
              Your Gateway to Knowledge and Innovation
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 2.1 }}
            >
              Welcome to Akademiya Library, where knowledge meets innovation.
              Explore a vast collection of books, research materials, and
              resources designed to inspire learning and discovery. Whether
              you're a student, researcher, or curious mind, Akademiya Library
              is your hub for intellectual growth and creative exploration.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" component="a" href="/login">
              Login
            </Button>
            <Button variant="outlined" component="a" href="/signup">
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}
