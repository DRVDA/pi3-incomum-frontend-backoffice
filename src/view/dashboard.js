import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "../component/Navbar";

export default function Dashboard() {

const [compraList, setdataCompra] = useState([]);

  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/compra/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataCompra(data);
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
        <br />

        <div className="row col-12">
          <div className="col-2"></div>

          <div className="col-10">
            {/* Calculations*/}
            <div class="row">
            
            


              <div class="mt-5 col-lg-3 col-md-6 col-sm-6 border d-flex justify-content-end mx-5">
                <div class="col-3 ">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-2 w-150"
                    viewBox="0 0 640 512"
                  >
                    {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z" />
                  </svg>
                  
                </div>
                <div class="col-9">
                  <h1 class="mt-3 text-center">888</h1>
                </div>
              </div>



              <div class="mt-5 col-lg-3 col-md-6 col-sm-6 border d-flex justify-content-end mx-5">
                <div class="col-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-100"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64S204.7 128 240 128zM336 384h-192C135.2 384 128 376.8 128 368C128 323.8 163.8 288 208 288h64c44.18 0 80 35.82 80 80C352 376.8 344.8 384 336 384zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320z" />
                  </svg>
                </div>
                <div class="col-9">
                  <h1 class="mt-3 text-center">888</h1>
                </div>
              </div>



              <div class="mt-5 col-lg-3 col-md-6 col-sm-6 border d-flex justify-content-end mx-5">
                <div class="col-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-100"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z" />
                  </svg>
                </div>
                <div class="col-9">
                  <h1 class="mt-3 text-center">888</h1>
                </div>
              </div>

            </div>

            {/*Graphics*/}
            <div class="row">
              <div class="mt-5 col-6 text-center">
                <h5>Fidelidades</h5>
                <div id="chartdiv"></div>
              </div>
              <div class="mt-5 col-6 text-center">
                <h5>Fidelidades</h5>
                <div id="chartdiv1"></div>
              </div>
            </div>

            {/*Grids*/}
            <div class="row">
              <div class="col-6">
                <h5 class="text-center underline-light-pink">Compras</h5>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">idcompra</th>
                      <th scope="col">idcliente</th>
                      <th scope="col">datacompra</th>
                    </tr>
                  </thead>
                  <tbody>
                    <LoadFillDataCompra />
                  </tbody>
                </table>

                {/* Numeração aba de lista */}
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>1</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>2</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>3</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>4</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>5</b>
                  </button>
                </div>
              </div>

              <div class="col-6">
                <h5 class="text-center underline-light-pink">Algo a definir</h5>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                {/* Numeração aba de lista */}
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>1</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>2</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>3</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>4</b>
                  </button>
                  <button
                    type="button"
                    class="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
                  >
                    <b>5</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    

    function LoadFillDataCompra() {
    return compraList.map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idcompra}</th>
          <td>{data.idcliente}</td>
          <td>{data.datacompra}</td>
          <td>
            <Link className="btn btn-outline-info" to={"/edit/" + data.idcompra}>
              Edit
            </Link>
          </td>
          <td>
            <button
              class="btn btn-outline-danger"
              onClick={() => OnDeleteCompra(data.idcompra)}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }

  function OnDeleteCompra(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        OnDeleteCompra(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  function OnDeleteCompra(idcompra) {
    // url do backend
    const baseUrl = "https://backend-incomum.herokuapp.com/compra/delete/" + idcompra;
    // network
    axios
      .delete(baseUrl)
      .then((response) => {
        console.log(idcompra);
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          LoadCompra();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadCompra();
    }, []);
  }

  function LoadCompra() {
    const url = "https://backend-incomum.herokuapp.com/compra/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataCompra(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}