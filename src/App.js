
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPage from "./components/AuthenticationPage/AuthenticationPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticationPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
