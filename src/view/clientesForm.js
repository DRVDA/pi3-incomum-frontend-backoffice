import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function clientesForm() {

  return (

    
    <div>
      <Navbar />

      <br />
      <br />
      <br />    
      <br />    
      <br />    



      <h1 class="FuncTitulos">Novo Cliente</h1>
    <form class="NovoMembroForm container ">
        <div class="mb-3 row col-9">
            <label for="MembroNome" class="col-3 form-label FuncSubTitulos ">Nome</label>
            <input type="text" class="col form-control" id="MembroNome" aria-describedby="emailHelp"/> 
          </div>
        <div class="mb-3 row col-9">
          <label for="MembroEmail" class="col-3 form-label FuncSubTitulos">Email address</label>
          <input type="email" class="col form-control" id="MembroEmail" aria-describedby="emailHelp"/>
    
        </div>
        <div class="mb-3 row col-9">
          <label for="MembroPassword" class="col-3 form-label FuncSubTitulos">Telemóvel</label>
          <input type="number" class="col form-control" id="MembroPassword"/>
        </div>
        <div class="mb-3 row col-9">
            <label for="MembroFotografia" class="col-3 form-label FuncSubTitulos">Fotografia</label>
            <input type="file" class="col form-control custom-file-input FileInputGabe" id="MembroFotografia"/>

          </div>
          <div class="FormButtons"> 
            <button type="button" class="btn btn-primary Btn_Cancelar">Cancelar</button>
            <button type="clear" class="btn btn-primary Btn_Limpar">Limpar</button>
            <button type="submit" class="btn btn-primary Btn_Criar">Criar</button>
          </div>
      
      </form>







    </div>
  );

  
}
