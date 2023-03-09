import axios from "axios";
import React, { useEffect, useState } from "react";
import { CharaProps } from "../Interfaces/Interface";
import { CharacterCard } from "../composants/CharacterCard";
import { NavbarConnected } from "../composants/NavbarConnected";

// --- Initialisation du tableau de personnages --- //
let datachars: CharaProps[] = [];

// --- Composant qui affiche la liste des personnages d'un utilisateur --- //
export const Characters = () => {
  // --- Initialisation du state qui va contenir la liste de personnages --- //
  const [listCharDisplayed, setListCharDisplayed] = useState<CharaProps[]>([]);

  useEffect(() => {
    // --- Récupération du token de l'utilisateur connecté --- //
    const token = localStorage.getItem("token");
    // --- Requête GET vers l'API pour récupérer la liste de personnages de l'utilisateur --- //
    axios
      .get("http://localhost:8080/api/character", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // --- Mise à jour du tableau de personnages et du state --- //
        datachars = res.data;
        setListCharDisplayed(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* --- Affichage de la barre de navigation --- */}
      <NavbarConnected />
      <div>
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
          Vos héros
        </h1>
      </div>
      <hr />

      <div className="">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* --- Affichage de chaque carte de personnage --- */}
          {listCharDisplayed.map((chara, i) => (
            <ul key={i}>
              <li
                key={i}
                style={{
                  listStyleType: "none",
                  position: "relative",
                  right: "30px",
                }}
              >
                <CharacterCard charaAffich={chara} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
