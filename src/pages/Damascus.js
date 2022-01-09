import React from "react";
import TitleBar from "../components/TitleBar";

export default function Damascus() {
  var progress = "50%";
  return (
    <div>
      <TitleBar title="Damascus" progress={progress} />
    </div>
  );
}
