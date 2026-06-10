import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {}
        <div className="footer__section">
          <h3>David Saragay</h3>
          <p>Portafolio personal creado para mostrar mi formación, proyectos y habilidades en desarrollo de software.</p>
        </div>

        {}
        <div className="footer__section">
          <h3>Sígueme</h3>
          <div className="footer__social">
            <a href="https://www.facebook.com/beyito.sayayin" target="_blank" rel="noreferrer">
              <FaFacebook className="footer__icon" /> Facebook
            </a>
            <a href="https://github.com/DavidL654" target="_blank" rel="noreferrer">
              <FaGithub className="footer__icon" /> GitHub
            </a>
            <a href="https://www.instagram.com/david_saragay/" target="_blank" rel="noreferrer">
              <FaInstagram className="footer__icon" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2026 David Saragay. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;