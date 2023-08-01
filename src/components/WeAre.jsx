import React from "react";
import "./weare.css"; // Import the CSS file with the updated styles

const WeAre = () => {
  return (
    <div className="core-values-container bgClr">
      <div className="core-values-heading">
        <h2 className="textClrWhite">We Are</h2>
      </div>
      <div className="core-values-content">
        <div className="card-div">
          <h3 className="heading">Collaborative</h3>
          <p >
            Our customers come first. In the spirit of true creativity and
            innovation, we value our differences. We treat every idea and
            opinion with the respect it deserves.
          </p>
        </div>
        <div className="card-div">
          <h3 className="heading">Passionate</h3>
          <p>
            Excellence is our goal. We are here to create the best solution for
            your unique challenge, and we won't rest until we achieve that.
          </p>
        </div>
        <div className="card-div">
          <h3 className="heading">Resilient</h3>
          <p>
            We’re tech experts, but we don't have the final word on everything.
            We listen to our clients and admit our limits. We tackle every
            challenge, knowing that when our clients win, we win.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
