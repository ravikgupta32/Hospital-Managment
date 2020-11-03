import React from "react";

import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="home_image">
        <img
          className="head_img"
          src="https://etimg.etb2bimg.com/thumb/72822826.cms?width=1000&height=480"
        />
      </div>
      <div className="body_text">
        <h1 className="intro_text">Welcome to our Hospital Website</h1>
      </div>
      <div className="index_button">
        <button className="btn">
          <a href="#">Book your Appointment</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
