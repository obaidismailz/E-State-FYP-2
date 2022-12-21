import "./Assets/css/style.css";
import { Link } from "react-router-dom";
import logo from "./Assets/images/logo-light.png";

export default function Header() {
  const links={
    color: "white"
  }
  return (
    <>
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>
        <div className="header-bottom">
          <div className="container">
            <a href="#" className="logo">
              <img
                src={require("./Assets/images/logo-light.png")}
                alt="Homeverse logo"
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
                <ul className="navbar-list">
                  <li>
                  <Link
                          to="/home"
                          className="navbar-link"
                          style={links}
                        >
                          Home
                  </Link>
                  </li>

                  <li>
                    <a href="#about" style={links} className="navbar-link" data-nav-link>
                      About
                    </a>
                  </li>

                  <li>
                  <Link
                          to="/buy"
                          className="navbar-link"
                          style={links}
                        >
                          Find Property
                  </Link>
                  </li>

                  <li>
                    <a href="#contact" style={links} className="navbar-link" data-nav-link>
                      Contact
                    </a>
                  </li>
                  
                  <li>
                    <Link
                          to="/signup"
                          className="navbar-link"
                          style={links}
                        >
                          SingUp
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="header-bottom-actions">
              <button className="header-bottom-actions-btn" aria-label="Search">
                <ion-icon name="search-outline"></ion-icon>

                <span>Search</span>
              </button>

              <button
                className="header-bottom-actions-btn"
                aria-label="Profile"
              >
                <ion-icon name="person-outline"></ion-icon>

                <span>Profile</span>
              </button>

              <button className="header-bottom-actions-btn" aria-label="Cart">
                <ion-icon name="cart-outline"></ion-icon>

                <span>Cart</span>
              </button>

              <button
                className="header-bottom-actions-btn"
                data-nav-open-btn
                aria-label="Open Menu"
              >
                <ion-icon name="menu-outline"></ion-icon>

                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
