import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasScene from "./components/CanvasScene";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <CanvasScene />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
