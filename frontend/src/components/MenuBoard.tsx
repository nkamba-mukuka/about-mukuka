import { useState } from "react";
import { Text } from "@react-three/drei";

interface MenuBoardProps {
  onSelect: (item: string) => void;
}

const menuItems = [
  { id: "about", label: "About Me", emoji: "👋" },
  { id: "skills", label: "Skills", emoji: "💻" },
  { id: "projects", label: "Projects", emoji: "🚀" },
  { id: "experience", label: "Experience", emoji: "💼" },
  { id: "education", label: "Education", emoji: "🎓" },
  { id: "interests", label: "Interests", emoji: "✨" },
  { id: "contact", label: "Contact", emoji: "📧" },
];

export default function MenuBoard({ onSelect }: MenuBoardProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <group position={[-3, 2, -2]} rotation={[0, Math.PI / 4, 0]}>
      {/* Menu Board Background */}
      <mesh>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#FFF8DC" />
      </mesh>

      {/* Menu Title */}
      <Text
        position={[0, 1.2, 0.1]}
        fontSize={0.2}
        color="#DDA0DD"
        anchorX="center"
        anchorY="middle"
      >
        Menu ☕
      </Text>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <group
          key={item.id}
          position={[0, 0.8 - index * 0.35, 0.1]}
          onPointerOver={() => setHovered(item.id)}
          onPointerOut={() => setHovered(null)}
          onClick={() => onSelect(item.id)}
        >
          <mesh>
            <boxGeometry args={[1.5, 0.25, 0.05]} />
            <meshStandardMaterial
              color={hovered === item.id ? "#FFB6C1" : "#FFD1DC"}
              emissive={hovered === item.id ? "#FFB6C1" : "#000000"}
              emissiveIntensity={hovered === item.id ? 0.3 : 0}
            />
          </mesh>
          <Text
            position={[0, 0, 0.05]}
            fontSize={0.1}
            color={hovered === item.id ? "#4B0082" : "#8B008B"}
            anchorX="center"
            anchorY="middle"
          >
            {item.emoji} {item.label}
          </Text>
        </group>
      ))}
    </group>
  );
}

