import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nummer from "./components/Nummer";
import Menu from "./components/Menu/";
import Tijd from "./components/Tijd";
import Tijden from "./components/Tijden";
import NietNormalWerkworden from "./components/NietNormalWerkworden";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/nummer" element={<Nummer />} />
          <Route path="/Tijd" element={<Tijd />} />
          <Route path="/tijden" element={<Tijden />} />
          <Route
            path="/NietNormalWerkworden"
            element={<NietNormalWerkworden />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
