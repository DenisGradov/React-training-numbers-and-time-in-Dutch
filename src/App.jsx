import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nummer from "./components/Nummer";
import Menu from "./components/Menu/";
import Tujd from "./components/Tujd";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/nummer" element={<Nummer />} />
          <Route path="/tujd" element={<Tujd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
