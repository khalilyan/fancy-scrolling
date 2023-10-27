
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Garage(props) {
  const { nodes, materials } = useGLTF('models/garage/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.027}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Mat.1']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.glass} />
      </group>
    </group>
  )
}

useGLTF.preload('models/garage/scene.gltf')
