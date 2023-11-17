
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegisterPage from "./LoginRegisterPage/LoginRegisterPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegisterPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
