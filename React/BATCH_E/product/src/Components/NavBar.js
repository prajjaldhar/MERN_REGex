import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fas fa-home fa-lg mb-1" />
                  </div>
                  Home
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="far fa-envelope fa-lg mb-1" />
                    <span className="badge rounded-pill badge-notification bg-danger">
                      11
                    </span>
                  </div>
                  Link
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link disabled" aria-disabled="true" href="#!">
                  <div>
                    <i className="far fa-envelope fa-lg mb-1" />
                    <span className="badge rounded-pill badge-notification bg-warning">
                      11
                    </span>
                  </div>
                  Disabled
                </a>
              </li>
              <li className="nav-item dropdown text-center mx-2 mx-lg-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>
                    <i className="far fa-envelope fa-lg mb-1" />
                    <span className="badge rounded-pill badge-notification bg-primary">
                      11
                    </span>
                  </div>
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="fas fa-bell fa-lg mb-1" />
                    <span className="badge rounded-pill badge-notification bg-info">
                      11
                    </span>
                  </div>
                  Messages
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="fas fa-globe-americas fa-lg mb-1" />
                    <span className="badge rounded-pill badge-notification bg-success">
                      11
                    </span>
                  </div>
                  News
                </a>
              </li>
            </ul>
            <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
