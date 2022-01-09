import React from "react";

import TitleBar from "../components/TitleBar";

export default function DarkAether() {
  var progress = "50%";
  return (
    <div>
      <TitleBar title="Dark Aether" progress={progress} />
    </div>
  );
}
