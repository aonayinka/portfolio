import React from "react";
import "./whoami.css";
const WhoAmI = () => {
  return (
    <div className="about_container">
      <h1 className="background_text">Who Am i</h1>
      <div className="about_header">
        <h1>
          ABOUT <span>ME</span>{" "}
        </h1>
      </div>
      <div className="about_container_r">
        <div className="subHeader">
          <h3>
            More Than <span>5+</span> Years 5+ Technical Engineering Experience
          </h3>
        </div>
        <div className="about_paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
            omnis ad. Iusto dignissimos, corrupti reprehenderit fugiat optio
            pariatur nisi voluptates est, quo ducimus, saepe nihil et sunt dolor
            ea quaerat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
            omnis ad. Iusto dignissimos, corrupti reprehenderit fugiat optio
            pariatur nisi voluptates est, quo ducimus, saepe nihil et sunt dolor
            ea quaerat?
          </p>
        </div>
        
        <div className="about_lowerContainer">
          <div className="lowerContainer">
            <h2>Experience</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque autem amet perferendis blanditiis nulla quia expedita
            </p>
          </div>
          <div className="lowerContainer">
          <h2>Education</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque autem amet perferendis blanditiis nulla quia expedita
            </p>
          </div>
        </div>
        {/* <div className="about_button">
          <button className="btn">Lets Chat</button>
          <button className="btn">Questions</button>
        </div> */}
      </div>
    </div>
  );
};

export default WhoAmI;
