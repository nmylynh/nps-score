import React from "react";

function NavBar() {
  const link = (text, link) => (
    <li>
      <a href={link}>{text}</a>
    </li>
  );

  return (
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
                  {link("Product 1", "#")}
                  {link("Product 2", "#")}
                  {link("Product 3", "#")}
                </ul>
              </li>
              {link("Customers", "#")}
              {link("Enterprise", "#")}
              {link("Pricing", "#")}
            </div>
            <div className="nav-right">
              <li>
                <a href="#!">
                  Help <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="nav-dropdown">
                  {link("Help 1", "#")}
                  {link("Help 2", "#")}
                  {link("Help 3", "#")}
                </ul>
              </li>
              {link("Get started for free", "#")}
              {link("Sign in", "#")}
            </div>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
