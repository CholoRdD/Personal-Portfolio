import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Sections/Header";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black bg-cover h-[300vh]">
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          showNavBar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <NavBar />
      </div>
      <Header />
    </div>
  );
}

export default App;
