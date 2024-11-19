
import { Link } from 'react-router-dom';
import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png';

import s from './header.module.scss';

export default function Header() {
    return (
        <>
            <header className={s.header} >
                <section className={s.logoHeader} >
                    <img src={logoLivro} alt='Imagem de um livro branco com fundo azul' />
                    <h1>Livro Vai Na Web</h1>
                </section>
                <nav className={s.navHeader} >
                    <ul>
                        <li><Link className={s.link} to='/'>Inicio</Link></li>
                        <li><Link className={s.link} to='/livros-doados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/quero-doar'>Quero doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraDeBusca} >
                    <input type='search' name='' id='' placeholder='O que você procura?' />
                    <button>
                        <img src={lupa} alt='Ícone de lupa' />
                    </button>
                </section>
            </header>
        </>
    );
}