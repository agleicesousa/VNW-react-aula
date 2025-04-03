import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logoLivro from "../../assets/logoLivro.png";
import s from "./header.module.scss";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [estaRolando, setEstaRolando] = useState(false);
  const [termoBusca, setTermoBusca] = useState("");
  const localizacao = useLocation();
  const navegar = useNavigate();

  const estaAtivo = (caminho) => localizacao.pathname === caminho;

  useEffect(() => {
    const aoRolar = () => {
      setEstaRolando(window.scrollY > 10);
    };
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  const alternarMenuEBusca = (estadoMenu, estadoBusca) => {
    setMenuAberto(estadoMenu);
    setBuscaAberta(estadoBusca);
  };

  const realizarBusca = (e) => {
    e.preventDefault();
    if (termoBusca.trim()) {
      navegar(`/livros-doados?q=${encodeURIComponent(termoBusca)}`);
      setTermoBusca("");
      setBuscaAberta(false);
    }
  };

  return (
    <header className={`${s.header} ${estaRolando ? s.scrolled : ''}`}>
      <div className={s.container}>
        <section className={s.topRow}>
          <button 
            className={s.burgerMenu} 
            onClick={() => alternarMenuEBusca(!menuAberto, false)}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            aria-controls="navegacao-principal"
          >
            {menuAberto ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <Link to="/" className={s.logoLink} onClick={() => setMenuAberto(false)}>
            <figure className={s.logoHeader}>
              <img
                src={logoLivro}
                alt="Logo Livros Vai na Web"
                className={s.logoImage}
                width="50"
                height="50"
                loading="lazy"
              />
              <figcaption className={s.logoText}>Livros Vai na Web</figcaption>
            </figure>
          </Link>

          <menu className={s.actions}>
            <li>
              <button
                className={s.searchButton}
                onClick={() => alternarMenuEBusca(false, !buscaAberta)}
                aria-label="Buscar"
                aria-expanded={buscaAberta}
                aria-controls="busca-mobile"
              >
                {buscaAberta ? <FaTimes size={20} /> : <FaSearch size={20} />}
              </button>
            </li>
          </menu>
        </section>

        <nav 
          id="navegacao-principal"
          className={`${s.navHeader} ${menuAberto ? s.active : ""}`} 
          aria-label="Navegação principal"
        >
          <ul>
            <li>
              <Link 
                className={`${s.link} ${estaAtivo("/") ? s.activeLink : ""}`} 
                to="/" 
                onClick={() => setMenuAberto(false)}
                aria-current={estaAtivo("/") ? "page" : undefined}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className={`${s.link} ${estaAtivo("/livros-doados") ? s.activeLink : ""}`}
                to="/livros-doados"
                onClick={() => setMenuAberto(false)}
                aria-current={estaAtivo("/livros-doados") ? "page" : undefined}
              >
                Livros Doados
              </Link>
            </li>
            <li>
              <Link
                className={`${s.link} ${estaAtivo("/quero-doar") ? s.activeLink : ""}`}
                to="/quero-doar"
                onClick={() => setMenuAberto(false)}
                aria-current={estaAtivo("/quero-doar") ? "page" : undefined}
              >
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>

        <section className={s.desktopSearch} aria-label="Barra de pesquisa">
          <form role="search" onSubmit={realizarBusca}>
            <div className={s.barraDeBusca}>
              <input
                type="search"
                placeholder="O que você procura?"
                className={s.searchInput}
                aria-label="Pesquisar livros"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
              <button className={s.searchSubmit} type="submit" aria-label="Enviar pesquisa">
                <FaSearch size={16} />
              </button>
            </div>
          </form>
        </section>

        {buscaAberta && (
          <section 
            id="busca-mobile" 
            className={`${s.mobileSearch} ${buscaAberta ? s.active : ""}`} 
            aria-label="Barra de pesquisa móvel"
          >
            <form role="search" onSubmit={realizarBusca}>
              <div className={s.barraDeBusca}>
                <input
                  type="search"
                  placeholder="O que você procura?"
                  className={s.searchInput}
                  aria-label="Pesquisar livros"
                  autoFocus
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                />
                <button className={s.searchSubmit} type="submit" aria-label="Enviar pesquisa">
                  <FaSearch size={16} />
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
    </header>
  );
}