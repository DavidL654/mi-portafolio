import "./education.css";

const educationData = [
  {
    id: 1,
    institution: "Galo Plaza Lasso",
    degree: "Educación Primaria",
    period: "2010 — 2016",
    address: "Galo Plaza Lasso, Quito, Ecuador",
    status: "Finalizado",
    type: "primaria",
    icon: "📚",
  },
  {
    id: 2,
    institution: "Colegio Técnico Sucre",
    degree: "Bachillerato en Electromecánica",
    period: "2016 — 2022",
    address: "Colegio Técnico Sucre, Quito, Ecuador",
    status: "Finalizado",
    type: "bachillerato",
    icon: "🔧",
  },
  {
    id: 3,
    institution: "Escuela Politécnica Nacional",
    degree: "Tecnología Superior en Desarrollo de Software",
    period: "2024 — En curso",
    address: "Av. Ladrón de Guevara E11-253, Quito",
    status: "En curso",
    type: "superior",
    icon: "💻",
  },
];

export const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <p className="education__subtitle">EDUCACIÓN</p>
        <h2 className="education__title">Formación Académica</h2>

        <div className="education__timeline">
          {educationData.map((item, index) => (
            <div className={`education__item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.id}>
              <div className="education__dot">
                <span>{item.icon}</span>
              </div>
              <div className="education__card">
                <span className={`education__badge ${item.status === "En curso" ? "active" : "done"}`}>
                  {item.status}
                </span>
                <h3 className="education__card-institution">{item.institution}</h3>
                <p className="education__card-degree">{item.degree}</p>
                <div className="education__card-meta">
                  <span>📅 {item.period}</span>
                  <span>📍 {item.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;