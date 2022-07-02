import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:3000";

import Navbar from "../component/Navbar";

export default function clientesEdit() {
    const [campNome, setcampNome] = useState("");
    const [campEmail, setcampEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { idCliente } = useParams();

    useEffect(() => {
        const url = baseUrl + "/cliente/get/" + idCliente;
        setIsLoading(true);
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data[0];
                    setcampIdCliente(data.idCliente)
                    setcampNome(data.nome);
                    setcampEmail(data.email);

                    // if (setselectGenero = "1") 
                    // {
                    //     saveid = 1;

                    // } else if (setselectGenero = "2") {

                    //     saveid = 2;

                    // } else {

                    //     saveid = 3;
                    // }


                    /*console.log("Data Genero " + data.genero.descricao);
                    console.log("Data Id " + data.generoId);

                    console.log("setselect " + setselectGenero.value);
                    console.log("select " + selectGenero.value);*/
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
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
                            <label htmlFor="inputNome">Nome</label>
                            <input type="text" className="form-control" placeholder="Nome"
                                value={campNome} onChange={(value) =>
                                    setCampNome(value.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="text" className="form-control"
                                placeholder="Email"
                                value={campEmail} onChange={(value) =>
                                    setcampEmail(value.target.value)} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={() => sendUpdate()}>Update</button>
                </>

            )}
</div></div></div>
        </div>
    );

    function sendUpdate() {
        // url de backend
        const url = baseUrl + "/cliente/update/" + idCliente
        const datapost = {
            nome: campNome,
            email: campEmail
        }

        console.log(campNome, campEmail)

        axios.post(url, datapost)
            .then(response => {
                if (response.data.success === true) {
                    alert(response.data.message)
                }
                else {
                    alert("Error")
                }
            }).catch(error => {
                alert("Error 34 " + error)
            }
            )
    }
}