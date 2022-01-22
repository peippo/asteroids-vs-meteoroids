import { PresentationControls } from "@react-three/drei";
import BoardCell from "./BoardCell";
import { boardPositions } from "../utils";

const Board = () => {
	return (
		<PresentationControls
			global={true}
			polar={[-Infinity, Infinity]}
			azimuth={[-Infinity, Infinity]}
			config={{ mass: 1, tension: 150, friction: 30 }}
		>
			{boardPositions.map((position, index) => {
				return <BoardCell key={index} position={position} />;
			})}
		</PresentationControls>
	);
};

export default Board;
