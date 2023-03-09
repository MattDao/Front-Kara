import { CardCampProps } from "../Interfaces/Interface";
import { CampButton } from "./CampButton";

export const CampagneCard = ({ campAffich }: CardCampProps) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div>
          <CampButton campAffich={campAffich} />
        </div>
        <img
          src="/assets/Adventure.jpg"
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
          <a
            href={`/Adventure/${campAffich.id}`}
            className="btn btn-primary"
            style={{
              display: "block",
              margin: "auto",
              backgroundColor: "#15134d",
              color: "white",
              border: "none",
            }}
          >
            {campAffich.name}
          </a>
        </div>
      </div>
    </div>
  );
};
