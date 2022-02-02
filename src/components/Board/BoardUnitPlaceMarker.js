import { useState, useRef, Suspense, useContext } from "react";
import { useTexture } from "@react-three/drei";
import { StoreContext } from "../../store";

const BoardUnitPlaceMarker = ({ index, position, handleUnitClick }) => {
	const ref = useRef();
	const [isHovered, setIsHovered] = useState(false);
	const texture = useTexture("/plus-icon.png");
	const {
		isMyTurn: [isMyTurn],
	} = useContext(StoreContext);

	const handlePointerOver = (event) => {
		event.stopPropagation();
		setIsHovered(true);
	};

	const handlePointerOut = (event) => {
		event.stopPropagation();
		setIsHovered(false);
	};

	return (
		<Suspense fallback={null}>
			<mesh
				ref={ref}
				position={position}
				onClick={(event) => {
					event.stopPropagation();
					handleUnitClick(index);
				}}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial visible={false} />
			</mesh>
			{isHovered && isMyTurn && (
				<sprite position={position} scale={[0.2, 0.2, 0.2]}>
					<spriteMaterial map={texture} />
				</sprite>
			)}
		</Suspense>
	);
};

export default BoardUnitPlaceMarker;
