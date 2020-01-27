import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Modal({
  handleClose,
  show,
  login,
  currentUser,
  loggedIn
}) {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    if (loggedIn) {
      window.confirm("Thanks! You've logged in.");
      handleClose();
    }
  }, [currentUser]);

  const handleSubmit = e => {
    e.preventDefault();
    login({ username: state.username, password: state.password });
  };

  // change class name to show modal or not
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main fade-in">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-login">
            <input
              name="username"
              type="email"
              value={state.username}
              placeholder="Your email address"
              onChange={handleChange}
              className="form modal-items"
            />
            <input
              name="password"
              type="password"
              value={state.password}
              placeholder="Choose a password"
              onChange={handleChange}
              className="form modal-items"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="submit form modal-items"
            >
              Login
            </button>
          </div>
          <button
            className="form modal-items close submit"
            onClick={handleClose}
          >
            Close
          </button>
        </form>
      </section>
    </div>
  );

  function handleChange(evt) {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  }
}
