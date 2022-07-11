import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function packList() {
  const [packList, setdataPack] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/packs/list/";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPack(data);
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
      <Navbar />

      <br />
      <br />
      <div className="row col-12">

<div className="col-2"></div>
  
  
  <div className="col-10">

        {/*Grids*/}
        <div className="d-flex justify-content-between mt-5">
              <h5 className="underline-light-pink">
                Lista de packs
              </h5>
            <form className="form-inline">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
            </form>
            <Link to="/packsForm">
              <button className="   btn btn-primary">Adicionar</button>
            </Link>
        </div>

        <div className="row col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">nome</th>
                <th scope="col">preco</th>
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
    return packList
    .filter((val) => {
      if(searchTerm ==""){
          return val
      } else if (val.nome.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
          return val
      }
  })
    .map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idpack}</th>
          <td>{data.nome}</td>
          <td>{data.preco}</td>
          <td>
            <Link className="btn btn-outline-info" to={"/packsEdit/" + data.idpack}>
              Edit
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => notificationOnDelete(data.idpack)}
            >
              {" "}
              Delete{" "}
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

  function SendDelete(idpack) {
    // url do backend
    console.log("vou apagar" , idpack);

    const baseUrl = "https://backend-incomum.herokuapp.com/packs/delete/" + idpack;
    // network
    axios
      .delete(baseUrl)
      .then((response) => {
        console.log(response.status);

        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          LoadPack();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadPack();
    }, []);
  }

  function LoadPack() {
    const url = "https://backend-incomum.herokuapp.com/packs/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPack(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}
