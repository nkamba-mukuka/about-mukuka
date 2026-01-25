import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import { Suspense } from "react";
import CoffeeCup from "./CoffeeCup";

interface SceneProps {
  currentResponse: string | null;
  onMenuSelect: (item: string) => void;
  isLoading: boolean;
}

export default function Scene({ currentResponse, onMenuSelect, isLoading }: SceneProps) {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh', pointerEvents: 'auto' }}
      gl={{ antialias: true, alpha: true }}
      shadows={false}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />

      {/* Lighting - Proper Illumination */}
      <ambientLight intensity={0.8} />
      <spotLight position={[5, 10, 10]} intensity={1.0} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />

      {/* Content */}
      <Suspense fallback={null}>

        {/* Floating 3D Group (Bottom Center) - Scaled Down */}
        <group position={[0, -2.2, 0.5]} scale={0.6}>
          {/* 3D Cash Register (Till) - Stylish Design with Contact Shadow */}
          <group position={[0, 0, 0]}>
            {/* Contact Shadow */}
            <mesh position={[0, -0.46, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.9, 32]} />
              <meshBasicMaterial color="#000000" opacity={0.2} transparent />
            </mesh>

            {/* Main Body - Curved */}
            <RoundedBox args={[1.4, 0.9, 1.1]} radius={0.15} smoothness={8}>
              <meshStandardMaterial
                color="#FFB6C1"
                metalness={0.3}
                roughness={0.4}
              />
            </RoundedBox>

            {/* Screen - Modern Flat Display */}
            <group position={[0, 0.65, 0.3]} rotation={[-0.15, 0, 0]}>
              <RoundedBox args={[1.1, 0.7, 0.05]} radius={0.05} smoothness={4}>
                <meshStandardMaterial
                  color="#1a1a1a"
                  metalness={0.8}
                  roughness={0.2}
                />
              </RoundedBox>
              {/* Screen Glow */}
              <mesh position={[0, 0, 0.03]}>
                <planeGeometry args={[1, 0.6]} />
                <meshBasicMaterial color="#4a9eff" opacity={0.3} transparent />
              </mesh>
            </group>

            {/* Keypad Area */}
            <group position={[0, 0.5, 0.6]} rotation={[-0.4, 0, 0]}>
              <RoundedBox args={[1.1, 0.5, 0.08]} radius={0.03} smoothness={4}>
                <meshStandardMaterial color="#FFC0CB" />
              </RoundedBox>
            </group>

            {/* Decorative Accent Strip */}
            <mesh position={[0, 0.2, 0.56]}>
              <boxGeometry args={[1.45, 0.08, 0.02]} />
              <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>

          {/* Coffee Cup Response (Slides in front of Till) */}
          <group position={[0, 0, 1.5]}>
            {currentResponse && (
              <CoffeeCup text={currentResponse} position={[0, 0, 0]} visible={true} />
            )}
            {isLoading && (
              <CoffeeCup text="Brewing... ☕" position={[0, 0, 0]} visible={true} />
            )}
          </group>
        </group>

      </Suspense>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
        minAzimuthAngle={-Math.PI / 10}
        maxAzimuthAngle={Math.PI / 10}
      />
    </Canvas>
  );
}
