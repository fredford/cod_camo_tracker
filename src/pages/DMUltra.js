import React from "react";
import TitleBar from "../components/TitleBar";

export default function DMUltra() {
  var progress = "50%";
  return (
    <div>
      <TitleBar title="DM Ultra" progress={progress} />
    </div>
  );
}
