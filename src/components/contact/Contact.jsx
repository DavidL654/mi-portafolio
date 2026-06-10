import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__main-title">Contáctame</h1>
      
      <div className="contact__container">
        {/* Columna Izquierda: Formulario */}
        <div className="contact__form-card">
          <h2 className="contact__subtitle">Envíanos un Mensaje</h2>
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre..." />
            
            <label>Email</label>
            <input type="email" placeholder="ejemplo@correo.com" />
            
            <label>Asunto</label>
            <input type="text" placeholder="¿En qué te puedo ayudar?" />
            
            <label>Mensaje</label>
            <textarea rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
            
            <button type="submit" className="btn-send">Enviar Mensaje</button>
          </form>
        </div>

        {/* Columna Derecha: Mapa y Detalles */}
        <div className="contact__info-col">
          <div className="contact__map">
            {/* Reemplaza la URL del src con el embed real de tu ubicación */}
            <iframe 
              src="https://www.google.com/maps?q=Conocoto%2C%20Quito%2C%20Ecuador&z=13&output=embed" 
              allowFullScreen="" 
              loading="lazy" 
              title="Ubicación La Merced"
            ></iframe>
          </div>
          
          <div className="contact__details">
            <div className="contact__item">
              <span>📍</span> 
              <p><strong>Ubicación</strong><br/>Conocoto, Quito, Ecuador</p>
            </div>
            <div className="contact__item">
              <span>✉️</span> 
              <p><strong>Email</strong><br/>luis.saragay@epn.edu.ec</p>
            </div>
            <div className="contact__item">
              <span>📞</span> 
              <p><strong>Teléfono</strong><br/>0980944665</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;