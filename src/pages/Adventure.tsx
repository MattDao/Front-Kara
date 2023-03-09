import axios, { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DicesCard } from "../composants/DicesCard";
import { CampProps } from "../Interfaces/Interface";

export const Adventure = () => {
  // Récupération de l'id de la campagne à partir des paramètres de l'URL
  const { id } = useParams<{ id: string }>();
  // Déclaration de l'état de la campagne courante
  const [camp, setCamp] = useState<CampProps>();
  // Utilisation de la méthode useNavigate pour permettre la navigation vers une autre page
  const navigate = useNavigate();
  // Déclaration d'une référence à un élément textarea
  const bodyElement = useRef<HTMLTextAreaElement>(null);
  // Déclaration de l'état du body de l'aventure
  const [body, setBody] = useState<string>(camp?.body ?? "");

  useEffect(() => {
    // Récupération du token d'authentification stocké dans le local storage
    const token = localStorage.getItem("token");
    // Requête GET pour récupérer la campagne correspondante à l'id dans l'URL
    axios
      .get(`http://localhost:8080/api/campagnes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse<CampProps>) => {
        // Mise à jour de l'état de la campagne avec les données de la réponse de l'API
        setCamp(response.data);
        // Affichage des données de la réponse de l'API dans la console
        console.log(response.data);
      })
      .catch((error) => {
        // Affichage des erreurs éventuelles dans la console
        console.log(error);
      });
  }, [id]);

  // Effet pour mettre à jour l'état du corps de l'aventure lorsque la campagne est modifiée
  useEffect(() => {
    setBody(camp?.body ?? "");
  }, [camp]);

  // Fonction pour gérer les changements dans l'élément textarea
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  // Fonction pour gérer la soumission du formulaire de modification de l'aventure
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Récupération du token d'authentification stocké dans le local storage
    const token = localStorage.getItem("token");

    // Requête PATCH pour mettre à jour le corps de l'aventure dans l'API
    axios
      .patch(
        `http://localhost:8080/api/campagnes/${id}`, // L'URL de la requête PATCH, avec l'id de la campagne à mettre à jour.
        {
          body: bodyElement.current?.value, // Les données à envoyer au serveur, dans cet objet avec une propriété 'body' qui a comme valeur la valeur de l'élément HTML <textarea> désigné par la référence 'bodyElement'.
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Les en-têtes de la requête, dans cet objet avec une propriété 'Authorization' qui contient le jeton d'authentification de l'utilisateur.
          },
        }
      )
      .then((response: AxiosResponse) => {
        console.log("response", response.data);
        alert("Fin de l'aventure... Pour le moment.");
        navigate(`/campagnes`);
      });
  };

  return (
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
                  href="/CreateCampagne"
                  style={{ color: "white" }}
                >
                  Créer votre campagne
                </a>
              </li>
            </ul>
            <h1 className="mx-auto">{camp?.name}</h1>
          </div>
        </div>
      </nav>
      <div>
        <form onSubmit={handleSubmitForm}>
          <div className="card mt-5 m-5">
            <div className="card-body">
              <img
                src="/assets/Adventure.jpg"
                className="img-fluid"
                alt="adventure"
                style={{
                  display: "block",
                  width: "100%",
                  height: "10rem",
                  objectFit: "cover",
                }}
              ></img>

              <h4 className="card-title text-center">
                <p>{camp?.name}</p>
              </h4>
              <div className="row">
                <div className="col-md-7 mt-2">
                  <label
                    htmlFor="style"
                    className="form-label"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Style
                  </label>
                  <p> {camp?.style}</p>
                </div>
                <div className="col-md-10 mt-2" style={{ width: "100%" }}>
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Carnet d'aventure
                  </label>
                  <textarea
                    className="form-control"
                    style={{ width: "100%" }}
                    value={body}
                    onChange={handleChange}
                    ref={bodyElement}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  style={{
                    width: "80%",
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
      <div className="card mt-5 m-5">
        <DicesCard numDice={0} numFaces={0} />
      </div>
    </div>
  );
};
