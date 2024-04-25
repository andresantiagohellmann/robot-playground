import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/3d/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/3d/robot_playground.glb"
  );

  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Experiment"].play().paused = true;
  }, []);
  useFrame(
    () =>
      //@ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"].getClip().duration * scroll.offset) / 2)
  );

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
