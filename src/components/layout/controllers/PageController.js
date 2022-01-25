import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function PageController({ total, count }) {
  var progress = Math.round((count / total) * 100 * 10) / 10;

  return (
    <div className="page-controller-container">
      <div className="page-controller__progressbar">
        <ProgressBar now={progress} label={`${progress}%`} />
      </div>

      <div className="row">
        <div className="col-4">
          <div className="page-controller">
            <div id="bar" />
            <h2>Category</h2>
            <div className="dropdown" id="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="page-controller">
            <div id="bar" />
            <h2>Completed</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
