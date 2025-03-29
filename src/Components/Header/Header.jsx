import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import logoLivro from "../../assets/logoLivro.png";
import s from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header>
      {/* Ícone do menu burger */}
      <div className={s.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars size={24} color="#fff" />
      </div>

      {/* Logo */}
      <section className={s.logoHeader}>
        <img
          src={logoLivro}
          alt="Imagem de uma ilustração de um livro aberto com capa azul"
        />
        <h1>Livros Vai na Web</h1>
      </section>

      {/* Ícone da lupa */}
      <button
        className={s.searchButton}
        onClick={() => setSearchOpen(!searchOpen)}
      >
        <FaSearch size={24} color="#fff" />
      </button>

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

      {/* Barra de busca */}
      <section
        className={`${s.barraDeBusca} ${searchOpen ? s.active : ""}`}
      >
        <input
          type="search"
          placeholder="O que você procura?"
        />
        <button>
          <FaSearch size={20} color="#fff" />
        </button>
      </section>
    </header>
  );
}
