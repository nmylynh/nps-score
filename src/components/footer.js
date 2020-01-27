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
    user_id: props.currentUser.subject
  });

  let { totalPromoters, totalPassives, totalDetractors } = props.totals;

  useEffect(() => {
    if (props.registerSuccess) {
      window.confirm("Thanks! You've successfully registered.");
    }
  }, [props.registerSuccess]);

  const sumOfAllTypes = totalPromoters + totalPassives + totalDetractors;
  const calcNps = () =>
    Math.round(
      (totalPromoters / sumOfAllTypes) * 100 -
        (totalPromoters / sumOfAllTypes) * 100
    );

  const register = e => {
    e.preventDefault();
    props.register({ username: state.username, password: state.password });
  };

  const saveNps = e => {
    e.preventDefault();
    let npsObj = {
      name: state.name,
      description: state.description,
      user_id: state.user_id,
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
