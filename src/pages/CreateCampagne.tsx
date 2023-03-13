import axios, { AxiosResponse } from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CreateCampagne = () => {
  // Importation de la fonction navigate depuis le hook useNavigate
  const navigate = useNavigate();

  // Définition de trois références à des éléments HTML pour récupérer leur valeur ultérieurement
  const nameElement = useRef<HTMLInputElement>(null);
  const styleElement = useRef<HTMLSelectElement>(null);
  const bodyElement = useRef<HTMLTextAreaElement>(null);

  // Définition d'une fonction de soumission de formulaire qui sera appelée lors de la soumission du formulaire
  const handleSubmitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le comportement par défaut du navigateur lors de la soumission du formulaire

    // Récupération du token stocké dans localStorage
    const token = localStorage.getItem("token");

    // Envoi d'une requête POST à l'API avec les données saisies par l'utilisateur
    axios
      .post(
        "http://localhost:8080/api/campagnes",
        {
          name: nameElement.current?.value,
          style: styleElement.current?.value,
          body: bodyElement.current?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ajout du token dans les en-têtes de la requête
          },
        }
      )
      .then((response: AxiosResponse) => {
        console.log("response", response.data); // Affichage de la réponse de l'API dans la console
        alert("Que l'aventure commence !"); // Affichage d'une alerte pour informer l'utilisateur que la création de la campagne a réussi
        navigate(`/adventure/${response.data.id}`); // Redirection de l'utilisateur vers la page de la campagne nouvellement créée
      });
  };
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#15134d", color: "white" }}
          >
            <a
              className="navbar-brand"
              href="/Campagnes"
              style={{ color: "white" }}
            >
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
                    href="/Campagnes"
                    style={{ color: "white" }}
                  >
                    Vos campagnes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <form onSubmit={handleSubmitForm}>
          <div className="card mt-5 m-5">
            <div className="card-body">
              <img
                src="/assets/CreaCamp.jpg"
                className="img-fluid"
                alt="creation"
                style={{
                  display: "block",
                  width: "100%",
                  height: "10rem",
                  objectFit: "cover",
                }}
              ></img>

              <h4 className="card-title text-center">Créer votre campagne</h4>
              <div className="row">
                <div className="col-md-7 mt-2">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Nom de la campagne
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="campagne"
                    ref={nameElement}
                  />
                </div>
                <div className="col-md-7 mt-2">
                  <label
                    htmlFor="style"
                    className="form-label"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Style
                  </label>
                  <select className="form-select" ref={styleElement}>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Science fiction">Science-fiction</option>
                    <option value="Historique">Historique</option>
                    <option value="Horreur">Horreur</option>
                    <option value="Post-apocalyptique">
                      Post-apocalyptique
                    </option>
                  </select>
                </div>
                <div className="col-md-10 mt-2">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Carnet d'aventure
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Carnet"
                    ref={bodyElement}
                  />
                </div>
                <p className="card-title text-center mt-3">
                  Soyez libre de concevoir l'aventure de votre choix.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  style={{
                    width: "1000px",
                    display: "block",
                    margin: "auto",
                    backgroundColor: "#15134d",
                    color: "white",
                    border: "none",
                  }}
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
