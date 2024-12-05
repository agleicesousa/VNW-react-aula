
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './components/globalStyle/globalStyle.scss'

import Header from './Components/Header/header';
import Home from './Pages/Home/home';
import LivrosDoados from './pages/livrosDoados/LivrosDoados';
import QueroDoar from './pages/queroDoar/QueroDoar';
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