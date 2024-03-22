import React from "react";
import "./secondskills.css";
import { FaGitAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { TbCloudNetwork } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";

const SecondSkills = () => {
  return (
    <section id="skills__sec">
      <span className="skill__Title">What I do </span>
      <span className="skill__Desc">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint
        perferendis quia, tenetur enim ducimus dolor minima aliquid odit
        veritatis inventore possimus, harum, suscipit reiciendis sit molestias
        dicta. Perspiciatis, iusto!
      </span>
      <div className="skillBarContainer">
        <div className="skill__Bars">
          <div className="skill__bar">
            <FaLaptopCode className="skillBarImg" />
            <div className="skillBar__text">
              <h2>Programming Languages</h2>
              <p>PowerShell, HTML5, CSS3, JavaScript,ReactJS </p>
            </div>
          </div>
          <div className="skill__bar">
            <MdOutlineSecurity className="skillBarImg" />
            <div className="skillBar__text">
              <h2>Cybersecurity Awareness</h2>
              <p>
                Understanding of cybersecurity principles and best practices,
                including knowledge of common security threats, vulnerabilities,
                and risk mitigation strategies.
              </p>
            </div>
          </div>
          <div className="skill__bar">
            <FaGitAlt className="skillBarImg" />
            <div className="skillBar__text">
              <h2>Version Control:</h2>
              <p>
                Familiarity with version control tools like Git, including
                branching, merging, and collaborating with teams using platforms
                like GitHub.
              </p>
            </div>
          </div>
        </div>
        <div className="skill__Bars">
          <div className="skill__bar">
            <MdOutlineWeb className="skillBarImg" />
            <div className="skillBar__text">
              <h2>Web Dev Frameworks </h2>
              <p>
                Experience with popular frameworks like React.js for front-end
                development, and frameworks like Node.js{" "}
              </p>
            </div>
          </div>
          <div className="skill__bar">
            <FaNetworkWired className="skillBarImg" />
            <div className="skillBar__text">
              <h2>Network:</h2>
              <p>
                TCP/IP,DNS,DHCP also implemented and managed security systems,
                including Cisco Meraki, to ensure a secure and compliant IT
                environment.
              </p>
            </div>
          </div>
          <div className="skill__bar">
            <TbCloudNetwork className="skillBarImg" />
            <div className="skillBar__text">
              <h2>Cloud Platforms</h2>
              <p>
                Experience of provisioning and managing cloud infrastructure in
                Microsoft Azure & Amazon AWS platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSkills;
