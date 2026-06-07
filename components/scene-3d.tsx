"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Environment } from "@react-three/drei"
import * as THREE from "three"

function FloatingPizza({
  position,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
}) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position} scale={scale}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.15, 32]} />
          <meshStandardMaterial color="#e8a54b" roughness={0.6} />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.08, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 0.05, 32]} />
          <meshStandardMaterial color="#f5d76e" roughness={0.4} />
        </mesh>

        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i * Math.PI) / 3) * 0.6,
              0.12,
              Math.sin((i * Math.PI) / 3) * 0.6,
            ]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.15, 0.15, 0.03, 16]} />
            <meshStandardMaterial color="#c0392b" roughness={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function GlowingSphere({
  position,
  color,
  size = 0.5,
}: {
  position: [number, number, number]
  color: string
  size?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField({ count = 500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }

    return positions
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
      points.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <primitive
          attach="attributes-position"
          object={new THREE.BufferAttribute(particlesPosition, 3)}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#f39c12"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function TechRing({
  position,
  scale = 1,
  color = "#f39c12",
}: {
  position: [number, number, number]
  scale?: number
  color?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <Torus ref={meshRef} args={[1 * scale, 0.02 * scale, 16, 100]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Torus>
    </Float>
  )
}

function DataCube({
  position,
  scale = 1,
}: {
  position: [number, number, number]
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
      <Box ref={meshRef} args={[0.5 * scale, 0.5 * scale, 0.5 * scale]} position={position}>
        <meshStandardMaterial
          color="#3498db"
          emissive="#3498db"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </Box>
    </Float>
  )
}

export function Scene3D({ slideIndex }: { slideIndex: number }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f39c12" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#e74c3c" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#f5d76e" />

        <ParticleField count={300} />

        {slideIndex === 0 && (
          <>
            <FloatingPizza position={[3, 0, 0]} scale={1.5} speed={1} />
            <GlowingSphere position={[-3, 1, -2]} color="#f39c12" size={0.4} />
            <GlowingSphere position={[-2, -1.5, -1]} color="#e74c3c" size={0.3} />
            <TechRing position={[0, 0, -3]} scale={2} />
          </>
        )}

        {slideIndex === 1 && (
          <>
            <GlowingSphere position={[-3, 0, 0]} color="#e74c3c" size={0.8} />
            <GlowingSphere position={[3, 1, -2]} color="#e74c3c" size={0.5} />
            <GlowingSphere position={[2, -1, -1]} color="#c0392b" size={0.4} />
            <TechRing position={[0, 0, -2]} scale={1.5} color="#e74c3c" />
          </>
        )}

        {slideIndex === 2 && (
          <>
            <FloatingPizza position={[0, 0, -2]} scale={1} speed={0.5} />
            <TechRing position={[-2, 1, -1]} scale={0.8} />
            <TechRing position={[2, -1, -1]} scale={0.8} color="#3498db" />
            <GlowingSphere position={[3, 2, -3]} color="#27ae60" size={0.3} />
          </>
        )}

        {slideIndex === 3 && (
          <>
            <DataCube position={[-3, 1, 0]} scale={1.5} />
            <DataCube position={[3, -1, 0]} scale={1} />
            <DataCube position={[0, 2, -2]} scale={0.8} />
            <TechRing position={[0, 0, -1]} scale={1.2} color="#3498db" />
            <TechRing position={[0, 0, -1.5]} scale={1.8} color="#9b59b6" />
          </>
        )}

        {slideIndex === 4 && (
          <>
            <DataCube position={[-2, 0, 0]} scale={1.2} />
            <TechRing position={[2, 0, 0]} scale={1} color="#27ae60" />
            <GlowingSphere position={[0, 2, -2]} color="#f39c12" size={0.5} />
            <ParticleField count={200} />
          </>
        )}

        {slideIndex === 5 && (
          <>
            <FloatingPizza position={[-3, 0, 0]} scale={0.8} speed={1.2} />
            <DataCube position={[3, 0, 0]} scale={1} />
            <TechRing position={[0, 0, -2]} scale={1.5} color="#9b59b6" />
            <GlowingSphere position={[0, 2, -1]} color="#3498db" size={0.4} />
          </>
        )}

        {slideIndex === 6 && (
          <>
            <GlowingSphere position={[0, 0, 0]} color="#27ae60" size={1} />
            <TechRing position={[0, 0, 0]} scale={2} color="#27ae60" />
            <TechRing position={[0, 0, 0]} scale={2.5} color="#2ecc71" />
          </>
        )}

        {slideIndex === 7 && (
          <>
            <FloatingPizza position={[-3, 1, 0]} scale={0.6} speed={0.8} />
            <FloatingPizza position={[3, -1, 0]} scale={0.6} speed={1.2} />
            <FloatingPizza position={[0, 0, -2]} scale={0.8} speed={1} />
            <TechRing position={[0, 0, -3]} scale={2} />
          </>
        )}

        {slideIndex === 8 && (
          <>
            <GlowingSphere position={[-2, 1, 0]} color="#f39c12" size={0.6} />
            <GlowingSphere position={[2, -1, 0]} color="#3498db" size={0.6} />
            <GlowingSphere position={[0, 0, -2]} color="#27ae60" size={0.8} />
            <TechRing position={[0, 0, -3]} scale={2.5} />
          </>
        )}

        {slideIndex === 9 && (
          <>
            <FloatingPizza position={[0, 0, 0]} scale={2} speed={0.3} />
            <TechRing position={[0, 0, 0]} scale={3} color="#f39c12" />
            <TechRing position={[0, 0, 0]} scale={3.5} color="#e74c3c" />
            <ParticleField count={500} />
          </>
        )}

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}