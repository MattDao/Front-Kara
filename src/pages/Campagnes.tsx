import axios from "axios";
import React, { useEffect, useState } from "react";
import { CampagneCard } from "../composants/CampagneCard";
import { CampProps } from "../Interfaces/Interface";

let dataCamp: CampProps[] = [];

export const Campagnes = () => {
  const [listCampDisplayed, setListCampDisplayed] = useState<CampProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/campagnes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res);
        dataCamp = res.data;
        setListCampDisplayed(res.data);
      });
  }, []);

  return (
    <div>
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
                    href="/CreateCampagne"
                    style={{color:"white"}}
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
