import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";


function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }
    points.push(points[0]);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
        </line>
    );
}
export default function AnimateEarth({ ...props }) {
    let x, y;
    if (props.pozXy) {
        switch (props.pozXy.substring(0, 2)) {
            case '00':
                x = 0;
                y = 3;
                break;

            case '01':
                x = 3;
                y = 3;
                break;

            case '02':
                x = 5;
                y = 2;
                break;

            case '03':
                x = 7;
                y = 0;
                break;

            case '04':
                x = 6.5;
                y = -2.5;
                break;

            case '05':
                x = 4;
                y = -3.8;
                break;

            case '06':
                x = 0;
                y = -4.4;
                break;

            case '07':
                x = -4;
                y = -3.8;
                break;

            case '08':
                x = -6.5;
                y = -2.5;
                break;

            case '09':
                x = -7.5;
                y = 0;
                break;

            case '10':
                x = -5;
                y = 2;
                break;

            case '11':
                x = -3;
                y = 3;
                break;

            case '12':
                x = 0;
                y = 3;
                break;

            default:
                break;
        }
    }
    let planet = { planet: { color: '#2962ff', xRadius: 8, zRadius: 5, size: 2 } };
    return (<
        Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Sun />
        {props.anim == true ?
            <PlanetAnim {...planet} /> :
            <Planet x={x} y={y} />
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
function Planet(props) {
    return (
        <React.Fragment>
            <mesh position={[props.x, props.y, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#2962ff" />
            </mesh>
            <Ecliptic xRadius={8} zRadius={5} />
        </React.Fragment>
    );
}


function PlanetAnim({ planet: { color, xRadius, zRadius, size } }) {
    const planetRef = React.useRef();
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const x = xRadius * Math.sin(t);
        const z = zRadius * Math.cos(t);
        planetRef.current.position.x = x;
        planetRef.current.position.z = z;
    });
    return (
        <React.Fragment>
            <mesh ref={planetRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
        </React.Fragment>
    );
}
function Lights() {
    return (
        <React.Fragment>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
        </React.Fragment>
    );
}

