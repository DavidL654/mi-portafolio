import "./Main.css";
import foto from "../../assets/David.png";

export const Main = () => {
    return (
        <main className="hero">

            <div className="hero__content">

                <p className="hero__subtitle">
                    👋 HOLA, SOY
                </p>

                <h1 className="hero__title">
                    David <span>Saragay</span>
                </h1>

                <h2 className="hero__profession">
                    Estudiante de Desarrollo de Software en la EPN
                </h2>

                <p className="hero__description">
                    Soy estudiante de Desarrollo de Software. Me gusta usar tecnologías modernas
                    para construir sistemas eficientes y útiles. Mi enfoque es escribir código
                    limpio y resolver problemas reales a través de la programación.
                </p>

                <div className="hero__buttons">
                    <a href="#project" className="btn btn-primary">
                        Ver Proyectos
                    </a>
                </div>
            </div>

            <div className="hero__image">
                <img src={foto} alt="David Saragay" />
            </div>

        </main>
    );
};

export default Main;