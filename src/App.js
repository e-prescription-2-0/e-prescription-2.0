import "./App.css";
import Popup from "./components/Popup/Popup";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeView from "./components/WelcomeView/WelcomeView";
import DashboardNavigation from "./components/MainDashboard/DashboardNavigation/DashboardNavigation";

const App = () => {
  return (

    
    <Router>
    
      <Routes>
        <Route path="/" exact element={<WelcomeView/>} />
        <Route path="/popup" element={<Popup/>} />
        <Route path="/dashboard" element={<DashboardNavigation/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
