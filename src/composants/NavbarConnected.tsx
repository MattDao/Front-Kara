export const NavbarConnected = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"style={{backgroundColor:"#15134d", color:"white"}}>
          <a className="navbar-brand" href="/"style={{color:"white"}}>
            Kara
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/CreateCharacter"
                  style={{color:"white"}}
                >
                  Créer votre Héros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
