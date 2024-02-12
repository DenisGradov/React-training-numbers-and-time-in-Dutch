import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nummer from "./components/Nummer";
import Menu from "./components/Menu/";
import Tujd from "./components/Tujd";
function App() {
  return (
    <BrowserRouter basename="/React-training-numbers-and-time-in-Dutch/">
      <div className="App">
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/nummer" element={<Nummer />} />
          <Route path="/tujd" element={<Tujd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
