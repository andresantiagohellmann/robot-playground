import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import { useProgress, Html, ScrollControls } from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();

  return (
    <Html center className="text-white">
      {progress.toFixed(1)} % loaded
    </Html>
  );
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }}>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.2} pages={2}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
