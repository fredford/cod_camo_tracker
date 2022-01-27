import React from "react";

import Atomic from "./pages/Atomic";
import { GameProvider } from "./contexts/GameContext";

import Footer from "./components/layout/containers/Footer";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Atomic />
      </GameProvider>

      <Footer />
    </div>
  );
}

export default App;
