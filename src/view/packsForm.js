import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

//sweetalert2 - importação
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function packsForm() {
  const [campNome, setcampNome] = useState("");
  const [campPreco, setcampPreco] = useState("");
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }

  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />

      <p className="FuncTitulos">Novo pack</p>
    <form className="container ">
        
          <div className="mb-3 row col-12">
            <label className="col-3 form-label ">Nome</label>
            <input type="text" className="col form-control" value={campNome}
            onChange={(value) => setcampNome(value.target.value)}/>
          </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">Preco</label>
          <input type="number" className="col form-control" value={campPreco}
            onChange={(value) => setcampPreco(value.target.value)}/>
        </div>
          <div > 
            <button type="button" className="btn btn-primary">Cancelar</button>
            <button type="clear" className="btn btn-primary">Limpar</button>
            <button
            type="submit"
            className="btn btn-primary"
            onClick={() => SendSave()}
            >
              Criar
            </button>          
          </div>
      </form>
    </div>
  );

  function SendSave() {
    event.preventDefault();
    if (campNome === "") {
      alert("Insira Nome!");
    } else if (campPreco === "") {
      alert("Insira preco!");
    } else {
      const baseUrl = "https://backend-incomum.herokuapp.com/packs/create";
      const datapost = {
        nome: campNome,
        preco: campPreco,
      };

       axios
        .post(baseUrl, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
            window.location.reload();

          } else {
            alert(response.data.message);
            window.location.reload();

          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }
  
}