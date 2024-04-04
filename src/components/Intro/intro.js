import React from "react";
import "./intro.css";
import aws from "../../assects/awsSkillsimg.png";
import azure from "../../assects/azure Skillsimg.png";
import exchange from "../../assects/exchange Skillsimg.png";
import git from "../../assects/git Skillsimg.png";
import power from "../../assects/powershell Skillsimg.png";
import office from "../../assects/office Skillsimg.png";
import linux from "../../assects/linux Skillsimg.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Intro = () => {
  // const openPDF = () => {
  //   // Replace 'path_to_your_pdf' with the actual path to your PDF file
  //   const pdfPath = '/Users/casamigos/Documents/portfolio/src/assects/Ayodeji2024.pdf';
  //   window.open(pdfPath, '_blank');
  //   };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          {/* Text Animationa from react-type-animation  */}
          <TypeAnimation
            sequence={[
              "Hello", // Types 'One'
              1000, // Waits 1s
              "Welcome",
              2000,
              "Im Ayodeji",
              9000,
              () => {},
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block", color: "red" }}
          />
        </span>
        <span className="intotext">
          Focusing on Cloud Engineering,Web Development.{" "}
        </span>
        <h5 className="intropar">
          A IT services analyst is shifting towards web development, aiming to
          broaden skills and contribute more effectively to digital projects.
        </h5>

        <div className="btn_into">
          <div className="btn_into">
            <Link to="/contact">
              <button className="btn">Contact Me </button>
            </Link>
            <a
              href="../../../Public/Ayodeji2023.pdf"
              download="Ayodeji2023.pdf"
              style={{ textDecoration: "none" }}>
              <button className="btn">Download CV</button>
            </a>
          </div>
        </div>

        <div className="skillsImg">
          <img src={aws} alt="" />
          <img src={azure} alt="" />
          <img src={exchange} alt="" />
          <img src={git} alt="" />
          <img src={office} alt="" />
          <img src={linux} alt="" />
          <img src={power} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
