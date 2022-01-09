import React from "react";
import TitleBar from "../components/TitleBar";

export default function DarkMatter() {
  var progress = "50%";
  return (
    <div>
      <TitleBar title="Dark Matter" progress={progress} />
    </div>
  );
}
