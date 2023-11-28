import "./App.css";
import Popup from "./components/Popup/Popup";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeView from "./components/WelcomeView/WelcomeView";
import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomeView} />
        <Route path="/popup" component={Popup} />
        <Route path="/loading" component={Loading} />

      </Switch>
    </Router>
  );
};

export default App;
