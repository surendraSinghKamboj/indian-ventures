import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="bgClr why-choose-us-container">
      <div className="why-choose-us-heading">
        <h2 className="textClrWhite">Why Choose Indian Ventures</h2>
      </div>
      <div className="why-choose-us-content">
        <div className="card-main">
          <h3>Technical Partner</h3>
          <p>
            We’re guessing you’re not a tech expert. Don’t worry. We’ll put
            together a winning team of engineers to build your App or Website so
            you can focus on growing your business.
          </p>
        </div>
        <div className="card-main">
          <h3>Loyal to Your Vision</h3>
          <p>
            This is your product. Your Mona Lisa. Your magnum opus. We’ll show
            the world what happens when software developers and visionaries work
            together.
          </p>
        </div>
        <div className="card-main">
          <h3>You Drive the Budget</h3>
          <p>
            You have a budget. We get it.
            We’ll align our goals and meet regularly to ensure we stay on target.
            You set the monthly budget, and scale your spending up or down at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
