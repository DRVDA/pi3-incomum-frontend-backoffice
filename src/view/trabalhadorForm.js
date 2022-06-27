import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import axios from "axios";
import React, { useEffect, useState } from "react";

import Navbar from "../component/Navbar";



export default function trabalhadorForm() {
  return (
    <div>
    <Navbar/>

<br/><br/>
<br/>


    <p class="FuncTitulos">Novo trabalhador</p>
    <form class="NovoMembroForm container ">
        <div class="mb-3 row col-12">
            <label for="MembroNome" class="col-3 form-label FuncSubTitulos ">Nome</label>
            <input type="text" class="col form-control" id="MembroNome" aria-describedby="emailHelp"/>
            
          </div>
        <div class="mb-3 row col-12">
          <label for="MembroEmail" class="col-3 form-label FuncSubTitulos">Email address</label>
          <input type="email" class="col form-control" id="MembroEmail" aria-describedby="emailHelp"/>
    
        </div>
        <div class="mb-3 row col-12">
          <label for="MembroPassword" class="col-3 form-label FuncSubTitulos">Password</label>
          <input type="password" class="col form-control" id="MembroPassword"/>
        </div>
        <div class="mb-3 row col-12">
            <label for="MembroFotografia" class="col-3 form-label FuncSubTitulos">Fotografia</label>
            <input type="file" class="col form-control custom-file-input FileInputGabe" id="MembroFotografia"/>

          </div>
          <div class="mb-3 row col-12">
            <label for="MembroCategoria" class="col-3 form-label FuncSubTitulos">Categoria</label>
            <select id="Categoria" name="Categoria" class="col-3 ">
                <option value="1">Administrador</option>
                <option value="2">Editor</option>
                <option value="3">Funcionário</option>
              </select>
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
