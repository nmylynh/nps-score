import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { register, addNPS, fetchUserNPS } from "../actions";

// footer with the sign up and share buttons, renders differently if signed in or not
function Footer(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    description: "",
  });

  let { totalPromoters, totalPassives, totalDetractors } = props.totals;

  // on register success, give a success message
  useEffect(() => {
    if (props.registerSuccess) {
      window.confirm("Thanks! You've successfully registered.");
    }
  }, [props.registerSuccess]);

  // calculates the nps to send to the API
  const sumOfAllTypes = totalPromoters + totalPassives + totalDetractors;
  const calcNps = () =>
    Math.round(
      (totalPromoters / sumOfAllTypes) * 100 -
        (totalPromoters / sumOfAllTypes) * 100
    );

  // sends email and password to the server to register
  const register = e => {
    e.preventDefault();
    props.register({ username: state.username, password: state.password });
  };

  // sends the current nps data to the API, and refetches user nps data
  const saveNps = e => {
    const id = props.currentUser.subject
    e.preventDefault();
    let npsObj = {
      name: state.name,
      description: state.description,
      user_id: id ? id : null,
      total_promoters: totalPromoters,
      total_passives: totalPassives,
      total_detractors: totalDetractors,
      nps_score: calcNps() ? calcNps() : 0
    };
    props.addNPS(npsObj);
    setState({
      name: "",
      description: ""
    });
    props.fetchUserNPS(props.currentUser.subject);
  };

  // renders the nps save option if a user is logged in
  const dashboard = (
    <form className="form" onSubmit={saveNps}>
      <input
        name="name"
        type="text"
        value={state.name}
        placeholder="The name of this project"
        onChange={handleChange}
        className="send-nps"
      />
      <input
        name="description"
        type="textarea"
        value={state.description}
        placeholder="Describe this project"
        onChange={handleChange}
        className="send-nps"
      />
      <div className="button">
        <button className="submit send-nps" type="submit" onClick={saveNps}>
          Submit
        </button>
      </div>
    </form>
  );

  // renders sign up if a user isn't logged in
  const signUp = (
    <form className="form" onSubmit={register}>
      <input
        id="email"
        name="username"
        type="email"
        value={state.username}
        placeholder="Your email address"
        onChange={handleChange}
      />
      <input
        id="password"
        name="password"
        type="password"
        value={state.password}
        placeholder="Choose a password"
        onChange={handleChange}
      />
      <div className="button">
        <button type="submit" id="get-started" onClick={register}>
          Get Started
        </button>
        or
        <button type="submit" id="google">
          Sign up with Google
        </button>
      </div>
    </form>
  );

  return (
    <div className="section section-ruled">
      <div className="container">
        <div className="cols">
          <div className="wrapper">
            <div className="heading">
              <h2>
                {props.currentUser
                  ? "Would you like to save your current NPS information?"
                  : "Interested in improving your customer experience with NPS?"}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {props.currentUser ? dashboard : signUp}

      <div className="container container-social">
        <div className="social">
          <a className="fab fa-twitter" href="#"></a>
          <a className="fab fa-facebook-f" href="#"></a>
        </div>
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

const mapStateToProps = ({ totals, auth }) => ({
  totals: totals,
  registerSuccess: auth.registerSuccess,
  currentUser: auth.currentUser
});

export default connect(mapStateToProps, { register, addNPS, fetchUserNPS })(
  Footer
);
