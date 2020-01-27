import React from "react";

export default function Hero() {
  
  return (
    <>
      <div className="section section-hero hero-container">
        <div className="hero">
          <div className="container">
            <div className="cols">
              <div className="heading-wrapper">
                  <h1 className="hero-heading">
                    Calculate your NPS® (Net Promoter Score)
                  </h1>
                  <p>
                    Calculating your NPS score is as simple as tallying up your
                    responses and subtracting the percentage of detractors from
                    the percentage of promoters. The score is a whole number
                    that ranges from -100 to 100, and indicates customer
                    happiness with your brand experience.
                  </p>
                  <p>
                    Use the calculator below to calculate your NPS from your
                    survey responses.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
