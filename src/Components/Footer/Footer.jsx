import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import s from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.contatosFooter}>
        <p className={s.phone}>4002-8922</p>
        <ul className={s.socialLinks}>
          <li>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Linkedin">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
