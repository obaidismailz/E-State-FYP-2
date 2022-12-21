import './Assets/css/style.css'
import { Link } from "react-router-dom";
export default function Main() {
    return (
      <>
        <main>
          <article>
            <section className="hero" id="home">
              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle">
                    <ion-icon name="home"></ion-icon>
  
                    <span>Real Estate Agency</span>
                  </p>
  
                  <h2 className="h1 hero-title">Find Your Dream House By Us</h2>
  
                  <p className="hero-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
  
                  <button className="btn">Make An Enquiry</button>
                </div>
  
                <figure className="hero-banner">
                  <img
                    src={require("./Assets/images/hero-banner.png")}
                    alt="Modern house model"
                    className="w-100"
                  ></img>
                </figure>
              </div>
            </section>
            <section className="about" id="about">
              <div className="container">
                <figure className="about-banner">
                  <img
                    src={require("./Assets/images/about-banner-1.png")}
                    alt="House interior"
                  ></img>
  
                  <img
                    src={require("./Assets/images/about-banner-2.jpg")}
                    alt="House interior"
                    className="abs-img"
                  ></img>
                </figure>
  
                <div className="about-content">
                  <p className="section-subtitle">About Us</p>
  
                  <h2 className="h2 section-title">
                    The Leading Real Estate Rental Marketplace.
                  </h2>
  
                  <p className="about-text">
                    Over 39,000 people work for us in more than 70 countries all
                    over the This breadth of global coverage, combined with
                    specialist services
                  </p>
  
                  <ul className="about-list">
                    <li className="about-item">
                      <div className="about-item-icon">
                        <ion-icon name="home-outline"></ion-icon>
                      </div>
  
                      <p className="about-item-text">Smart Home Design</p>
                    </li>
  
                    <li className="about-item">
                      <div className="about-item-icon">
                        <ion-icon name="leaf-outline"></ion-icon>
                      </div>
  
                      <p className="about-item-text">Beautiful Scene Around</p>
                    </li>
  
                    <li className="about-item">
                      <div className="about-item-icon">
                        <ion-icon name="wine-outline"></ion-icon>
                      </div>
  
                      <p className="about-item-text">Exceptional Lifestyle</p>
                    </li>
  
                    <li className="about-item">
                      <div className="about-item-icon">
                        <ion-icon name="shield-checkmark-outline"></ion-icon>
                      </div>
  
                      <p className="about-item-text">Complete 24/7 Security</p>
                    </li>
                  </ul>
  
                  <p className="callout">
                    "Enimad minim veniam quis nostrud exercitation llamco laboris.
                    Lorem ipsum dolor sit amet"
                  </p>
  
                  <a href="#service" className="btn">
                    Our Services
                  </a>
                </div>
              </div>
            </section>
            <section className="service" id="service">
              <div className="container">
                <p className="section-subtitle">Our Services</p>
  
                <h2 className="h2 section-title">Our Main Focus</h2>
  
                <ul className="service-list">
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <img
                          src={require("./Assets/images/service-1.png")}
                          alt="Service icon"
                        ></img>
                      </div>
  
                      <h3 className="h3 card-title">
                        <a href="#">Buy a home</a>
                      </h3>
  
                      <p className="card-text">
                        over 1 million+ homes for sale available on the website,
                        we can match you with a house you will want to call home.
                      </p>
  
                      <Link to="/buy" className="card-link">
                        <span>Find A Home</span>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                      </Link>
                    </div>
                  </li>
  
                  
  
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <img
                          src={require("./Assets/images/service-3.png")}
                          alt="Service icon"
                        ></img>
                      </div>
  
                      <h3 className="h3 card-title">
                        <a href="#">Sell a home</a>
                      </h3>
  
                      <p className="card-text">
                        over 1 million+ homes for sale available on the website,
                        we can match you with a house you will want to call home.
                      </p>
  
                      <a href="#" className="card-link">
                        <span>Find A Home</span>
  
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="property" id="property">
              <div className="container">
                <p className="section-subtitle">Properties</p>
  
                <h2 className="h2 section-title">Featured Listings</h2>
  
                <ul className="property-list has-scrollbar">
                  <li>
                    <div className="property-card">
                      <figure className="card-banner">
                        <a href="#">
                          <img
                            src={require("./Assets/images/property-1.jpg")}
                            alt="New Apartment Nice View"
                            className="w-100"
                          ></img>
                        </a>
  
                        <div className="card-badge green">For Rent</div>
  
                        <div className="banner-actions">
                          <button className="banner-actions-btn">
                            <ion-icon name="location"></ion-icon>
  
                            <address>Belmont Gardens, Chicago</address>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="camera"></ion-icon>
  
                            <span>4</span>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="film"></ion-icon>
  
                            <span>2</span>
                          </button>
                        </div>
                      </figure>
  
                      <div className="card-content">
                        <div className="card-price">
                          <strong>$34,900</strong>/Month
                        </div>
  
                        <h3 className="h3 card-title">
                          <a href="#">New Apartment Nice View</a>
                        </h3>
  
                        <p className="card-text">
                          Beautiful Huge 1 Family House In Heart Of Westbury.
                          Newly Renovated With New Wood
                        </p>
  
                        <ul className="card-list">
                          <li className="card-item">
                            <strong>3</strong>
  
                            <ion-icon name="bed-outline"></ion-icon>
  
                            <span>Bedrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>2</strong>
  
                            <ion-icon name="man-outline"></ion-icon>
  
                            <span>Bathrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>3450</strong>
  
                            <ion-icon name="square-outline"></ion-icon>
  
                            <span>Square Ft</span>
                          </li>
                        </ul>
                      </div>
  
                      <div className="card-footer">
                        <div className="card-author">
                          <figure className="author-avatar">
                            <img
                              src={require("./Assets/images/author.jpg")}
                              alt="William Seklo"
                              className="w-100"
                            ></img>
                          </figure>
  
                          <div>
                            <p className="author-name">
                              <a href="#">William Seklo</a>
                            </p>
  
                            <p className="author-title">Estate Agents</p>
                          </div>
                        </div>
  
                        <div className="card-footer-actions">
                          <button className="card-footer-actions-btn">
                            <ion-icon name="resize-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
  
                  <li>
                    <div className="property-card">
                      <figure className="card-banner">
                        <a href="#">
                          <img
                            src={require("./Assets/images/property-2.jpg")}
                            alt="Modern Apartments"
                            className="w-100"
                          ></img>
                        </a>
  
                        <div className="card-badge orange">For Sales</div>
  
                        <div className="banner-actions">
                          <button className="banner-actions-btn">
                            <ion-icon name="location"></ion-icon>
  
                            <address>Belmont Gardens, Chicago</address>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="camera"></ion-icon>
  
                            <span>4</span>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="film"></ion-icon>
  
                            <span>2</span>
                          </button>
                        </div>
                      </figure>
  
                      <div className="card-content">
                        <div className="card-price">
                          <strong>$34,900</strong>/Month
                        </div>
  
                        <h3 className="h3 card-title">
                          <a href="#">Modern Apartments</a>
                        </h3>
  
                        <p className="card-text">
                          Beautiful Huge 1 Family House In Heart Of Westbury.
                          Newly Renovated With New Wood
                        </p>
  
                        <ul className="card-list">
                          <li className="card-item">
                            <strong>3</strong>
  
                            <ion-icon name="bed-outline"></ion-icon>
  
                            <span>Bedrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>2</strong>
  
                            <ion-icon name="man-outline"></ion-icon>
  
                            <span>Bathrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>3450</strong>
  
                            <ion-icon name="square-outline"></ion-icon>
  
                            <span>Square Ft</span>
                          </li>
                        </ul>
                      </div>
  
                      <div className="card-footer">
                        <div className="card-author">
                          <figure className="author-avatar">
                            <img
                              src={require("./Assets/images/author.jpg")}
                              alt="William Seklo"
                              className="w-100"
                            ></img>
                          </figure>
  
                          <div>
                            <p className="author-name">
                              <a href="#">William Seklo</a>
                            </p>
  
                            <p className="author-title">Estate Agents</p>
                          </div>
                        </div>
  
                        <div className="card-footer-actions">
                          <button className="card-footer-actions-btn">
                            <ion-icon name="resize-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
  
                  <li>
                    <div className="property-card">
                      <figure className="card-banner">
                        <a href="#">
                          <img
                            src={require("./Assets/images/property-3.jpg")}
                            alt="Comfortable Apartment"
                            className="w-100"
                          ></img>
                        </a>
  
                        <div className="card-badge green">For Rent</div>
  
                        <div className="banner-actions">
                          <button className="banner-actions-btn">
                            <ion-icon name="location"></ion-icon>
  
                            <address>Belmont Gardens, Chicago</address>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="camera"></ion-icon>
  
                            <span>4</span>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="film"></ion-icon>
  
                            <span>2</span>
                          </button>
                        </div>
                      </figure>
  
                      <div className="card-content">
                        <div className="card-price">
                          <strong>$34,900</strong>/Month
                        </div>
  
                        <h3 className="h3 card-title">
                          <a href="#">Comfortable Apartment</a>
                        </h3>
  
                        <p className="card-text">
                          Beautiful Huge 1 Family House In Heart Of Westbury.
                          Newly Renovated With New Wood
                        </p>
  
                        <ul className="card-list">
                          <li className="card-item">
                            <strong>3</strong>
  
                            <ion-icon name="bed-outline"></ion-icon>
  
                            <span>Bedrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>2</strong>
  
                            <ion-icon name="man-outline"></ion-icon>
  
                            <span>Bathrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>3450</strong>
  
                            <ion-icon name="square-outline"></ion-icon>
  
                            <span>Square Ft</span>
                          </li>
                        </ul>
                      </div>
  
                      <div className="card-footer">
                        <div className="card-author">
                          <figure className="author-avatar">
                            <img
                              src={require("./Assets/images/author.jpg")}
                              alt="William Seklo"
                              className="w-100"
                            ></img>
                          </figure>
  
                          <div>
                            <p className="author-name">
                              <a href="#">William Seklo</a>
                            </p>
  
                            <p className="author-title">Estate Agents</p>
                          </div>
                        </div>
  
                        <div className="card-footer-actions">
                          <button className="card-footer-actions-btn">
                            <ion-icon name="resize-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
  
                  <li>
                    <div className="property-card">
                      <figure className="card-banner">
                        <a href="#">
                          <img
                            src={require("./Assets/images/property-4.png")}
                            alt="Luxury villa in Rego Park"
                            className="w-100"
                          ></img>
                        </a>
  
                        <div className="card-badge green">For Rent</div>
  
                        <div className="banner-actions">
                          <button className="banner-actions-btn">
                            <ion-icon name="location"></ion-icon>
  
                            <address>Belmont Gardens, Chicago</address>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="camera"></ion-icon>
  
                            <span>4</span>
                          </button>
  
                          <button className="banner-actions-btn">
                            <ion-icon name="film"></ion-icon>
  
                            <span>2</span>
                          </button>
                        </div>
                      </figure>
  
                      <div className="card-content">
                        <div className="card-price">
                          <strong>$34,900</strong>/Month
                        </div>
  
                        <h3 className="h3 card-title">
                          <a href="#">Luxury villa in Rego Park</a>
                        </h3>
  
                        <p className="card-text">
                          Beautiful Huge 1 Family House In Heart Of Westbury.
                          Newly Renovated With New Wood
                        </p>
  
                        <ul className="card-list">
                          <li className="card-item">
                            <strong>3</strong>
  
                            <ion-icon name="bed-outline"></ion-icon>
  
                            <span>Bedrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>2</strong>
  
                            <ion-icon name="man-outline"></ion-icon>
  
                            <span>Bathrooms</span>
                          </li>
  
                          <li className="card-item">
                            <strong>3450</strong>
  
                            <ion-icon name="square-outline"></ion-icon>
  
                            <span>Square Ft</span>
                          </li>
                        </ul>
                      </div>
  
                      <div className="card-footer">
                        <div className="card-author">
                          <figure className="author-avatar">
                            <img
                              src={require("./Assets/images/author.jpg")}
                              alt="William Seklo"
                              className="w-100"
                            ></img>
                          </figure>
  
                          <div>
                            <p className="author-name">
                              <a href="#">William Seklo</a>
                            </p>
  
                            <p className="author-title">Estate Agents</p>
                          </div>
                        </div>
  
                        <div className="card-footer-actions">
                          <button className="card-footer-actions-btn">
                            <ion-icon name="resize-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>
  
                          <button className="card-footer-actions-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="service" id="service">
              <div className="container">
                <p className="section-subtitle">Calculators</p>
  
                <h2 className="h2 section-title">Other Features</h2>
  
                <ul className="service-list">
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <img
                          src={require("./Assets/images/service-1.png")}
                          alt="Service icon"
                        ></img>
                      </div>
  
                      <h3 className="h3 card-title">
                        <a href="#">Unit Convertor</a>
                      </h3>
  
                      <p className="card-text">
                        You can easily convert your squarefeet measurements to marla and vice versa using the convertor
                      </p>
  
                      
                      <Link
                          to="/unit"
                          className="card-link"
                        >
                          <span>Convert</span>
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                  </Link>
                    </div>
                  </li>
  
                  
  
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <img
                          src={require("./Assets/images/service-3.png")}
                          alt="Service icon"
                        ></img>
                      </div>
  
                      <h3 className="h3 card-title">
                        <a href="#">ROI Calculator</a>
                      </h3>
  
                      <p className="card-text">
                        You can easily calculate the ROI of a real estate before purchasing increasing the chace of profit
                      </p>
  
                      <Link
                          to="/roi"
                          className="card-link"
                        >
                          <span>Calculate</span>
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                  </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="cta">
              <div className="container">
                <div className="cta-card">
                  <div className="card-content">
                    <h2 className="h2 card-title">Looking for a dream home?</h2>
  
                    <p className="card-text">
                      We can help you realize your dream of a new home
                    </p>
                  </div>
  
                  <button className="btn cta-btn">
                    <span>Explore Properties</span>
  
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </section>
          </article>
        </main>
      </>
    );
  }