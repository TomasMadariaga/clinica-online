import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>Información</li>
        <li>
          <a href="#">Sobre nosotros</a>
        </li>
        <li>
          <a href="#">Política de privacidad</a>
        </li>
        <li>
          <a href="#">Términos y condiciones</a>
        </li>
      </ul>
      <ul>
        <li>Servicios</li>
        <li>
          <a href="#">Análisis clínicos</a>
        </li>
        <li>
          <a href="#">Guardia médica online</a>
        </li>
        <li>
          <a href="#">Mi especialista online</a>
        </li>
        <li>
          <a href="#">Vacunas</a>
        </li>
      </ul>
      <ul className="lista">
        <li className="links">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
