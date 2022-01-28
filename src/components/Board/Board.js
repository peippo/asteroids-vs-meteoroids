import { useContext, Fragment, useState, useEffect } from "react";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";
import { boardPositions, checkWinner, initialCells } from "../../utils";
import BoardGridCell from "./BoardGridCell";
import BoardUnit from "./BoardUnit";

const Board = () => {
	const socket = useContext(SocketContext);
	const {
		myId: [myId],
		isMyTurn: [isMyTurn, setIsMyTurn],
		currentGameId: [currentGameId],
	} = useContext(StoreContext);

	const [cells, setCells] = useState(initialCells);
	const [next, setNext] = useState("X");

	const hasWinner = checkWinner(cells);

	const handleUnitClick = (index) => {
		if (!isMyTurn) return;

		const newCells = [...cells];
		newCells[index] = next;

		setNext(next === "X" ? "O" : "X");
		setCells(newCells);

		socket.emit("sendTurn", {
			gameId: currentGameId,
			userId: myId,
			cells: newCells,
		});
	};

	useEffect(() => {
		if (!socket) return;

		const turnInfoListener = (data) => {
			setCells(data.cells);
			setIsMyTurn(myId === data.nextTurnId);
		};

		socket.on("turnInfo", turnInfoListener);

		return () => {
			socket.off("turnInfo", turnInfoListener);
		};
	}, [socket, myId, setIsMyTurn]);

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
				if (hasWinner && !type) return null;

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
