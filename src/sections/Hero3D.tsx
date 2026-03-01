import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedShape() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
        }
    })

    return (
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
            {/* Outer Geometric Wireframe */}
            <mesh ref={meshRef} scale={1.8}>
                <icosahedronGeometry args={[1, 1]} />
                <meshPhysicalMaterial
                    color="#4B999B"
                    metalness={0.9}
                    roughness={0.1}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Inner Glowing Core */}
            <Sphere args={[1.2, 32, 32]}>
                <MeshDistortMaterial
                    color="#4B999B"
                    emissive="#0F172A"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto mix-blend-lighten hidden md:block">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#4B999B" />
                <AnimatedShape />
                <Environment preset="night" />
            </Canvas>
        </div>
    )
}
