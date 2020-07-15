import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import AreaJuridica from "../components/AreaJuridica";
import Services from "../components/Services";
import SEO from "../components/SEO";
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title="Servicios"
        description="Servicios que ofrece la firma Servicios Integrales Monar en Tuxtla Gutiérrez, Chiapas."
      />
      <Services />
      <section className="section">
        <div className="section-center">
          No nos vemos simplemente como 'abogados' sino que siempre nos
          esforzaremos por ser el asesor de confianza de nuestros clientes, ya
          sea en un contexto comercial o personal. Brindamos servicios
          adicionales mucho más allá de los que se pueden esperar de una firma
          de abogados.
        </div>
      </section>
      <AreaJuridica />
    </Layout>
  );
};

export default ProjectsPage;
