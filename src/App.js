import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./components/Welcome/Welcome";
import  Header  from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
