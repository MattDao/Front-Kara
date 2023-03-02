import React, { useState } from "react";
import { DiceProps } from "../Interfaces/Interface";

export const DicesCard = ({ numDice, numFaces }: DiceProps) => {
  const [results, setResults] = useState<number[]>([]);
  const [selectedNumDice, setSelectedNumDice] = useState(numDice);
  const [selectedNumFaces, setSelectedNumFaces] = useState(numFaces);

  const rollDice = () => {
    const newResults = Array.from(
      { length: selectedNumDice },
      () => Math.floor(Math.random() * selectedNumFaces) + 1
    );
    setResults(newResults);
  };

  return (
    <div className="card-body text-center">
      <div className="row">
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
              {results.map((result) => `${result} `)}
              (total: {results.reduce((acc, curr) => acc + curr)})
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
