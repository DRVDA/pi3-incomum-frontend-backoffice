import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from './view/login';
import Dashboard from './view/dashboard';
import ClientesList from './view/clientesList';

import Form from './view/form';
import List from './view/list';
import Edit from './view/edit';
function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="container py-4">
          <div className="row">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clientesList" element={<ClientesList />} />

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