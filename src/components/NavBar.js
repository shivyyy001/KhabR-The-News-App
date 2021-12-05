import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = (props) => {
  const navigate = useNavigate();

  function search(event) {
    event.preventDefault();
    let typed = document.getElementById("text-field");
    let lowertyped = typed.value.toLowerCase();

    if (
      lowertyped === "business" ||
      lowertyped === "entertainment" ||
      lowertyped === "health" ||
      lowertyped === "science" ||
      lowertyped === "sports" ||
      lowertyped === "technology"
    ) {
      navigate(`/${lowertyped}`);
    } else {
      toast.error("Please enter a valid category.", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
    }
    typed.value = "";
  }

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${
          props.mode === "dark" ? "light" : "dark"
        } bg-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
             KHAB₹
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>

            <div className="form-check form-switch mx-3">
              <label
                className={`form-check-label text-${props.mode==='dark'?'dark':'light'}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.ToggleMode}
              />
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search category"
                aria-label="Search"
                id="text-field"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={search}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default NavBar;
