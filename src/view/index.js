

import axios from "axios";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/style.css";

export default function Login() {
  return (
      <div className="container-fluid">

        {/* Parte Cima */}
        <div className=" row border bg-light-pink p-5">
        <img
              src="https://incommun.pt/wp-content/uploads/2022/02/logotipoincommun.png"
              alt="incommun logo"
              loading="lazy"
            />
        </div>

        {/* Parte Baixo */}
        <h4 className="col-12 d-flex justify-content-center mt-5 mb-4">Login</h4>
        <div className="col-12 d-flex justify-content-center ">
          <input type="text" className="col-3 m-2" placeholder="Username:" />
        </div>
        <div className="col-12 d-flex justify-content-center ">
          <input type="text" className="col-3 m-2" placeholder="Passe:" />
        </div>

        <div className="col-12 d-flex justify-content-center mt-4">
          <button type="button" className="button-caseiro bg-dark-pink text-light">
            <b>Entrar</b>
          </button>
        </div>
      </div>
  );  
}
