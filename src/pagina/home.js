import budin from "./budin-de-chocolate.jpg"
import pepas from "./pepas-caseras-de-membrillo-receta-800x450.jpg"
import React, {useState} from "react";

const Boton = () => {
    const [mostrarComponente, setMostrarComponente] = useState(true);
    return (
        <>
          {/*Con un estado adicional le dicen cuando mostrarse o no*/}
          <button onClick={() => setMostrarComponente(!mostrarComponente)}>
            {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
            {mostrarComponente ? `Ver menos` : `Ver más`}
          </button>
          <div className={mostrarComponente ? "show-element" : null}>
            {mostrarComponente && <p>Primero encendemos el horno a 180º, así lo precalentamos.
                Batir los 3 huevos con el azúcar hasta que se vuelva una preparación cremosa. Agregar una taza de harina (solo una) y mezclar bien. Agregar la media taza de aceite y mezclar hasta incorporar del todo.
                Derretir el chocolate en el microondas: picar y colocar un chorrito de agua o café (mejor café). Llevar a microondas por 30 segundos en potencia media. Sacamos y chequeamos su estado revolviéndolo con una cuchara. Otros 30 segundos y así hasta que al revolverlo con la cuchara esté disuelto. ¡Cuidado! es fácil pasarse y que el chocolate se queme con esta técnica.
                Incorporar el chocolate derretido a la preparación de budín de chocolate. También el cacao en polvo, las nueces picadas y la leche. Unir bien.
                En una budinera (puede ser también un molde redondo) enmantecada y enharinada, echamos 1/3 de la mezcla de budín de chocolate. Vamos colocando cucharaditas de dulce de leche con mucho cuidado de que no se hundan.
                Colocamos, muy despacio, otro tercio de la mezcla de budín de chocolate. Hay que hacerlo con cuidado para hundir lo menos posible los pedacitos de dulce de leche. Repetimos la operación con el último tercio de la mezcla para budín de chocolate. Arriba de todo, colocamos más dulce de leche.
                Llevamos a horno en mínimo (160º) por 45 minutos – 1 hora, hasta que se vea dorado por arriba.</p>}
          </div>
        </>
      );
    }
    
const Boton2 = () => {
    const [mostrarComponente, setMostrarComponente] = useState(true);
    return (
        <>
          {/*Con un estado adicional le dicen cuando mostrarse o no*/}
          <button onClick={() => setMostrarComponente(!mostrarComponente)}>
            {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
            {mostrarComponente ? `Ver menos` : `Ver más`}
          </button>
          <div className={mostrarComponente ? "show-element" : null}>
            {mostrarComponente && <p>En un bol, mezclar la harina, el azúcar y el polvo de hornear. Agregar la manteca fría en trozos y desmenuzar con los dedos hasta obtener una textura arenosa.
                Añadir el huevo y amasar hasta obtener una masa homogénea.
                Envolver la masa en papel film y refrigerar durante 30 minutos. Mientras tanto precalentar el horno a 180°C.
                Tomar pequeñas porciones y hacer bolitas de masa. Colocar sobre una placa enmantecada y enharinada (o con papel manteca) y aplastar levemente cada bolita, haciendo un huequito en el centro con una cuchara o con el pulgar. 
                Mezclar el dulce de membrillo con las dos cucharadas de agua hirviendo y revolver hasta que se forme una pasta. Rellenar los huecos de las pepas con el membrillo. espolvorear con azúcar por encima (opcional)
                Hornear durante 15-20 minutos. Dejar enfriar sobre una rejilla y ¡a disfrutar de estas deliciosas pepas caseras!</p>}
          </div>
        </>
      );
    }
    
const Home = () => {

    return (
        <div className="home">
            <h1>RECETAS RÁPIDAS Y FÁCILES</h1>
            
            <div className="receta1">
                <h4>Budín de chocolate</h4>
            <img src={budin}></img>
                <ul>Ingredientes
                    <li>140 gr azúcar</li>
                    <li>2 huevos</li>
                    <li>120 ml leche</li>
                    <li>100 ml aceite</li>
                    <li>100 gr Nesquik</li>
                    <li>70 gr harina leudante</li>
                </ul> 
                <Boton />
            </div>

            <br></br>

            <div className="receta2">
                <h4>Pepas de membrillo</h4>
            <img src={pepas}></img>
                <ul>Ingredientes
                    <li>200 g de harina</li>
                    <li>100 g de manteca</li>
                    <li>75 g de azúcar</li>
                    <li>Ralladura de 1 limón o naranja</li>
                    <li>1 huevo</li>
                    <li>½  cucharadita de polvo de hornear</li>
                    <li>Dulce de membrillo</li>
                    <li>Agua hirviendo 2 cucharadas</li>
                </ul> 
                <Boton2 />
            </div>
        </div>
    )
}

export default Home;