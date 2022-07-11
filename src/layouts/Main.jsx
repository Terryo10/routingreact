import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
