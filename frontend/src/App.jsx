import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Page from "./components/Page";

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;
