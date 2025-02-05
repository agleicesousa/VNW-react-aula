import { Link } from "react-router-dom";
import logoLivro from "../../assets/logoLivro.png";
import lupa from "../../assets/lupaHeader.png";
import s from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header>
        <section className={s.logoHeader}>
          <img
            src={logoLivro}
            alt="Imagem de uma ilustração de um livro aberto com capa azul"
          />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/livros-doados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/quero-doar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={lupa} alt="Imagem deu uma lupa branca" />
          </button>
        </section>
      </header>
    </>
  );
}
