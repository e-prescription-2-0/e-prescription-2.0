import { Route, Routes } from 'react-router-dom'

import { Welcome } from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
