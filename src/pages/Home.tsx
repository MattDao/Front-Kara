import React from "react";
import { Navbar } from "../composants/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="/assets/HomeUSer.jpg"
                className="card-img-top"
                alt="HomeUser"
              />
              <div className="card-body">
                <h5 className="card-title">Joueur</h5>
                <p className="card-text">
                  Connectez vous ou inscrivez vous et rejoignez la partie !.
                </p>
                <a
                  href="/Connexion"
                  className="btn btn-primary mx-2"
                  style={{
                    backgroundColor: "#15134d",
                    color: "white",
                    border: "none",
                  }}
                >
                  Connexion
                </a>
                <a
                  href="/Inscription"
                  className="btn btn-primary mx-2"
                  style={{
                    backgroundColor: "#15134d",
                    color: "white",
                    border: "none",
                  }}
                >
                  Inscription
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="/assets/HomeMj.jpg"
                className="card-img-top"
                alt="HomeMj"
              />
              <div className="card-body">
                <h5 className="card-title">Maitre du jeu</h5>
                <p className="card-text">
                  Connectez vous ou inscrivez vous et créez vos propres parties
                  !.
                </p>
                <a
                  href="/Connexion"
                  className="btn btn-primary mx-2"
                  style={{
                    backgroundColor: "#15134d",
                    color: "white",
                    border: "none",
                  }}
                >
                  Connexion
                </a>
                <a
                  href="/Inscription"
                  className="btn btn-primary mx-2"
                  style={{
                    backgroundColor: "#15134d",
                    color: "white",
                    border: "none",
                  }}
                >
                  Inscription
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
