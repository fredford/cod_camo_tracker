import React, { useState } from "react";

export default function TitleBar({ title, progress }) {
  const [status, setStatus] = useState(localStorage.getItem("hideCompleted") === "true");

  React.useEffect =
    (() => {
      localStorage.setItem("hideCompleted", !status);
    },
    [status]);

  const onChange = (e) => {
    setStatus(!status);
    localStorage.setItem("hideCompleted", !status);
  };

  return (
    <div className="card standard">
      <div className="row">
        <div className="col-6">
          <h1 className="no-padding">{title}</h1>
        </div>
        <div className="col-3 align-self-center">
          <div className="form-check">
            <input
              className="form-check-input checkbox-color"
              type="checkbox"
              checked={status}
              onChange={onChange}
              id="flexCheckDefault"
            />
            <label className="form-check-label">Hide completed</label>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <div className="no-margin">
            Progress
            <div className="progress">
              <div
                className="progress-bar default-fg"
                role="progressbar"
                style={{ width: progress }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <p className="no-margin fw-bold">{progress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
