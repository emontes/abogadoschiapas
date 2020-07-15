import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        #src
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {file:{childImageSharp:{fluid}}} = useStaticQuery(query)
 
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Rafael Angel</h1>
          <h2>Montes Araujo</h2>
          <h4>Abogado Titular de Servicios Integrales Monar</h4>
          <Link to='/contacto' className="btn">
            Contácteme
          </Link>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
