import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../composants/Navbar";
import { UserData } from "../Interfaces/Interface";

export const Connexion = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent) => {
    console.log("handleSubmitForm");
    e.preventDefault();
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);

    axios
      .post("http://localhost:8080/api/auth/login", {
        email: emailElement.current?.value,
        password: passwordElement.current?.value,

      })
      .then((response: AxiosResponse) => {
        const token = response.data.accessToken;
        let role:UserData = response.data.role;
        console.log(response.data.role);
        if (token) {
          localStorage.setItem("token", token);
           role=jwtDecode(token)
          console.log(role);
          alert("Authentification réussie");
          setTimeout(() => {
            if (role.role === "joueur") {
              navigate("/Characters");
            } else {
              navigate("/campagnes");
            }
          }, 1000);
        }
      })

      .catch(() => {
        alert("Combinaison adresse mail/ mot de passe non trouvée");
        window.location.reload();
      });
  };

  return (
    <div>
    <Navbar />    
    <div className="card mx-auto w-75 h-100 mb-3 mt-md-5 mt-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="./assets/ConnexionPen.jpg" className="img-fluid rounded-start" alt="Connexion" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title mt-md-3">Connexion</h5>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" ref={emailElement}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                <input type="password" className="form-control"  ref={passwordElement}/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" htmlFor="exampleCheck1">Rester connecté</label>
              </div>
              <button type="submit" className="btn btn-primary"style={{backgroundColor:"#15134d", color:"white",border:"none"}}>Connexion</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  );
}
