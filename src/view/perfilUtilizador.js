import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";


export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }
  
  
  
  return (
    <div>
    <Navbar/>

<br/><br/>

<div className="row col-12">

      <div className="col-2"></div>
        
        
        <div className="col-10">
        <div className="d-flex justify-content-center mt-5">
            <img src={require('../img/ProfileDefault.png')} class="img-fluid"/>
        </div>
        <h4 class="text-center mt-3">Carlos Carlotos</h4>
        <div className="mb-3  col-12">
            Email:
        </div>
        <div className="mb-3  col-12">
            Data nascimento:
        </div>
        <div className="mb-3  col-12">
            Telemovel:
        </div>
        <div className="mb-3  col-12">
            Nif:
        </div>

      </div>
    </div>
    </div>
  );

}
