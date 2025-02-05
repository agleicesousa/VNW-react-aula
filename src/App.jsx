import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Components/globalStyle/globalStyle.scss";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import LivrosDoados from "./Pages/LivrosDoados/LivrosDoados";
import QueroDoar from "./Pages/QueroDoar/QueroDoar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros-doados" element={<LivrosDoados />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
