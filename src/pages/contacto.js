import React from "react";
import Layout from "../components/Layout";
import Map from "../components/Map";
import Forma from "../components/Contacto/Forma"

const popupContentGatsby = `
<h4>Servicios Integrales Monar</h4>
<p>Sexta Poniente Norte No. 1371, Barrio Niño de Atocha, Tuxtla Gutiérrez, Chiapas</p>
`;

const contact = () => {
  return (
    <Layout>
      <Forma />
      
      <section>
        <div
          style={{
            width: "90%",
            
            margin: "auto",
            border: "1px solid var(--clr-primary-10)",
          }}
        >
          <Map
            lat="16.766535"
            lng="-93.119006"
            zoom={15}
            mensaje={popupContentGatsby}
          />
        </div>
      </section>
    </Layout>
  );
};

export default contact;
