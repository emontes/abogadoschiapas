import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>SEXTA PONIENTE NORTE No. 1371, BARRIO NIÑO DE ATOCHA, TUXTLA GUTIERREZ, CHIAPAS.</p>
        <h3>Tel: 961-613-5096 / Cel: 961-142-0097</h3>
        <SocialLinks styleClass="footer-links" />
        <h4>
          derechos reservados &copy;{new Date().getFullYear()}
          <span> MonAr </span> Abogados en Chiapas
        </h4>
      </div>
    </footer>
  )
}

export default Footer
