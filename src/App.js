import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./componentes/Header";
import Productos from "./componentes/Productos";
import Contacto from './componentes/Contacto';
import Recetas from './componentes/Recetas';

function App() {
  
  const prods = [
      {id:1, title: "Dulce de leche tradicional", text: "Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.", text2: "Presentación en frasco de vidrio de 580gr.", image: "img/Producto1.png", destacado: false},
      {id:2, title: "Dulce de leche sin azúcar", text: "Elaboración artesanal para cuidar tu silueta sin renunciar a nada, endulzado naturalmente con stevia.", text2: "Presentación en frasco de vidrio de 580gr y 280gr.", image: "img/Dulce-de-leche-2.jpg", destacado: false},
      {id:3, title: "Dulce Choconutt", text: "Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.", text2: "Presentación en frasco de vidrio de 280gr.", image: "img/Producto3.png", destacado: false},
      {id:4, title: "Alfajores de Maicena", text: "Alfajores de dulce con coco rallado, relleno con 2cm de pura dulzura. Pudiendo elegir entre el dulce de leche tradicional, lighto choconutt.", text2: "Presentación en caja de 6 y 12 alfajores.", image: "img/alfajores-maicena.jpg", destacado: true}
    ]

  const recetas = [
    {id: 1, title: "Conitos", text: "Una deliciosa opción para acompañar las meriendas, ese antojo de media noche o compartir con amigos.", image: "../img/conitos.webp"},
    {id: 2, title: "Pepas", text: "Las galletitas más tiernas y ricas, rellenas de dulce de leche, ideales para el mate y la hora del té.", image: "../img/pepas.jpg"},
    {id: 3, title: "Torta Nutt", text: "La tarta de tres capas más sabrosa del mundo, combina una base de vainilla, dulce de leche y una cubierta de choconutt.", image: "../img/Torta-de-Nutella.png"}
  ]

  return (
    <div className="container-fluid p-0">
      <Header />
      <div id="productos" className="productos-encabezado">
            <h3 className='p-4 m-0 text-center text-uppercase h3'>Productos</h3>
      </div>
      {prods.map(producto => (

        <Productos key={producto.id} pos={producto.id % 2 !== 0 && producto.destacado === false ? "1": "2"} title={producto.title} text={producto.text} text2={producto.text2} image={producto.image} destacado={producto.destacado} /> 
          
      ))}
      
      <div className="productos-calidad">
        <h2 className='pt-4 m-0 text-center text-white h3'>La mejor calidad para vos</h2>
        <div className='d-md-flex text-center justify-content-center p-5'>
          <div>
            <img src="../img/organico.png" className='p-2 iconos-calidad' alt="Organico" />
              <p className='text-white text-uppercase'>100% <br />Organico</p>
          </div>
          <div>
            <img src="../img/sin-tacc.png"  className='p-2 iconos-calidad'alt="Sin Tacc" />
            <p className='text-white text-uppercase'>Sin <br />Tacc</p>

          </div> 
          <div> 
            <img src="../img/sin-conservantes.png"  className='p-2 iconos-calidad'alt="Sin Conservantes" />
            <p className='text-white text-uppercase'>Sin <br />Conservantes</p>
          </div>
        </div>
      </div>

      <div id='contacto' className="productos-calidad">
        <h2 className='pb-4 m-0 text-center text-white h3'>Contáctanos</h2>
        <Contacto />
      </div>

      <div className='recetas pb-5'>
        <h2 className='p-4 m-0 text-center text-white'>Recetas</h2>
        <div className="row g-0 d-flex justify-content-evenly">

          {recetas.map( receta => (

            <Recetas key={receta.id} title={receta.title} text={receta.text} image={receta.image} />

          ))}

        </div>
      </div>
      
      <footer className='productos-calidad'>
          <h2 className='pb-4 pt-4 m-0 text-center text-white h3'>Encontranos en</h2>
        <div className='p-3 row g-0 d-flex justify-content-evenly' style={{backgroundColor:"#0E0E0E"}}>
          <div className='col-sm-12 col-md-2 text-center align-self-center'>
            
          <img src="../img/LogoHumaya100x100.png" height="180px" alt="Logo Humaya" />
          </div>
          <div className='col-sm-12 col-md-2 pt-30'>
            <ul className='pe-5'>
              <li className='fs-4'>Menú</li>
              <li><a href="#home">Home</a></li>
              <li><a href="#home">Productos</a></li>
              <li><a href="#home">Locales</a></li>
              <li><a href="#home">Contactos</a></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-2 pt-3'>
            <ul className='pe-5'>
              <li className='fs-4'>Navegación</li>
              <li><a href="#home">Preguntas frecuentes</a></li>
              <li><a href="#home">Distribuidores</a></li>
              <li><a href="#home">Prensa</a></li>
              <li><a href="#home">Recetas exclusivas</a></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-2 pt-3'>
            <ul className='pe-5'>
              <li className='fs-4'>Redes</li>
              <li><a href="#home"><img src="../img/icono-fb.png" className='iconos-redes' alt=""/></a></li>
              <li><a href="#home"><img src="../img/icono-ig.png" className='iconos-redes' alt=""/></a></li>
              <li><a href="#home"><img src="../img/icono-tiktok.png" className='iconos-redes' alt=""/></a></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-3 pt-3'>
            <ul className='pe-5'>
              <li className='fs-4'>Ubicación</li>
              <li className='text-white fw-bolder'>Monte de Oca 2356, CABA</li>
              <li><iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0392303583576!2d-58.373096124500634!3d-34.653712172936395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334aab78be889%3A0xe808082ff7311cac!2sAv.%20Montes%20de%20Oca%202356%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1683573003660!5m2!1ses!2sar" width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></li>
            </ul>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
