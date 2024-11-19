
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/header';
import Home from './Pages/Home/home';
import LivrosDoados from './Pages/LivrosDoados/livrosDoados';
import QueroDoar from './Pages/QueroDoar/queroDoar';
import Footer from './Components/Footer/footer';

export default function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/livros-doados' element={<LivrosDoados />} />
          <Route path='/quero-doar' element={<QueroDoar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}