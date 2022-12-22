import "./Assets/css/style.css";
import { Link } from "react-router-dom";
import logo from "./Assets/images/logo-light.png";

export default function Header() {
  const links = {
    color: "white",
  };
  return (
    <>
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>
        <div style={{marginTop:"40px"}} className="header-bottom">
          <div  className="container">
          <a href="#" class="logo">
              <img
                src={require("./Assets/images/LOGO5.png")}
                alt="Homeverse logo"
                style={{width:"150px"}}
              />
             </a>
            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img
                    src={require("./Assets/images/logo-light.png")}
                    alt="Homeverse logo"
                  />
                </a>

                <button
                  className="nav-close-btn"
                  data-nav-close-btn
                  aria-label="Close Menu"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              <div className="navbar-bottom">
                <ul style={{marginTop:"20px"}} className="navbar-list">
                  <li>
                    <Link to="/home" className="navbar-link" style={links}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#about"
                      style={links}
                      className="navbar-link"
                      data-nav-link
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <Link to="/buy" className="navbar-link" style={links}>
                      Find Property
                    </Link>
                  </li>

                  <li>
                    <a href="#" className="navbar-link" style={links}>
                      SwitchAccount
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="header-bottom-actions">
              <div style={{ marginTop: "10px" }} class="input-group">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control" />
                </div>
                <button
                  style={{ width: "50px", height: "40px" }}
                  type="button"
                  class="btn"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
              <Link className="nav-link " to="/profile">
                <img
                  src={require("./Assets/images/Obaid.PNG")}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "10px",
                    border: "2px solid red",
                    borderRadius: "50%",
                    overflow: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
