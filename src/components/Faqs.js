import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiFaqs(sort: {fields: orden, order: ASC}) {
      nodes {
        id 
        orden
        title
        pregunta
        respuesta
      }
    }
  }
`

const Faqs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiFaqs: { nodes: faqs },
  } = data
  const [value, setValue] = React.useState(0)
  const { id, title, pregunta, respuesta  } = faqs[value]

  return (
    <section className="section jobs">
      <Title title="Preguntas Frecuentes" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {faqs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
        {/* jo;b info */}
        <article className="job-info">
          <h4>{pregunta}</h4>
          <p>{respuesta}</p>
        </article>
      </div>
      
    </section>
  )
}

export default Faqs

