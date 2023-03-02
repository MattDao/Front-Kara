import axios, { AxiosResponse } from "axios";
import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../composants/Navbar";

export const Inscription = () => {
  const pseudoElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const roleElement = useRef<HTMLSelectElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const confirmPasswordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log("handleSubmitForm");
    e.preventDefault();
    console.log(pseudoElement.current?.value);
    console.log(emailElement.current?.value);
    console.log(roleElement.current?.value);
    console.log(passwordElement.current?.value);
    console.log(confirmPasswordElement.current?.value);

    if (
      pseudoElement.current?.value === "" ||
      emailElement.current?.value === "" ||
      passwordElement.current?.value === "" ||
      confirmPasswordElement.current?.value === "" ||
      roleElement.current?.value === ""
    ) {
      alert("tous les champs doivent être renseignés");
    } else if (
      passwordElement.current?.value !== confirmPasswordElement.current?.value
    ) {
      alert(
        "votre confirmation de mot de passe doit être la même que votre mot de passe"
      );
    } else {
      axios
        .post("http://localhost:8080/api/auth/register", {
          pseudo: pseudoElement.current?.value,
          email: emailElement.current?.value,
          role: roleElement.current?.value,
          password: passwordElement.current?.value,
          confirmPassword: confirmPasswordElement.current?.value,
        })
        .then((response: AxiosResponse) => {
          console.log("réponse de axios", response);
          console.log("réponse de axios", response.data);

          console.log("réponse", response.status);
          if (response.status === 201) {
            alert("Compte créé");
            setTimeout(() => navigate("/connexion"), 1000);
          }
        })
        .catch(() => {
          alert("erreur dans le formulaire");
        });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="card mx-auto w-75 h-100 mb-3 mt-md-5 mt-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./assets/ConnexionPen.jpg"
              className="img-fluid rounded-start"
              alt="Connexion"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mt-md-3">Connexion</h5>
              <form onSubmit={handleSubmitForm}>
                <div className="mb-3">
                  <label htmlFor="pseudo" className="form-label">
                    Pseudo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={pseudoElement}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Rôle
                  </label>
                  <select className="form-select" ref={roleElement}>
                    <option value="joueur">Joueur</option>
                    <option value="maitre du jeu">Maître du jeu</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    ref={emailElement}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    ref={passwordElement}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmation de mot de passe
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    ref={confirmPasswordElement}
                  />
                </div>
                <div className="mb-3 form-check"></div>
                <button type="submit" className="btn btn-primary"style={{backgroundColor:"#15134d", color:"white",border:"none"}}>
                  Inscription
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
