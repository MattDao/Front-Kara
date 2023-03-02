import React from "react";
import { CardCharaProps } from "../Interfaces/Interface";
import { CharaButton } from "./CharaButton";

export const CharacterCard = ({ charaAffich }: CardCharaProps) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div>
          <CharaButton charaAffich={charaAffich} />
        </div>
        <img
          src="./assets/Heros1.jpg"
          className="card-img-top custom-img"
          alt="heros"
          style={{
            display: "block",
            width: "100%",
            height: "10rem",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <a href={`/Hero/${charaAffich.id}`} className="btn btn-primary" style={{display: "block", margin: "auto",backgroundColor:"#15134d", color:"white",border:"none" }}>
            {charaAffich.name}
          </a>
        </div>
      </div>
    </div>
  );
};
