import { useLayoutEffect, useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";

export default function(props)
{
  const { scene } = useGLTF('/text.glb')
  useLayoutEffect(() => scene.traverse(o => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])

  const [mycounter, setCount] = useState(0)
  const ref = useRef();

  // useFrame(({ mouse }) => {
  //    if (mouse.x > 0.33 && mouse.y > 0.33)
  //    {
  //     bigapi.velocity.set(0,(mouse.x+mouse.y)*0.5,0);
  //    } else {
  //     bigapi.velocity.set(0,0,0);
  //    }
  //    // console.log(mouse.y)
  //      // smallapi.rotation.set(0, mouse.x * 0.8,0);
  //      // smallapi.rotation.set(-mouse.y * 0.01, mouse.x * 0.8,0);
  //      // smallapi.rotation.set(0,0,0);
  //  });


  // useFrame(({ mouse }) => {
  //   if (!ref.current) {
  //     return;
  //   }
  //   setCount(mycounter+1)
  //   // console.log(mycounter)
  //   // camera.position.x = Math.sin(mycounter * 0.002 ) * 2

  //   ref.current.rotation.z = ( mouse.x * 0.25 )
  //   ref.current.rotation.x = 1.6-( mouse.y * 0.75 )
  // })

  return  <primitive ref={ref}
            
            onClick={() => {
              console.log(ref)
            }}
            position={[0,0.42,4.2]}
            scale={[0.05,0.05,0.05]}
            rotation={[1.6,0,0]}
            object={scene}
             {...props} 
          />
};