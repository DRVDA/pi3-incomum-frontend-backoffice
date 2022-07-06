import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AuthService from "./view/auth.service";

import Login from "./view/login";
import Index from './view/index';
import Dashboard from './view/dashboard';

import ClientesList from './view/clientesList';
import ClienteForm from './view/clientesForm';
import ClienteEdit from './view/clientesEdit';

import TrabalhadoresList from './view/trabalhadoresList';
import TrabalhadoresForm from './view/trabalhadoresForm';
import TrabalhadoresEdit from './view/trabalhadoresEdit';

import PacksList from './view/packsList';
import PacksForm from './view/packsForm';
import PacksEdit from './view/packsEdit';

import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';

function App() {
  return (
    <Router>
      <div className="App">
        
          <div className="row">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/clientesList" element={<ClientesList />} />
              <Route path="/clientesForm" element={<ClienteForm />} />
              <Route path="/clientesEdit/:idCliente" element={<ClienteEdit />} />

              <Route path="/trabalhadoresList" element={<TrabalhadoresList />} />
              <Route path="/trabalhadoresForm" element={<TrabalhadoresForm />} />
              <Route path="/trabalhadoresEdit/:idTrabalhador" element={<TrabalhadoresEdit />} />

 
              <Route path="/packsList" element={<PacksList />} />
              <Route path="/packsForm" element={<PacksForm />} />
              <Route path="/packsEdit/:idPack" element={<PacksEdit />} />

              <Route path="/form" element={<Form />} />
              <Route path="/edit/:filmeid" element={<Edit />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
  

      
}
export default App;