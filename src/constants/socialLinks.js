import React from "react"
import {
  FaFacebookSquare, FaWhatsappSquare
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon" alt="Facebook"/>,
    url: "https://www.facebook.com/rafaelangel.montesaraujo",
    title: 'Facebook'
  },
  {
    id: 2,
    icon: <FaWhatsappSquare className="social-icon" alt="Whatsapp"/>,
    url: 'https://api.whatsapp.com/send?phone=5219613363875&amp;text=&amp;source=&amp;data=" target="_blank" data-content="https://api.whatsapp.com/send?phone=5219613363875&amp;text=&amp;source=&amp;data=" data-type="external" rel="noopener"',
    title: 'Whatsapp'
  },
  
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" title={link.title}>
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
