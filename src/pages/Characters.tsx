import axios from "axios";
import React, { useEffect, useState } from "react";
import { CharaProps } from "../Interfaces/Interface";
import { CharacterCard } from "../composants/CharacterCard";
import { NavbarConnected } from "../composants/NavbarConnected";

let datachars: CharaProps[]=[];
export const Characters = () => {
  const [listCharDisplayed, setListCharDisplayed] = useState<CharaProps[]>([]);
  ;

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get("http://localhost:8080/api/character", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        datachars = res.data;
        setListCharDisplayed(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
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
