import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Faqs from "../components/Faqs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import AreaJurídica from "../components/AreaJuridica"
import SEO from '../components/SEO'
export default () => {
  return <Layout>
    <SEO 
      title="Servicios Integrales Monar | Derecho Laboral | Derecho Civil" 
      description="Despacho Jurídico Contable en Tuxtla Gutiérrez, Chiapas.  Titular: Rafael Angel Montes Araujo."
      />
    <Hero />
    <AreaJurídica />
    
    <Faqs />
    <Services />
    <section className="section">
        <div className="section-center">
        Nuestros valores fundamentales son la integridad y la confianza, el fomento de la innovación, el trabajo en equipo y el continuo desarrollo personal de todos en la empresa.
        </div>
      </section>
  </Layout>
}
// ...GatsbyImageSharpFluid
