import '../Components/Assets/css/order.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer.js'

export default function Order() {
  return (
    <>
    <Header/>
      <main id="mainDiv">
        <div className="cardss">
          <div className="image">
          </div>
          <div className="content">
            <h1 className="title">Order Summary</h1>
            <p className="description"></p>
            <div className="order">
              <div className="icon"></div>
              <div className="plan">
                <h2 className="title-plan">Owner</h2>
                <p className="price-plan">Umar Akhtar</p>
                <h2 className="title-plan">Transfer To</h2>
                <p className="price-plan">Obaid ismail</p>
                <h2 className="title-plan">House Details</h2>
                <p className="price-plan">Flat, 2 bedrooms</p>
              </div>
            </div>
            <button className="btn-process">
              Proceed to Payment
            </button>
            <a href="#" className="btn-cancel">
              Cancel Order
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
