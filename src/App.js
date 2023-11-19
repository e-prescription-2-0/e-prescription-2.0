
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegisterIntroduction from "./components/LoginRegisterIntroduction/LoginRegisterIntroduction";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegisterIntroduction/>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
