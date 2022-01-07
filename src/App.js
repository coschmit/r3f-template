import { Canvas } from "@react-three/fiber";
import CanvasScene from "./components/CanvasScene";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <CanvasScene />
      </Canvas>
    </>
  );
}

export default App;
