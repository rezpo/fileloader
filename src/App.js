import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import DataGrid from "./pages/DataGrid";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <header className="header__wrapper flex--start">
        <small>This is just a test 🤓</small>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="sheets" element={<DataGrid />} />
      </Routes>
    </div>
  );
}

export default App;
