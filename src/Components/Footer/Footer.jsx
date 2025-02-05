import logoFacebook from "../../assets/logoFacebook.png";
import logoTwitter from "../../assets/logoTwitter.png";
import logoYoutube from "../../assets/logoYoutube.png";
import logoLinkedin from "../../assets/logoLinkedin.png";
import logoInstagram from "../../assets/logoInstagram.png";
import s from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href="#">
            <img src={logoFacebook} alt="Logo do Facebook" />
          </a>
          <a href="#">
            <img src={logoTwitter} alt="Logo do Twitter" />
          </a>
          <a href="#">
            <img src={logoYoutube} alt="Logo do Youtube" />
          </a>
          <a href="#">
            <img src={logoLinkedin} alt="Logo do Linkedin" />
          </a>
          <a href="#">
            <img src={logoInstagram} alt="Logo do Instagram" />
          </a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
