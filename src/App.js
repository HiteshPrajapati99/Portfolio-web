import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainheder from "./Components/Navbar/Mainheder";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Services from "./Components/Navbar/Services";
import Portfolio from "./Components/Navbar/Portfolio";
import Page from "./Components/Navbar/Page";
import Contact from "./Components/Navbar/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainheder />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="page" element={<Page />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
