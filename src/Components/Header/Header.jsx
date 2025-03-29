import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logoLivro from "../../assets/logoLivro.png";
import s from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={s.header}>
      <section className={s.topRow}>
        <button 
          className={s.burgerMenu} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <Link to="/" className={s.logoLink}>
          <figure className={s.logoHeader}>
            <img
              src={logoLivro}
              alt="Logo Livros Vai na Web"
              className={s.logoImage}
              width="50"
              height="50"
            />
            <figcaption className={s.logoText}>Livros Vai na Web</figcaption>
          </figure>
        </Link>

        <menu className={s.actions}>
          <li>
            <button
              className={s.searchButton}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
              aria-expanded={searchOpen}
            >
              {searchOpen ? <FaTimes size={20} /> : <FaSearch size={20} />}
            </button>
          </li>
        </menu>
      </section>

      <nav className={`${s.navHeader} ${menuOpen ? s.active : ""}`} aria-label="Navegação principal">
        <ul>
          <li>
            <Link 
              className={`${s.link} ${isActive("/") ? s.activeLink : ""}`} 
              to="/" 
              onClick={() => setMenuOpen(false)}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className={`${s.link} ${isActive("/livros-doados") ? s.activeLink : ""}`}
              to="/livros-doados"
              onClick={() => setMenuOpen(false)}
              aria-current={isActive("/livros-doados") ? "page" : undefined}
            >
              Livros Doados
            </Link>
          </li>
          <li>
            <Link
              className={`${s.link} ${isActive("/quero-doar") ? s.activeLink : ""}`}
              to="/quero-doar"
              onClick={() => setMenuOpen(false)}
              aria-current={isActive("/quero-doar") ? "page" : undefined}
            >
              Quero Doar
            </Link>
          </li>
        </ul>
      </nav>

      <section className={s.desktopSearch} aria-label="Barra de pesquisa">
        <form role="search">
          <div className={s.barraDeBusca}>
            <input
              type="search"
              placeholder="O que você procura?"
              className={s.searchInput}
              aria-label="Pesquisar livros"
            />
            <button className={s.searchSubmit} type="submit" aria-label="Enviar pesquisa">
              <FaSearch size={16} />
            </button>
          </div>
        </form>
      </section>

      {searchOpen && (
        <section className={s.mobileSearch} aria-label="Barra de pesquisa móvel">
          <form role="search">
            <div className={s.barraDeBusca}>
              <input
                type="search"
                placeholder="O que você procura?"
                className={s.searchInput}
                aria-label="Pesquisar livros"
              />
              <button className={s.searchSubmit} type="submit" aria-label="Enviar pesquisa">
                <FaSearch size={16} />
              </button>
            </div>
          </form>
        </section>
      )}
    </header>
  );
}
