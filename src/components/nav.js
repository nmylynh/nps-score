import React, { useState } from "react";
import Modal from "./modal";
import { connect } from "react-redux";
import { login, logout } from "../actions";

// Navbar for the app
function NavBar(props) {
  const [show, setShow] = useState(false);

  // toggle the modal to show or not
  const handleClose = () => setShow(!show);

  // placeholder, but if using react router you would use Link to
  const link = (text, link) => (
    <li>
      <a href={link}>{text}</a>
    </li>
  );

  const signUp = (
    <li>
      <a href="#!" onClick={() => setShow(true)}>
        Sign in
      </a>
    </li>
  );

  const signedIn = (
    <li>
      <a href="#!" onClick={props.logout}>
        Logout
      </a>
    </li>
  );

  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <div className="nav-left">
                <li>
                  <a href="#!">
                    Product <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="nav-dropdown">
                    {link("Product 1", "#!")}
                    {link("Product 2", "#!")}
                    {link("Product 3", "#!")}
                  </ul>
                </li>
                {link("Customers", "#!")}
                {link("Enterprise", "#!")}
                {link("Pricing", "#!")}
              </div>
              <div className="nav-right">
                <li>
                  <a href="#!">
                    Help <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="nav-dropdown">
                    {link("Help 1", "#!")}
                    {link("Help 2", "#!")}
                    {link("Help 3", "#!")}
                  </ul>
                </li>
                {link("Get started for free", "#!")}
                {props.currentUser ? signedIn : signUp}
              </div>
            </ul>
          </nav>
        </div>
      </section>
      {/* login component */}
      <Modal
        show={show}
        handleClose={handleClose}
        login={props.login}
        currentUser={props.currentUser}
        loggedIn={props.loggedIn}
        loading={props.loading}
      />
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
  loggedIn: auth.loggedIn,
  loading: auth.loading
});

export default connect(mapStateToProps, { login, logout })(NavBar);
