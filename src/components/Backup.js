import mwlogo from "./assets/mwlogo.png";
import cwlogo from "./assets/cwlogo.png";
import vglogo from "./assets/vglogo.png";
import logo from "./assets/logo.png";

import React from "react";

export default function Backup() {
  return (
    <div>
      <div className="row shelf">
        <h1>
          {" "}
          <img src={logo} alt="logo" className="title-logo" />
          Camo Tracker
        </h1>
      </div>
      <div className="row">
        <div className="col stretch-card">
          <div className="card standard card-hover">
            <img src={mwlogo} alt="MW" className="logo center-block" />
          </div>
        </div>
        <div className="col stretch-card">
          <div className="card standard">
            <img src={cwlogo} alt="MW" className="logo center-block" />
          </div>
        </div>
        <div className="col stretch-card">
          <div className="card standard">
            <img src={vglogo} alt="Vanguard" className="logo center-block" />
          </div>
        </div>
      </div>
      <h2>Subheader</h2>
      <div className="container">
        <div className="row row-cols-6">
          <div className="col stretch-card">
            <div className="card standard">
              <h3>Card 1</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac magna
              leo. Aliquam luctus nulla eget laoreet tincidunt. Duis auctor dui sed
              ultricies auctor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis consectetur accumsan felis, non rutrum
              nibh rutrum at. In justo ipsum, euismod dapibus vulputate vel, sodales vel
              erat. Fusce ultricies faucibus lacinia. Donec imperdiet neque est, id
              dignissim diam maximus tincidunt. Cras elit eros, volutpat sed est at,
              condimentum rutrum quam.
            </div>
          </div>
          <div className="col stretch-card">
            <div className="card standard">
              <h3>Card 1</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac magna
              leo. Aliquam luctus nulla eget laoreet tincidunt. Duis auctor dui sed
              ultricies auctor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis consectetur accumsan felis, non rutrum
            </div>
          </div>
          <div className="col">
            <div className="card standard">
              <h3>Card 1</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac magna
              leo. Aliquam luctus nulla eget laoreet tincidunt. Duis auctor dui sed
              ultricies auctor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis consectetur accumsan felis, non rutrum
              nibh rutrum at. In justo ipsum, euismod dapibus vulputate vel, sodales vel
              erat. Fusce ultricies faucibus lacinia. Donec imperdiet neque est, id
              dignissim diam maximus tincidunt. Cras elit eros, volutpat sed est at,
              condimentum rutrum quam.
            </div>
          </div>
          <div className="col">
            <div className="card standard">
              <h3>Card 1</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac magna
              leo. Aliquam luctus nulla eget laoreet tincidunt. Duis auctor dui sed
              ultricies auctor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis consectetur accumsan felis, non rutrum
              nibh rutrum at. In justo ipsum, euismod dapibus vulputate vel, sodales vel
              erat. Fusce ultricies faucibus lacinia. Donec imperdiet neque est, id
              dignissim diam maximus tincidunt. Cras elit eros, volutpat sed est at,
              condimentum rutrum quam.
            </div>
          </div>
          <div className="col">
            <div className="card standard">
              <h3>Card 1</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac magna
              leo. Aliquam luctus nulla eget laoreet tincidunt. Duis auctor dui sed
              ultricies auctor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis consectetur accumsan felis, non rutrum
              nibh rutrum at. In justo ipsum, euismod dapibus vulputate vel, sodales vel
              erat. Fusce ultricies faucibus lacinia. Donec imperdiet neque est, id
              dignissim diam maximus tincidunt. Cras elit eros, volutpat sed est at,
              condimentum rutrum quam.
            </div>
          </div>
          <div className="col">
            <div className="card standard">
              <h3>Card 1</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac magna
              leo. Aliquam luctus nulla eget laoreet tincidunt. Duis auctor dui sed
              ultricies auctor. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis consectetur accumsan felis, non rutrum
              nibh rutrum at. In justo ipsum, euismod dapibus vulputate vel, sodales vel
              erat. Fusce ultricies faucibus lacinia. Donec imperdiet neque est, id
              dignissim diam maximus tincidunt. Cras elit eros, volutpat sed est at,
              condimentum rutrum quam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}