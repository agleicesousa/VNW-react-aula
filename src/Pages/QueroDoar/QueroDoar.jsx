import iconeLivro from "../../assets/iconeLivro.png";
import s from "./queroDoar.module.scss";

export default function QueroDoar() {
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
        <input type="text" placeholder="Título" className={s.formInput} />
        <input type="text" placeholder="Categoria" className={s.formInput} />
        <input type="text" placeholder="Autor" className={s.formInput} />
        <input type="text" placeholder="Link da Imagem" className={s.formInput} />
        <button type="submit" className={s.buttonDoar}>Doar</button>
      </form>
    </section>
  );
}
