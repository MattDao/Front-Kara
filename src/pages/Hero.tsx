import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { CharaProps } from "../Interfaces/Interface";
import { DicesCard } from "../composants/DicesCard";

export const Hero = () => {
  const { id } = useParams<{ id: string }>();

  const [character, setCharacter] = useState<CharaProps>();

  const strengthElement = useRef<HTMLInputElement>(null);
  const dexterityElement = useRef<HTMLInputElement>(null);
  const constitutionElement = useRef<HTMLInputElement>(null);
  const intelligenceElement = useRef<HTMLInputElement>(null);
  const charismaElement = useRef<HTMLInputElement>(null);
  const luckElement = useRef<HTMLInputElement>(null);
  const stealthElement = useRef<HTMLInputElement>(null);
  const magicElement = useRef<HTMLInputElement>(null);

  const [strength, setStrength] = useState(character?.strength ?? "");
  const [dexterity, setDexterity] = useState(character?.dexterity ?? "");
  const [constitution, setConstitution] = useState(
    character?.constitution ?? ""
  );
  const [intelligence, setIntelligence] = useState(
    character?.intelligence ?? ""
  );
  const [charisma, setCharisma] = useState(character?.charisma ?? "");
  const [luck, setLuck] = useState(character?.luck ?? "");
  const [stealth, setStealth] = useState(character?.stealth ?? "");
  const [magic, setMagic] = useState(character?.magic ?? "");

  const [activeTab, setActiveTab] = useState("armes-et-armures");
  const [textArea, setTextArea] = useState({
    "armes-et-armures": "",
    sac: "",
    carnet: "",
  });

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const tabName = activeTab;
    const value = event.target.value;
    setTextArea((prevState) => ({ ...prevState, [tabName]: value }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/character/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: AxiosResponse<CharaProps>) => {
        setCharacter(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setStrength(character?.strength ?? "");
    setDexterity(character?.dexterity ?? "");
    setConstitution(character?.constitution ?? "");
    setIntelligence(character?.intelligence ?? "");
    setCharisma(character?.charisma ?? "");
    setLuck(character?.intelligence ?? "");
    setStealth(character?.stealth ?? "");
    setMagic(character?.magic ?? "");
  }, [character]);

  const handleStrengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrength(event.target.value);
  };
  const handleDexterityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDexterity(event.target.value);
  };
  const handleConstitutionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConstitution(event.target.value);
  };
  const handleIntelligenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntelligence(event.target.value);
  };
  const handleCharismaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharisma(event.target.value);
  };
  const handleLuckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLuck(event.target.value);
  };
  const handleStealthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStealth(event.target.value);
  };
  const handleMagicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMagic(event.target.value);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .patch(
        `http://localhost:8080/api/character/${id}`,
        {
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
        alert("Fin de l'aventure... Pour le moment.");
        navigate(`/characters`);
      });
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#15134d", color: "white" }}
          >
            <a
              className="navbar-brand"
              href="/Characters"
              style={{ backgroundColor: "#15134d", color: "white" }}
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
              style={{ color: "white" }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ color: "white" }}
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/CreateCharacter"
                    style={{ color: "white" }}
                  >
                    Cr??er votre H??ros
                  </a>
                </li>
              </ul>
              <h1 className="mx-auto">{character?.name}</h1>
            </div>
          </div>
        </nav>

        <div>
          <form onSubmit={handleSubmitForm}>
            <div className="card mt-5 m-5">
              <div className="card-body">
                <img
                  src="/assets/AHeroFiche.jpg"
                  className="img-fluid"
                  alt="hero"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "10rem",
                    objectFit: "cover",
                  }}
                ></img>

                <h4 className="card-title text-center">
                  <p>{character?.name}</p>
                </h4>
                <div className="row">
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
                      style={{ width: "30%" }}
                      value={strength}
                      onChange={handleStrengthChange}
                      ref={strengthElement}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Dext??rit??
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={dexterity}
                      onChange={handleDexterityChange}
                      ref={dexterityElement}
                    />
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Points de vie
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={constitution}
                      onChange={handleConstitutionChange}
                      ref={constitutionElement}
                    />
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Intelligence
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={intelligence}
                      onChange={handleIntelligenceChange}
                      ref={intelligenceElement}
                    />
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Charisme
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={charisma}
                      onChange={handleCharismaChange}
                      ref={charismaElement}
                    />
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Chance
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={luck}
                      onChange={handleLuckChange}
                      ref={luckElement}
                    />
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Discr??tion
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={stealth}
                      onChange={handleStealthChange}
                      ref={stealthElement}
                    />
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <label
                      className="labels"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Magie
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "30%" }}
                      value={magic}
                      onChange={handleMagicChange}
                      ref={magicElement}
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
          <div className="col-md-12">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#15134d", color: "white" }}
              >
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "armes-et-armures" ? "active" : ""
                      }`}
                      href="#armes-et-armures"
                      data-toggle="tab"
                      onClick={() => handleTabChange("armes-et-armures")}
                      style={{ color: "white" }}
                    >
                      Armes & Armures
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "sac" ? "active" : ""
                      }`}
                      href="#sac"
                      data-toggle="tab"
                      onClick={() => handleTabChange("sac")}
                      style={{ color: "white" }}
                    >
                      Sac
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        activeTab === "carnet" ? "active" : ""
                      }`}
                      href="#carnet"
                      data-toggle="tab"
                      onClick={() => handleTabChange("carnet")}
                      style={{ color: "white" }}
                    >
                      Carnet
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div
                    className={`tab-pane ${
                      activeTab === "armes-et-armures" ? "active" : ""
                    }`}
                  >
                    <textarea
                      value={textArea["armes-et-armures"]}
                      onChange={handleTextAreaChange}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div
                    className={`tab-pane ${
                      activeTab === "sac" ? "active" : ""
                    }`}
                  >
                    <textarea
                      value={textArea["sac"]}
                      onChange={handleTextAreaChange}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div
                    className={`tab-pane ${
                      activeTab === "carnet" ? "active" : ""
                    }`}
                  >
                    <textarea
                      value={textArea["carnet"]}
                      onChange={handleTextAreaChange}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5 m-5">
        <DicesCard numDice={0} numFaces={0} />
      </div>
    </>
  );
};
