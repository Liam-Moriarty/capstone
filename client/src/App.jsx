import { useState, useEffect } from "react";
import { Navbar, ToggleMode } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Adoption, Rescue, Blogs } from "./pages";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  const storedMode = localStorage.getItem("themeMode");
  const [mode, setMode] = useState(storedMode || "dark");

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(mode);
  }, [mode]);

  useEffect(() => {
    // Set initial theme mode when component mounts
    const initialMode = localStorage.getItem("themeMode") || "dark";
    setMode(initialMode);
  }, []);

  return (
    <ThemeProvider value={{ mode, toggleTheme }}>
      <Router>
        <Navbar />
        <main className="relative dark:bg-primary bg-light-primary">
          <ToggleMode />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/rescue" element={<Rescue />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
