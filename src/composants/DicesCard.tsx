import React, { useState } from "react";
import { DiceProps } from "../Interfaces/Interface"; // import de l'interface utilisée pour les props

export const DicesCard = ({ numDice, numFaces }: DiceProps) => {
  // création d'un composant DicesCard avec les props numDice et numFaces
  const [results, setResults] = useState<number[]>([]); // création d'un état initial pour les résultats des dés
  const [selectedNumDice, setSelectedNumDice] = useState(numDice); // création d'un état initial pour le nombre de dés sélectionné
  const [selectedNumFaces, setSelectedNumFaces] = useState(numFaces); // création d'un état initial pour le nombre de faces sélectionné

  const rollDice = () => {
    // fonction pour lancer les dés
    const newResults = Array.from(
      // création d'un nouveau tableau avec une longueur égale au nombre de dés sélectionné
      { length: selectedNumDice },
      () => Math.floor(Math.random() * selectedNumFaces) + 1 // génération d'un nombre aléatoire compris entre 1 et le nombre de faces sélectionné pour chaque dé
    );
    setResults(newResults); // mise à jour de l'état des résultats des dés avec le nouveau tableau généré
  };

  return (
    <div className="card-body text-center">
      <div className="row">
        {/* Sélection du nombre de dés */}
        <div className="col-md-6 mt-3 mb-2">
          <label
            htmlFor="numberdices"
            className="form-label"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Nombre de dés
          </label>
          <select
            className="form-select"
            value={selectedNumDice}
            onChange={(e) => setSelectedNumDice(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        {/* Sélection du nombre de faces */}
        <div className="col-md-6 mt-3 mb-2">
          <label
            htmlFor="numberfaces"
            className="form-label"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Nombre de faces
          </label>
          <select
            className="form-select"
            value={selectedNumFaces}
            onChange={(e) => setSelectedNumFaces(parseInt(e.target.value))}
          >
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      {/* Bouton de lancement du lancer de dés */}
      <div className="row mt-3 mb-2">
        <div className="col-md-0">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "80%",
              backgroundColor: "#15134d",
              color: "white",
              border: "none",
            }}
            onClick={rollDice}
          >
            Lancer
          </button>
        </div>
        {/* Affichage des résultats des lancers de dés */}
        {results.length > 0 && (
          <div className="col-md-0 mt-2">
            <label
              htmlFor="results"
              className="form-label"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Résultats
            </label>
            <p className="form-control" id="results">
              {/* Affichage de chaque résultat individuel */}
              {results.map((result) => `${result} `)}
              {/* Affichage du total des résultats */}
              (total: {results.reduce((fd, nd) => fd + nd)})
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

