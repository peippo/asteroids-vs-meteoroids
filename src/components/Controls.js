import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useFrame, useThree } from "@react-three/fiber";

extend({ OrbitControls });

const Controls = () => {
	const { camera, gl, invalidate } = useThree();
	const ref = useRef();

	useFrame(() => ref.current.update());
	useEffect(
		() => void ref.current.addEventListener("change", invalidate),
		[invalidate]
	);

	return (
		<orbitControls
			ref={ref}
			enableDamping
			dampingFactor={0.03}
			enableZoom={false}
			args={[camera, gl.domElement]}
		/>
	);
};

export default Controls;
