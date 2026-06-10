import "./Proyect.css";
import poliGamarImg from "../../assets/PoliGamer.png"; 

export const Proyect = () => {
  return (
    <section className="proyect" id="project">
      {}
      <h1 className="proyect__main-title">Proyectos</h1>
      
      <div className="proyect__container">
        <div className="proyect__card">
          <img src={poliGamarImg} alt="Proyecto personal de David Saragay" className="proyect__img" />
          
          <div className="proyect__content">
            {}
            <h2 className="proyect__title">Mis Proyectos</h2>
            
            <p className="proyect__description">
              Aquí comparto los sistemas y aplicaciones que he desarrollado. Cada trabajo refleja mi enfoque
              en la lógica, el manejo de datos y la creación de software útil y funcional.
            </p>

            <div className="proyect__buttons">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Ver demo
              </a>
              <a 
                href="https://github.com/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyect;