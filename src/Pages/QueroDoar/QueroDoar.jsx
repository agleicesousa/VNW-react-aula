import { useState } from "react";
import { toast } from "react-hot-toast";
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

  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setDadosFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const lidarComEnvio = async (e) => {
    e.preventDefault();

    // Validação leve no front
    const camposObrigatorios = ['titulo', 'categoria', 'autor', 'url_imagem'];
    const camposVazios = camposObrigatorios.filter(campo => !dadosFormulario[campo].trim());

    if (camposVazios.length > 0) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const extensaoImagemValida = /\.(jpg|jpeg|png|webp)$/i.test(dadosFormulario.url_imagem);
    if (!extensaoImagemValida) {
      toast.error("A URL da imagem deve terminar com .jpg, .jpeg, .png ou .webp");
      return;
    }

    setEnviando(true);

    try {
      const dadosParaEnviar = {
        titulo: dadosFormulario.titulo,
        categoria: dadosFormulario.categoria,
        autor: dadosFormulario.autor,
        image_url: dadosFormulario.url_imagem
      };

      await livroService.create(dadosParaEnviar);

      toast.success("Livro cadastrado com sucesso!");

      setDadosFormulario({
        titulo: "",
        categoria: "",
        autor: "",
        url_imagem: ""
      });
    } catch (erro) {
      const erroBack = erro.response?.data;
      let mensagem = "Erro ao cadastrar livro";

      if (erroBack?.detalhes) {
        const camposComErro = Object.entries(erroBack.detalhes)
          .map(([campo, mensagens]) => `${campo}: ${mensagens.join(", ")}`)
          .join(" | ");
        mensagem = camposComErro;
      } else if (erroBack?.erro) {
        mensagem = erroBack.erro;
      }

      toast.error(mensagem);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className={s.secaoQueroDoar}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form className={s.formularioDoacao} onSubmit={lidarComEnvio}>
        <div className={s.cabecalhoFormulario}>
          <img src={iconeLivro} alt="Ícone de livro aberto com borda azul" />
          <h2>Informações do Livro</h2>
        </div>

        <input
          type="text"
          name="titulo"
          placeholder="Título"
          className={s.campoFormulario}
          value={dadosFormulario.titulo}
          onChange={lidarComMudanca}
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          className={s.campoFormulario}
          value={dadosFormulario.categoria}
          onChange={lidarComMudanca}
        />

        <input
          type="text"
          name="autor"
          placeholder="Autor"
          className={s.campoFormulario}
          value={dadosFormulario.autor}
          onChange={lidarComMudanca}
        />

        <input
          type="text"
          name="url_imagem"
          placeholder="Link da Imagem"
          className={s.campoFormulario}
          value={dadosFormulario.url_imagem}
          onChange={lidarComMudanca}
        />

        <button
          type="submit"
          className={s.botaoDoar}
          disabled={enviando}
        >
          {enviando ? "Enviando..." : "Doar"}
        </button>
      </form>
    </section>
  );
}
