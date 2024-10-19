import {
  Home as HomeView,
  Signin as SigninView,
  Signup as SignupView,
} from "./index";

const routes = [
  {
    path: "/",
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: "/signin",
    renderer: (params = {}) => <SigninView {...params} />,
  },
  {
    path: "/signup",
    renderer: (params = {}) => <SignupView {...params} />,
  },
];

export default routes;
