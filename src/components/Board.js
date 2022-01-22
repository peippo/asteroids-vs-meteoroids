import { Fragment } from "react";
import BoardGridCell from "./BoardGridCell";
import BoardUnit from "./BoardUnit";
import { boardPositions } from "../utils";

const Board = () => {
	return (
		<>
			{boardPositions.map((position, index) => {
				return (
					<Fragment key={index}>
						<BoardGridCell position={position} />)
						<BoardUnit position={position} />)
					</Fragment>
				);
			})}
		</>
	);
};

export default Board;
