import { useState, useEffect } from "react";
import livroProtagonista from "../../assets/livroProtagonista.png";
import s from "./livrosDoados.module.scss";
import { livroService } from "../../services/app";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        setCarregando(true);
        const dados = await livroService.getAll();
        setLivros(dados);
        setErro(null);
      } catch (err) {
        console.error("Erro ao carregar livros:", err);
        setErro("Erro ao carregar livros. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    };

    buscarLivros();
  }, []);

  return (
    <>
      <section className={s.livrosDoadosSection}>
        <h2>Livros Doados</h2>

        <section className={s.containerCards}>
          <section>
            <img
              src={livroProtagonista}
              alt="Imagem do livro O Protagonista"
            />
            <div>
              <h3>O protagonista</h3>
              <p>Susanne Andrade</p>
              <p>Ficção</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
