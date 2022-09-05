import { Fragment, Suspense } from "react";
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
						<BoardGridCell position={position} />
					</Fragment>
				);
			})}
			{cells.map((type, index) => {
				return (
					<Fragment key={index}>
						<Suspense fallback={null}>
							<BoardUnit
								index={index}
								type={type}
								position={boardPositions[index]}
								handleUnitClick={handleUnitClick}
							/>
						</Suspense>
					</Fragment>
				);
			})}
		</>
	);
};

export default Board;
