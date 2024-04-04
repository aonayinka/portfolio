import React from "react";
import "./progectPage.css";
import VitaminImg from "../../assects/VitaminShop.png"

const ProgectPage = () => {
  return (
    <div className="pp_container">
      <h1 className="background_text">Show & Tell</h1>
      <div className="pp_container_right">
        <h1>Projects</h1>
        <p>
          <span>
            These projects are experimental and educational steps I am taking to
            improve as a developer and engineer.
          </span>
        </p>
        <p>
          This project page is a complete portfolio of my ongoing work, which
          includes website design and the setup of an AWS EC2 environment. You
          can find detailed updates on the latest progress and the challenges I
          face while working on these projects on my Blog page. Whether you are
          a fellow developer or a potential client, this page will showcase all
          that I can do.
        </p>
      </div>
      <div className="pp_container_left">
        <div class="card">
          <div class="card__img">
          </div>
          <div class="card__title">Cameron Williamson</div>
          <div class="card__subtitle">Web Development</div>
          <div class="card__wrapper">
            <button class="card__btn">GitHub</button>
            <button class="card__btn card__btn-solid">Demo</button>
          </div>
        </div>
        <div class="card">
          <div class="card__img">
          <img src={VitaminImg} alt="" />
          </div>
          <div class="card__title">Vitamin Shop</div>
          <div class="card__subtitle">Web Development</div>
          <div class="card__wrapper">
            <a
              href="https://github.com/aonayinka/newVitayminshop"
              target="_blank"
              rel="noopener noreferrer">
              <button class="card__btn">GitHub</button>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer">
              <button class="card__btn card__btn-solid">Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgectPage;
