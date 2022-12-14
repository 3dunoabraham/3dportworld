import { useLayoutEffect, useRef, useState } from 'react'

import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber'

export default function(props)
{
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  // const [mycounter, setCount] = useState(0)
  const paramString = window.location.href.split('?')[1];
  const queryString = new URLSearchParams(paramString);
  // console.log(queryString.get("speed"))
  const theSpeed = queryString.get("speed")
  const mul = theSpeed != undefined ? theSpeed : 100
  // const mul = 

// for (let pair of queryString.entries()) {
//    console.log("Key is: " + pair[0]);
//    console.log("Value is: " + pair[1]);
// }


  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => {
    if (camera.fov == 75)
    {
      camera.position.z = 6
      camera.position.y = -0.5
      // console.log(camera.position)
      camera.fov = 100
      camera.updateProjectionMatrix()
    }


    const multiplier = mul
    const xStep = 0.001
    const yStep = 0.08
    const zStep = 0.1
    // console.log("asd")
    // console.log("asd", camera)
    // setCount(mycounter+1)
    // console.log(mycounter)
    camera.position.z -= zStep/multiplier
    if (camera.position.z < 0)
    {
      if (camera.position.y > -3.5)
      {
        camera.position.y -= yStep/multiplier * 2
      }
    } else {
      if (camera.position.z < 0.5)
        {} else {
          if (camera.position.y < 5.5)
          {
            camera.position.y += yStep/multiplier
          }
        }
    }

    camera.position.x += xStep/multiplier
    controls.current.update()
  });
  return (<>
      <orbitControls
        // autoRotate
        ref={controls}
        args={[camera, domElement]}
        enableZoom={true}
        enablePan={false}
        minDistance={4.2}
        maxDistance={32}

        />
      </>);
        // minPolarAngle={-Infinity} 
        // maxPolarAngle={Infinity} 
        // minAzimuthAngle={-Math.PI/2*0.9}
        // maxAzimuthAngle={Math.PI/2*0.9}
};