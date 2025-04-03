import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import s from "./livrosDoados.module.scss";
import { livroService } from "../../services/app";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        setCarregando(true);
        setErro(null);
        
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q');
        
        let dados;
        if (query) {
          dados = await livroService.search(query);
        } else {
          dados = await livroService.getAll();
        }
        
        setLivros(dados);
      } catch (err) {
        console.error("Erro ao carregar livros:", err);
        setErro("Erro ao carregar livros. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    };

    buscarLivros();
  }, [location.search]);

  return (
    <>
      <section className={s.livrosDoadosSection}>
        <h2>Livros Doados</h2>

        {/* Mensagens de estado */}
        {carregando && <p className={s.message}>Carregando livros...</p>}
        {erro && <p className={s.errorMessage}>{erro}</p>}
        {!carregando && !erro && livros.length === 0 && (
          <p className={s.message}>Nenhum livro encontrado.</p>
        )}

        <section className={s.containerCards}>
          {livros.map((livro) => (
            <article key={livro.id} className={s.card}>
              <img
                src={livro.image_url}
                alt={`Capa do livro ${livro.titulo}`}
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/300/400';
                  e.target.onerror = null;
                }}
              />
              <div>
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
                <p>{livro.categoria}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
