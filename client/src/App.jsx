import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Adoption, Rescue } from "./pages";
const App = () => {
  return (
    <Router>
      <main className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/rescue" element={<Rescue />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
