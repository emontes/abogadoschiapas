import React from "react"
import { FaSistrix, FaCalculator } from "react-icons/fa"
import { GoLaw } from "react-icons/go"
export default [
  {
    id: 1,
    icon: <FaSistrix className="service-icon" />,
    title: "Investigaciones",
    text: ``,
    items: [
      "Socioeconómicas para fines de otorgamiento de crédito locales.",
      "Socioeconómicas para fines de otorgamiento de crédito foráneas.",
      "Sociolaborales para selección y reclutamiento de personal.",
      "Dictámenes de documentación legal."
    ]
  },
  {
    id: 2,
    icon: <FaCalculator className="service-icon" />,
    title: "contabilidad",
    text: ``,
    items: [
      "",
      "",
      "",
      "",
      "Pública",
      "Bancaria",
      "Gubernamental"
    ]
  },
  {
    id: 3,
    icon: <GoLaw className="service-icon" />,
    title: "Área Jurídica",
    text: ``,
    items: [
      "Penal",
      "Civil",
      "Mercantil",
      "Laboral",
      "Administrativa",
      "Familiar"
    ]
  },
]
