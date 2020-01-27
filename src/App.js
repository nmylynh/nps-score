import React from "react";
import "./App.css";
import NavBar from './components/nav'
import Hero from "./components/hero";
import Row from "./components/row";
import Footer from "./components/footer"


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="section section-bg section-ruled section-labeled label-container-outer">
        <div className="label-container-inner">
          <div className="label">NPS Calculator</div>
        </div>
        <div className="container container-nps">
          <div className="cols">
            <div className="wrapper">
              <div className="nps">

                <Row
                  row={1}
                  calculate="inputs"
                  header="Count the responses"
                  body="Add up the number of responses provided for each score."
                />
                <Row
                  row={2}
                  calculate="totals"
                  header="Group the responses"
                  body="Add up the total number of responses provided for each group."
                />
                <Row
                  row={3}
                  calculate="percentages"
                  header="Calculate your NPS"
                  body="Subtract the percentage of Detractors from the percentage of Promoters."
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
