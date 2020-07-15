import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";
import SEO from "../components/SEO";
import Services from "../components/Services";
// ...GatsbyImageSharpFluid
const About = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Acerca de Monar"
        description="Servicios Integrales Mnar se integra por diversos profesionistas y profesionales especializados, desde hace más de 20 años."
      />
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            fluid={data.file.childImageSharp.fluid}
            className="about-img"
          />
          <article className="about-text">
            <Title title="Servicios Integrales Monar" />
            <p>
              Considerando que la época actual requiere que los Empresarios
              cuenten con una adecuada asesoría desde el inicio de la relación
              comercial con sus clientes hasta la recuperación total de su
              cartera, pasando por la implantación de medidas de control interno
              que les permitan contar con información veraz, confiable y
              oportuna para supervisar adecuadamente sus empresas, por la
              presente, nos permitimos presentar a sus finas atenciones al
              despacho “SERVICIOS INTEGRALES MONAR” siendo integrado por
              diversos profesionistas y profesionales especializados, desde hace
              más de veinte años.
            </p>

            <div className="about-stack">
              <span>Jurídico</span>
              <span>Corporativo</span>
              <span>Financiero</span>
              <span>Contable</span>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section-center">
          De la misma forma, ponemos a sus apreciables ordenes nuestros
          servicios de elaboración de proyectos y trámites de crédito,
          auditorias, cursos de capacitación y cobranza extrajudicial en todo el
          Estado de Chiapas.
        </div>
      </section>
      <Services />
    </Layout>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "acerca-abogado.jpg" }) {
      childImageSharp {
        fluid {
          #src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default About;
