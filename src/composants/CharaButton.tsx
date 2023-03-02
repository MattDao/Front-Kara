import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CharaButtonProps } from '../Interfaces/Interface';

export const CharaButton = ({charaAffich}: CharaButtonProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [charas, setCharas] = useState<CharaButtonProps>();

    const handleClickForm = async () => {
        await axios
          .delete(`http://localhost:8080/api/character/${charaAffich.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((response: AxiosResponse<{ data: any }>) => {
            console.log('response ', response.data.data);
    
            console.log(response, 'res');
            alert('Personnage supprimé!');
            setCharas(response.data.data);
            handleClose();
           
            window.location.reload();
          });
      };

    return (
      
        <div className="btn-group">
        <button
          className="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: "#15134d", color: "white", border: "none" }}
        >
          ...
        </button>
        <ul className="dropdown-menu" onClick={handleClickForm}>
          supprimer
        </ul>
      </div>
      
    
    );
};
