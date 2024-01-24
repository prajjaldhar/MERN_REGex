import React from "react";
import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="main-leftside">
        <div className="main-l-text">
          <h1>All-in-One travel app</h1>
        </div>
        <div className="main-l-text">
          <p>
            With a user-friendly interface, our app consolidates all your travel
            needs in one place, offering a convenient and efficient solution for
            planning and managing your journeys.
          </p>
        </div>
        <div className="main-l-img-container">
          <div className="main-l-img">
            <a>
              <img
                src="https://webdesignmastery.github.io/Travel_Hub_13-02-24/assets/google-play.jpg"
                alt="googleplay"
              />
            </a>
          </div>
          <div className="main-l-img">
            <a>
              <img
                src="https://webdesignmastery.github.io/Travel_Hub_13-02-24/assets/app-store.jpg"
                alt="applestore"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="main-rightside">
        <img
          src="https://webdesignmastery.github.io/Travel_Hub_13-02-24/assets/header.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainContainer;
