import React from "react"
import Title from "./Title"

import { GoLaw } from "react-icons/go"
import { FaReadme, FaBook, FaBriefcase, FaLandmark } from "react-icons/fa"
import { GiFamilyTree } from "react-icons/gi"
import { MdGavel } from "react-icons/md"

const services = [
    {
        id: 1,
        icon: <GoLaw className="service-icon__big" />,
        title: "Penal"
    },
    {
        id: 2,
        icon: <FaBriefcase className="service-icon__big" />,
        title: "Civil"
    },
    {
        id: 3,
        icon: <FaLandmark className="service-icon__big" />,
        title: "Mercantil"
    },
    {
        id: 4,
        icon: <MdGavel className="service-icon__big" />,
        title: "Laboral"
    },
    {
        id: 5,
        icon: <FaReadme className="service-icon__big" />,
        title: "Administrativa"
    },
    {
        id: 6,
        icon: <GiFamilyTree className="service-icon__big" />,
        title: "Familiar"
    },

]

const AreaJuridica = () => {
  return <section className="section bg-grey">
    <Title title="Area Jurídica" />
    <div className="section-center services-center">
      {services.map((service) => {
        const {id, icon, title } = service
        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          
        </article>
      })}
    </div> 
  </section>
}

export default AreaJuridica
