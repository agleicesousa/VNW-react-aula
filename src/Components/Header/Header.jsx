import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logoLivro from "../../assets/logoLivro.png";
import s from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className={s.header}>
      {/* Top Row - Mobile & Desktop */}
      <section className={s.topRow}>
        <button 
          className={s.burgerMenu} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <Link to="/" className={s.logoLink}>
          <section className={s.logoHeader}>
            <img
              src={logoLivro}
              alt="Logo Livros Vai na Web"
              className={s.logoImage}
            />
            <h1 className={s.logoText}>Livros Vai na Web</h1>
          </section>
        </Link>

        <div className={s.actions}>
          <button
            className={s.searchButton}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Buscar"
          >
            {searchOpen ? <FaTimes size={20} /> : <FaSearch size={20} />}
          </button>
        </div>
      </section>

      {/* Menu de navegação */}
      <nav className={`${s.navHeader} ${menuOpen ? s.active : ""}`}>
        <ul>
          <li>
            <Link className={s.link} to="/" onClick={() => setMenuOpen(false)}>
              Início
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to="/livros-doados"
              onClick={() => setMenuOpen(false)}
            >
              Livros Doados
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to="/quero-doar"
              onClick={() => setMenuOpen(false)}
            >
              Quero Doar
            </Link>
          </li>
        </ul>
      </nav>

      {/* Barra de busca - Desktop (sempre visível) */}
      <section className={s.desktopSearch}>
        <div className={s.barraDeBusca}>
          <input
            type="search"
            placeholder="O que você procura?"
            className={s.searchInput}
          />
          <button className={s.searchSubmit} type="submit">
            <FaSearch size={16} />
          </button>
        </div>
      </section>

      {/* Barra de busca - Mobile (apenas quando aberta) */}
      <section className={`${s.mobileSearch} ${searchOpen ? s.active : ""}`}>
        <div className={s.barraDeBusca}>
          <input
            type="search"
            placeholder="O que você procura?"
            className={s.searchInput}
          />
          <button className={s.searchSubmit} type="submit">
            <FaSearch size={16} />
          </button>
        </div>
      </section>
    </header>
  );
}
