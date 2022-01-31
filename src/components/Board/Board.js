import { Fragment } from "react";
import useBoard from "../../hooks/useBoard";
import { boardPositions } from "../../utils";
import BoardGridCell from "./BoardGridCell";
import BoardUnit from "./BoardUnit";

const Board = () => {
	const [cells, handleUnitClick] = useBoard();

	return (
		<>
			{boardPositions.map((position, index) => {
				return (
					<Fragment key={index}>
						<BoardGridCell position={position} />)
					</Fragment>
				);
			})}
			{cells.map((type, index) => {
				return (
					<Fragment key={index}>
						<BoardUnit
							index={index}
							type={type}
							position={boardPositions[index]}
							handleUnitClick={handleUnitClick}
						/>
						)
					</Fragment>
				);
			})}
		</>
	);
};

export default Board;
