import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://backend-incomum.herokuapp.com";

import Navbar from "../component/Navbar";
import { data } from "jquery";

export default function trabalhadoresEdit() {
  const [campIdTipoTrabalhador, setcampIdTipoTrabalhador] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campDataNasc, setcampDataNasc] = useState("");
  const [campTlf, setcampTlf] = useState("");
  const [campNif, setcampNif] = useState("");
  const [campUsername, setcampUsername] = useState("");
  const [campPassword, setcampPassword] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const { idTrabalhador } = useParams();
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }
  
  useEffect(() => {
    const url = baseUrl + "/trabalhadores/get/" + idTrabalhador;
    setIsLoading(true);
    axios
    .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
    .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setcampIdTipoTrabalhador(data.campIdTipoTrabalhador);
          setcampNome(data.nome);
          setcampEmail(data.email);
          setcampDataNasc(data.datanasc);
          setcampTlf(data.tlf);
          setcampNif(data.nif);
          setcampUsername(data.username);
          setcampPassword(data.password);
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="row col-12">
        <div className="col-2"></div>

        <div className="col-10 mt-5">
          {/*Grids*/}
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="form-row justify-content-center">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">
                      Id do tipo de trabalhador
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="idTipoTrabalhador"
                      value={campIdTipoTrabalhador}
                      onChange={(value) =>
                        setcampIdTipoTrabalhador(value.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputNome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      value={campNome}
                      onChange={(value) => setcampNome(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      value={campEmail}
                      onChange={(value) => setcampEmail(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Data de nascimento</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Data de nascimento"
                      value={campDataNasc}
                      onChange={(value) => setcampDataNasc(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Telemovel</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Telefone/Telemovel"
                      value={campTlf}
                      onChange={(value) => setcampTlf(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Nif</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Nif"
                      value={campNif}
                      onChange={(value) => setcampNif(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nif"
                      value={campUsername}
                      onChange={(value) =>
                        setcampUsername(value.target.value)
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nif"
                      value={campPassword}
                      onChange={(value) => setcampPassword(value.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => sendUpdate()}
                >
                  Update
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function sendUpdate() {
    // url de backend
    const url = baseUrl + "/trabalhadores/update/" + idTrabalhador;
    const datapost = {
      idtipotrabalhador: campIdTipoTrabalhador,
      nome: campNome,
      email: campEmail,
      datanasc: campDataNasc,
      tlf: campTlf,
      nif: campNif,
      username: campUsername,
      password: campPassword,
    };
    console.log(datapost);

    axios
      .put(url, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((response) => {
        console.log(response);

        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
}
