import React, { useEffect, useState } from "react";

function Footer(props) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  return (
    <div className="section section-ruled">
      <div className="container">
        <div className="cols">
          <div className="wrapper">
            <div className="heading">
              <h2>
                Interested in improving your customer experience with NPS?
              </h2>
            </div>
          </div>
        </div>
      </div>

      <form className="form">
        <input
          id="email"
          name="email"
          type="email"
          value={state.email}
          placeholder="Your email address"
          maxlength="255"
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          value={state.password}
          placeholder="Choose a password"
          maxlength="255"
          onChange={handleChange}
        />
        <div className="button">
          <button type="submit" id="get-started">
            Get Started
          </button>
          or
          <button type="submit" id="google">
            Sign up with Google
          </button>
        </div>
      </form>

      <div className="container">
        <div className="sharing"></div>
      </div>
    </div>
  );

  // handles the changes in inputs
  function handleChange(evt) {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  }
}

export default Footer;
