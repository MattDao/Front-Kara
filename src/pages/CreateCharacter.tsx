import axios, { AxiosResponse } from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CreateCharacter = () => {
  const nameElement = useRef<HTMLInputElement>(null);
  const strengthElement = useRef<HTMLInputElement>(null);
  const dexterityElement = useRef<HTMLInputElement>(null);
  const constitutionElement = useRef<HTMLInputElement>(null);
  const intelligenceElement = useRef<HTMLInputElement>(null);
  const charismaElement = useRef<HTMLInputElement>(null);
  const luckElement = useRef<HTMLInputElement>(null);
  const stealthElement = useRef<HTMLInputElement>(null);
  const magicElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const generateRandomNumber = () => {
    const randomNumber1 = Math.floor(Math.random() * 20) + 1;
    const randomNumber2 = Math.floor(Math.random() * 20) + 1;
    const randomNumber3 = Math.floor(Math.random() * 20) + 1;
    const randomNumber4 = Math.floor(Math.random() * 20) + 1;
    const randomNumber5 = Math.floor(Math.random() * 20) + 1;
    const randomNumber6 = Math.floor(Math.random() * 20) + 1;
    const randomNumber7 = Math.floor(Math.random() * 20) + 1;
    const randomNumber8 = Math.floor(Math.random() * 20) + 1;

    if (strengthElement.current) {
      strengthElement.current.value = randomNumber1.toString();
    }
    if (dexterityElement.current) {
      dexterityElement.current.value = randomNumber2.toString();
    }
    if (constitutionElement.current) {
      constitutionElement.current.value = randomNumber3.toString();
    }
    if (intelligenceElement.current) {
      intelligenceElement.current.value = randomNumber4.toString();
    }
    if (charismaElement.current) {
      charismaElement.current.value = randomNumber5.toString();
    }
    if (luckElement.current) {
      luckElement.current.value = randomNumber6.toString();
    }
    if (stealthElement.current) {
      stealthElement.current.value = randomNumber7.toString();
    }
    if (magicElement.current) {
      magicElement.current.value = randomNumber8.toString();
    }
  };

  const handleSubmitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(nameElement.current?.value);
    console.log(strengthElement.current?.value);
    console.log(dexterityElement.current?.value);
    console.log(constitutionElement.current?.value);
    console.log(intelligenceElement.current?.value);
    console.log(charismaElement.current?.value);
    console.log(luckElement.current?.value);
    console.log(stealthElement.current?.value);
    console.log(magicElement.current?.value);

    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:8080/api/character",
        {
          name: nameElement.current?.value,
          strength: strengthElement.current?.value,
          dexterity: dexterityElement.current?.value,
          constitution: constitutionElement.current?.value,
          intelligence: intelligenceElement.current?.value,
          charisma: charismaElement.current?.value,
          luck: luckElement.current?.value,
          stealth: stealthElement.current?.value,
          magic: magicElement.current?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response: AxiosResponse) => {
        console.log("response", response.data);
        alert("Un nouvel allié vous rejoint");
        navigate(`/Hero/${response.data.id}`);
      });
  };
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
                  href="/Characters"
                  style={{color:"white"}}
                >
                  Vos héros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <form onSubmit={handleSubmitForm}>
          <div className="card mt-5 m-5">
            <div className="card-body">
              <img
                src="./assets/Creachara.jpg"
                className="img-fluid"
                alt="creation"
                style={{
                  display: "block",
                  width: "100%",
                  height: "10rem",
                  objectFit: "cover",
                }}
              ></img>

              <h4 className="card-title text-center">Créer votre Héros</h4>
              <div className="row">
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Nom de votre héros
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                    ref={nameElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Force
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Force"
                    ref={strengthElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Dextérité
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Dextérité"
                    ref={dexterityElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Points de vie
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Points de vie"
                    ref={constitutionElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Intelligence
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Intelligence"
                    ref={intelligenceElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Charisme
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Charisme"
                    ref={charismaElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Chance
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Chance"
                    ref={luckElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Furtivité
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Furtivité"
                    ref={stealthElement}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    className="labels"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Magie
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Magie"
                    ref={magicElement}
                  />
                </div>
                <p className="card-title text-center mt-3">
                  Chacune de vos statistiques bénéficie de 20 points maximum,
                  ceux-ci seront générés aléatoirement.
                </p>
                <button
                  type="button"
                  className="btn btn-primary mt-3 mb-2"
                  onClick={generateRandomNumber}
                  style={{
                    width: "1000px",
                    display: "block",
                    margin: "auto",
                    backgroundColor: "#15134d",
                    color: "white",
                    border: "none",
                  }}
                >
                  Repartir les points de stat
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
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
