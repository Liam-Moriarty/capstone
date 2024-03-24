import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Adoption, Rescue, Blogs } from "./pages";
const App = () => {
  return (
    <Router>
      <main className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/rescue" element={<Rescue />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
