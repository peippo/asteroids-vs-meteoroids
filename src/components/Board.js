import { Fragment } from "react";
import { PresentationControls } from "@react-three/drei";
import BoardGridCell from "./BoardGridCell";
import BoardUnit from "./BoardUnit";
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
				return (
					<Fragment key={index}>
						<BoardGridCell position={position} />)
						<BoardUnit position={position} />)
					</Fragment>
				);
			})}
		</PresentationControls>
	);
};

export default Board;
