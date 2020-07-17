import React from "react";

const Forma = () => {
  return (
    
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contáctenos</h3>
          <form action="https://formspree.io/meqrperq" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="nombre"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Deje su mensaje"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Enviar Forma
            </button>
          </form>
        </article>
      </section>
    
  );
};

export default Forma;
