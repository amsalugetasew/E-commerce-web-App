import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="text-center text-lg-start bg-dark text-white text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span className='span'>GHabesha connected with us on social networks:</span>
    </div>
    <div>
      <a href="https://www.facebook.com/" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a  href="https://twitter.com/amsalugetasew16" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="www.linkedin.com/in/getasew-amsalu" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="https://www.linkedin.com/in/getasew-amsalu" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/getasew-amsalu" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/amsalugetasew" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            GHabesh E-commerce is going to lounch 2022 on the historical city of Gondar on Maraki Sub-city 
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Men's Clothing</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Women's Clothing</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Jewlery</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Gojam Azene</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Pricing</a>
          </p>
          {/* <p>
            <a href="/Profile" className="text-reset text-decoration-none">Profile</a>
          </p> */}
          <p>
            <a href="/Setting" className="text-reset text-decoration-none">Settings</a>
          </p>
          <p>
            <a href="/Products" className="text-reset text-decoration-none">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Gondar, Marki, Ethiopia</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 251 928 531 589</p>
          <p><i className="fas fa-print me-3"></i> + 251 928 551 749</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold mx-2 text-decoration-none" href="https://ghabesha.netlify.app/">Ghabesha.com</a>
  </div>
</footer>
    </div>
  )
}

export default Footer