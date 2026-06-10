import "./About.css";
import softwareImg from "../../assets/ai-coding.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        
        <div className="about__header">
          <p className="about__subtitle">CONÓCEME</p>
          <h2 className="about__title">Sobre Mí</h2>
        </div>

        <div className="about__wrapper">
          <div className="about__image">
            <img src={softwareImg} alt="Desarrollo de Software" />
          </div>

          <div className="about__content">
            <p>
              Soy un estudiante de Desarrollo de Software al que le apasiona entender cómo funcionan
              los sistemas desde adentro. Me enfoco en la lógica, el modelado de bases de datos y
              la construcción de soluciones eficientes.
            </p>
            <p>
              A través de mis proyectos, he ganado experiencia práctica escribiendo código en lenguajes
              como Python y Java, y gestionando bases de datos con SQL. Me considero una persona
              curiosa, siempre dispuesta a aprender nuevas herramientas modernas y a aplicar buenas
              prácticas para crear software que realmente resuelva problemas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;