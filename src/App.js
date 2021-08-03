import React from "react";
import { Canvas } from "react-three-fiber";
import Controls from "./components/Controls";
import Scene from "./views/Scene";

function App() {
  return (
    <Canvas>
      <Scene />
      <Controls />
    </Canvas>
  );
}

export default App;
