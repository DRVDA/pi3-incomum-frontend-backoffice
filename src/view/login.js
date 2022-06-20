

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
      <div class="container-fluid">

        {/* Parte Cima */}
        <div class=" row border bg-light-pink p-5">

        </div>

        {/* Parte Baixo */}
        <h4 class="col-12 d-flex justify-content-center mt-5 mb-4">Login</h4>
        <div class="col-12 d-flex justify-content-center ">
          <input type="text" class="col-3 m-2" placeholder="Email:" />
        </div>
        <div class="col-12 d-flex justify-content-center ">
          <input type="text" class="col-3 m-2" placeholder="Passe:" />
        </div>

        <div class="col-12 d-flex justify-content-center mt-4">
          <button type="button" class="button-caseiro bg-dark-pink text-light">
            <b>Entrar</b>
          </button>
        </div>
      </div>
  );  
}
