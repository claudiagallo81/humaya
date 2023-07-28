import "../styles/Recetas.css";

const Recetas = (props) => {
  return (
        <div className="card col-md-3">
            <img src={props.image} className="imgMinHeight" alt="..." />
            <div className="card-body cardStyles d-flex flex-column">
                <h5 className="card-title text-uppercase text-center fw-normal fs-3">{props.title}</h5>
                <p className="card-text fw-light p-2">{props.text}</p>
                <div className="text-center mt-auto">
                    <a href="#home" className="btnRecetas p-1 text-uppercase text-decoration-none">Preparación</a>
                </div>
            </div>
        </div>
  )
}

export default Recetas