import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://i.pinimg.com/originals/01/63/7c/01637cb20c70eb06221e5aa47a196ebb.png"
            style={{ color: 'red', fontWeight: 'bold' }}>OwO Filmes OvO</a>
          <button className="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" arialabel="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/"> Lista de Filmes </Link>
              </li>
            </ul>
            <Link className="btn btn-success " to="/form">Adicionar Filme</Link>
          </div>
        </nav>
        <div className="container py-4">
          <div className="row">
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/form" element={<Form />} />
              <Route path="/edit/:filmeid" element={<Edit />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;