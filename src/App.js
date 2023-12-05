import "./App.css";
import Popup from "./components/Popup/Popup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WelcomeView from "./components/WelcomeView/WelcomeView";
import MainDashboard from "./components/MainDashboard/MainDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<WelcomeView/>} />
        <Route path="/popup" element={<Popup/>} />
        <Route path="/dashboard" element={<MainDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
