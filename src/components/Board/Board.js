import { Fragment, useState } from "react";
import BoardGridCell from "./BoardGridCell";
import BoardUnit from "./BoardUnit";
import { boardPositions, initialCells } from "../../utils";

const Board = () => {
	const [cells, setCells] = useState(initialCells);
	const [next, setNext] = useState("X");

	const handleUnitClick = (index) => {
		const newCells = [...cells];
		newCells[index] = next;

		setNext(next === "X" ? "O" : "X");
		setCells(newCells);
	};

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
