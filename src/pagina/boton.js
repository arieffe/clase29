import React, { useState } from "react";
export default function App() {
  /*Estado para mostrar u ocultar*/
  const [mostrarComponente, setMostrarComponente] = useState(true);
  return (
    <>
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Ocultar` : `sorpresa`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && <h1>adios vuelva pronto!!!</h1>}
      </div>
    </>
  );
}