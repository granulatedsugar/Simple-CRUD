import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registration from "./views/Registration";
import Ranking from "./views/PlayerRank";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/player-ranking" element={<Ranking />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
