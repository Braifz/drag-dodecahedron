import React, { useEffect, useRef, useState } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"
import { MathUtils } from "three";

const DraggableDodecahedron = () => {
    const colors = ["hotpink", "red", "blue", "green", "yellow"];
    const ref = useRef();
    const [hover, setHover] = useState(false);
    const [colorIdx, setColorIdx] = useState(0);
    const [position, setPosition] = useState([0, 0, 0]);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    useFrame(() => {
        if(hover){
            ref.current.rotation.z += 0.9
            ref.current.rotation.x += 0.9
            ref.current.rotation.y += 0.9
        }
        ref.current.rotation.z += 0.01
        ref.current.rotation.x += 0.01
    });
    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        setPosition([x / aspect, -y / aspect, z]);
    }, { pointerEvents: true });

    const randomInt = MathUtils.randInt(0,4)

    return (
        <mesh position={position} {...bind()}
            ref={ref}
            onClick={e => {
                if (colorIdx === 4) {
                    setColorIdx(0);
                } else {
                    setColorIdx(colorIdx+1);
                }
            }}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}>
            <dodecahedronBufferGeometry attach="geometry" />
            <meshStandardMaterial color={hover ? colors[randomInt] : 'black' } />
        </mesh>
    )
}

export default DraggableDodecahedron;