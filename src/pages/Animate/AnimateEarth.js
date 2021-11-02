import React from 'react';
import { Canvas ,useFrame} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";


function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        // console.log('index  angle, x, z ',index, angle, x, z);
        points.push(new THREE.Vector3(x, 0, z));
    }
    points.push(points[0]);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    // console.log('lineGeometry  ', lineGeometry);
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
        </line>
    );
}
export default function AnimateEarth({...props}) {
    let planet ={planet: {color:'#2962ff' ,xRadius: 8, zRadius:5, size:2}};
    return (<
        Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Sun />
        {props.anim == true ?
            <PlanetAnim {...planet}/>:
            <Planet  pozX={props.pozX}pozY={props.pozY}/>
        }
        
        <Lights />
        <OrbitControls />
    </Canvas>
    );
}
function Sun() {
    return (
        <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color="#E1DC59" />
        </mesh>
    );
}
function Planet() {
    return (
        <>
            <mesh position={[8, 1, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#2962ff" />
            </mesh>
            <Ecliptic xRadius={8} zRadius={5} />
        </>
    );
}


function PlanetAnim({ planet: { color, xRadius, zRadius, size } }) {
    const planetRef = React.useRef();
  useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      const x = xRadius * Math.sin(t);
      const z = zRadius * Math.cos(t);
    //   console.log(' x z ',x,z);
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    });
  return (
      <>
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <Ecliptic xRadius={xRadius} zRadius={zRadius} />
      </>
    );
  }
function Lights() {
    return (
        <>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
        </>
    );
}

