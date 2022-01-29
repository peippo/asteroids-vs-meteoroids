import { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../store";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useFrame, useThree } from "@react-three/fiber";

extend({ OrbitControls });

const Controls = () => {
	const {
		myId: [myId],
		opponentId: [opponentId],
		currentGameId: [currentGameId],
	} = useContext(StoreContext);
	const { camera, gl, invalidate } = useThree();
	const ref = useRef();

	const isInMenu = !myId || !opponentId || !currentGameId;

	useFrame(() => ref.current.update());
	useEffect(
		() => void ref.current.addEventListener("change", invalidate),
		[invalidate]
	);

	return (
		<orbitControls
			autoRotate={isInMenu}
			enabled={!isInMenu}
			ref={ref}
			enableDamping
			dampingFactor={0.03}
			enableZoom={false}
			enablePan={false}
			args={[camera, gl.domElement]}
		/>
	);
};

export default Controls;
