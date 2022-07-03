import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function Dashboard() {
  const [trabalhadoresList, setdataTrabalhadores] = useState([]);

  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/trabalhadores/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataTrabalhadores(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  
  return (
    <div>
    <Navbar/>

<br/><br/>

<div className="row col-12">

      <div className="col-2"></div>
        
        
        <div className="col-10">
        {/*Grids*/}
        <div className="d-flex  mt-5">
          <div className="me-auto bd-highlight">
            <h5 className="ms-auto underline-light-pink">Lista de trabalhadores</h5>
          </div>
          <Link to="/trabalhadoresForm"><button className=" float-right btn-primary">Adicionar</button></Link>
        </div>
        <div className="row col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">idTrabalhador</th>
                <th scope="col">idTipoTrabalhador</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">DastaNascimento</th>
                <th scope="col">Tlf</th>
                <th scope="col">Nif</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>

              </tr>
            </thead>
            <tbody>
            <LoadFillData />

            </tbody>

          </table>
          {/* Numeração aba de lista */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>1</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>2</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>3</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>4</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>5</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

  function LoadFillData() {
    return trabalhadoresList.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idtrabalhador}</th>
          <td>{data.idtipotrabalhador}</td>
          <td>{data.nome}</td>
          <td>{data.email}</td>
          <td>{data.datanasc}</td>
          <td>{data.tlf}</td>
          <td>{data.nif}</td>
          <td>{data.username}</td>
          <td>{data.password}</td>
          <td>
            <Link
              className="btn btn-outline-info"
              to={"/trabalhadoresEdit/" + data.idtrabalhador}
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              class="btn btn-outline-danger"
              onClick={() => notificationOnDelete(data.idtrabalhador)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  function notificationOnDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        SendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  function SendDelete(idtrabalhador) {
    // url do backend
    const baseUrl =
      "https://backend-incomum.herokuapp.com/trabalhadores/delete/" + idtrabalhador;
    // network
    axios
      .delete(baseUrl)
      .then((response) => {
        console.log(idtrabalhador);
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          LoadTrabalhadores();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadTrabalhadores();
    }, []);
  }

  function LoadTrabalhadores() {
    const url = "https://backend-incomum.herokuapp.com/trabalhadores/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataTrabalhadores(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}
