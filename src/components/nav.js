import React from "react";

function NavBar() {
  return (
    <div class="navbar">
      <div class="dropdown" style={{ float: "left" }}>
        <button class="dropbtn">
          Product
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content" style={{ left: 0 }}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="#home">Customers</a>
      <a href="#news">Enterprise</a>
      <a href="#news">Pricing</a>
      <div style={{ float: "right" }}>
      <div class="dropdown" >
        <button class="dropbtn">
          Help
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="#home">Get started for free</a>
        <a href="#home">Sign in</a>
      </div>
    </div>
  );
}

export default NavBar;
