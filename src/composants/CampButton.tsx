import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CampButtonProps } from "../Interfaces/Interface";

export const CampButton = ({ campAffich }: CampButtonProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [camps, setCamps] = useState<CampButtonProps>();

  const handleClickForm = async () => {
    await axios
      .delete(`http://localhost:8080/api/campagnes/${campAffich.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("response ", response.data.data);

        console.log(response, "res");
        alert("Campagne supprimée!");
        setCamps(response.data.data);
        handleClose();

        window.location.reload();
      });
  };

  return (
    <div className="btn-group" style={{ width: "100%" }}>
      <button
        className="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: "#15134d", color: "white", border: "none" }}
      >
      </button>
      <ul className="dropdown-menu" onClick={handleClickForm}>
        supprimer
      </ul>
    </div>
  );
};
