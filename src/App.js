import React from "react";

import Atomic from "./pages/Atomic";
import DMUltra from "./pages/DMUltra";
import { GameProvider } from "./contexts/GameContext";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Atomic />
      </GameProvider>
    </div>
  );
}

export default App;
