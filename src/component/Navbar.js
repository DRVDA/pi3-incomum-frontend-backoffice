import { Link } from "react-router-dom";


{/* MDB */}
import "../css/mdb.min.css";
import "../js/mdb.min.js";

function Navbar() {
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-primary"
      >
        <div className="position-sticky">
          <div className="list-group mx-2 mt-3">
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <Link to="/dashboard">Dashboard</Link>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <Link to="/clientesList">Clientes</Link>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <Link to="/funcionariosList">Funcionarios</Link>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-line fa-fw me-3"></i>
              <Link to="/editoresList">Editores</Link>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i>
              <Link to="/packs">Packs</Link>
            </a>
          </div>
        </div>
      </nav>
      {/* Sidebar */}

      {/* Navbar */}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Brand */}
          <a className="navbar-brand" href="#">
            <img
              src="https://incommun.pt/wp-content/uploads/2022/02/logotipoincommun.png"
              height="35"
              alt="incommun logo"
              loading="lazy"
            />
          </a>

          {/* Right links */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* Avatar */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="30"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item list-group-item" href="#">
                    Definições
                  </a>
                </li>
                <li>
                  <a className="dropdown-item list-group-item" href="#">
                    Sair
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  );

}

export default Navbar
