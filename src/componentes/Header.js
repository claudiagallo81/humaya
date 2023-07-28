import '../styles/Header.css';

const Header = () => {
  return (
    <div id='home' className="fondo-humaya-header d-flex flex-column align-items-center">

        <nav className="navbar navbar-expand-md container-fluid">
            <div className="container-fluid d-flex ">
                <a className="navbar-brand me-0 text-white fw-bolder" href="#home"><img src="../../img/LogoMenu60x48.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex align-items-center">
                        <a className="nav-link text-white fw-bolder" aria-current="page" href="#home">Home</a>
                        <a className="nav-link text-white fw-bolder" href="#productos">Productos</a>
                        <a className="logo me-0 text-white fw-bolder" href="#home"><img src="../../img/LogoHumaya100x100.png" alt="" /></a>
                        <a className="nav-link text-white fw-bolder" href="#productos">Locales</a>
                        <a className="nav-link text-white fw-bolder" href="#contacto">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
        
        <div className='d-flex flex-column col-12 col-sm-6  text-white align-self-end mt-5 p-5'>
            <h2 className='text-uppercase'>Dulces del alma</h2>
            <p>Los productos HUMAYA son elaborados desde hace más de 50 años fiel a las tradiciones familiares y sabores caseros, acompañándote en los momentos más importantes de la vida.</p>
            <button type="button" className='text-uppercase fw-bold col-9 col-md-6 p-3 align-self-center btn bg-dark bg-opacity-85 text-white rounded-pill btn-conocenos'>Conocenos</button>
        </div>
        
    </div>
  )
}

export default Header