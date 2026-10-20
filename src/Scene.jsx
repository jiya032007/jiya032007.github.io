import { useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const views = {
  entrance: { pos: new THREE.Vector3(0, 2.5, 10), look: new THREE.Vector3(0, 1, 0) },
  tv: { pos: new THREE.Vector3(0, 1.6, 3.5), look: new THREE.Vector3(0, 1.4, -2) },
};

function Rig({ view }) {
  useFrame(({ camera }) => {
    camera.position.lerp(views[view].pos, 0.04);
    camera.lookAt(views[view].look);
  });
  return null;
}

function Fire() {
  useFrame(({ clock, scene }) => {
    const light = scene.getObjectByName("fireLight");
    if (light) light.intensity = 3 + Math.sin(clock.elapsedTime * 14) * 0.8 + Math.random() * 0.5;
  });
  return (
    <group position={[-4, 0.5, -3]}>
      <mesh>
        <coneGeometry args={[0.5, 1.2, 5]} />
        <meshStandardMaterial color="#ff7a1a" emissive="#ff4500" emissiveIntensity={2} />
      </mesh>
      <pointLight name="fireLight" color="#ff8c42" distance={12} />
    </group>
  );
}

function TV() {
  return (
    <group position={[0, 1.4, -2]}>
      <mesh>
        <boxGeometry args={[3.4, 2.4, 0.4]} />
        <meshStandardMaterial color="#3a1a10" />
      </mesh>
      <Html transform position={[0, 0, 0.21]} distanceFactor={1.6}>
        <div style={{ width: 380, height: 260, background: "#111", color: "#f5ebe0", padding: 12 }}>
          <h3 style={{ margin: 0 }}>VibeCheck</h3>
          <p>Project demo goes here</p>
        </div>
      </Html>
    </group>
  );
}

export default function Scene() {
  const [view, setView] = useState("entrance");

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Canvas camera={{ position: [0, 2.5, 10], fov: 60 }}>
        <color attach="background" args={["#2a0a12"]} />
        <ambientLight intensity={0.3} />
        <Rig view={view} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#5a3320" />
        </mesh>
        <mesh position={[0, 4, -5]}>
          <planeGeometry args={[20, 8]} />
          <meshStandardMaterial color="#7a4a2a" />
        </mesh>
        <Fire />
        <TV />
      </Canvas>

      <div style={{ position: "absolute", bottom: 30, width: "100%", textAlign: "center" }}>
        {view === "entrance" ? (
          <button onClick={() => setView("tv")}>Enter</button>
        ) : (
          <button onClick={() => setView("entrance")}>Back</button>
        )}
      </div>
    </div>
  );
}