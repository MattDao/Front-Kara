// ---Importation de la bibliothèque axios et des hooks useState et useEffect de React--- //
import axios from "axios";
import React, { useEffect, useState } from "react";

// ---Importation de la composante CampagneCard et de l'interface CampProps--- //
import { CampagneCard } from "../composants/CampagneCard";
import { CampProps } from "../Interfaces/Interface";

// ---Initialisation du tableau dataCamp de type CampProps--- //
let dataCamp: CampProps[] = [];

// ---Déclaration de la composante Campagnes--- //
export const Campagnes = () => {
  // ---Déclaration d'un état initial pour la liste des campagnes à afficher--- //
  const [listCampDisplayed, setListCampDisplayed] = useState<CampProps[]>([]);

  // ---Effet secondaire qui s'exécute à la création de la composante--- //
  useEffect(() => {
    // ---Appel à l'API pour récupérer la liste des campagnes--- //
    axios
      .get("http://localhost:8080/api/campagnes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        // ---Stockage des données dans le tableau dataCamp et mise à jour de la liste des campagnes à afficher--- //
        dataCamp = res.data;
        setListCampDisplayed(res.data);
      });
  }, []);

  // ---Retourne la structure JSX de la page Campagnes--- //
  return (
    <div>
      <div>
        {/* Barre de navigation */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#15134d", color: "white" }}
          >
            <a className="navbar-brand" href="/" style={{ color: "white" }}>
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
                    href="/CreateCampagne"
                    style={{ color: "white" }}
                  >
                    Créer votre campagne
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        {/* Titre de la page */}
        <h1
          className="card-title"
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
            margin: "10px 0 0 ",
            color: "#15134d",
            fontWeight: "bold",
          }}
        >
          Vos campagnes
        </h1>
      </div>
      <hr />

      <div className="">
        {/* Liste des cartes de campagne */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {listCampDisplayed.map((camp, i) => (
            <ul key={i}>
              <li
                key={i}
                style={{
                  listStyleType: "none",
                  position: "relative",
                  right: "30px",
                }}
              >
                <CampagneCard campAffich={camp} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
