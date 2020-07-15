import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className="section bg-grey">
    <Title title="Servicios" />
    <div className="section-center services-center">
      {services.map((service) => {
        const {id, icon, title, text, items } = service
        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
          <ul>
            {items.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </article>
      })}
    </div> 
    
  </section>
}

export default Services
