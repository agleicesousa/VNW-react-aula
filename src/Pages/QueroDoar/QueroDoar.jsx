import { useState } from "react";
import iconeLivro from "../../assets/iconeLivro.png";
import s from "./queroDoar.module.scss";
import { livroService } from "../../services/app";

export default function QueroDoar() {
  const [dadosFormulario, setDadosFormulario] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    url_imagem: ""
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemEnvio, setMensagemEnvio] = useState("");

  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setDadosFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const lidarComEnvio = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensagemEnvio("");

    try {
      await livroService.create(dadosFormulario);
      setMensagemEnvio("Livro cadastrado com sucesso!");
      setDadosFormulario({
        titulo: "",
        categoria: "",
        autor: "",
        url_imagem: ""
      });

    } catch (erro) {
      setMensagemEnvio("Erro ao cadastrar livro. Por favor, tente novamente.");
      console.error("Erro no cadastro:", erro);
      
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form className={s.donationForm}>
        <div className={s.formHeader}>
          <img
            src={iconeLivro}
            alt="Ícone de livro aberto com borda azul"
          />
          <h2>Informações do Livro</h2>
        </div>

        <input
          type="text"
          placeholder="Título"
          className={s.formInput}
        />

        <input 
          type="text" 
          placeholder="Categoria" 
          className={s.formInput} 
        />
        
        <input 
          type="text" 
          placeholder="Autor" 
          className={s.formInput} 
        />
        
        <input 
          type="text" 
          placeholder="Link da Imagem" 
          className={s.formInput} 
        />
        
        <button 
          type="submit" 
          className={s.buttonDoar}
        >
          Doar
        </button>
      </form>
    </section>
  );
}
