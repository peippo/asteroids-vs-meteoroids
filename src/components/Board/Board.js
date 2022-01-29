import { useContext, Fragment, useState, useEffect } from "react";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";
import { boardPositions, initialCells } from "../../utils";
import BoardGridCell from "./BoardGridCell";
import BoardUnit from "./BoardUnit";
import { useLocation } from "wouter";

const Board = () => {
	const [, setLocation] = useLocation();
	const socket = useContext(SocketContext);
	const {
		myId: [myId],
		isMyTurn: [isMyTurn, setIsMyTurn],
		currentGameId: [currentGameId],
		winner: [winner, setWinner],
		opponentLeft: [, setOpponentLeft],
	} = useContext(StoreContext);

	const [cells, setCells] = useState(initialCells);

	const handleUnitClick = (index) => {
		if (!isMyTurn || winner) return;

		const newCells = [...cells];
		newCells[index] = myId;
		setCells(newCells);

		socket.emit("sendTurn", {
			gameId: currentGameId,
			userId: myId,
			cells: newCells,
		});
	};

	useEffect(() => {
		if (!currentGameId) {
			setLocation(`/`);
		}
	}, [currentGameId, setLocation]);

	useEffect(() => {
		if (!socket) return;

		const turnInfoListener = (data) => {
			setCells(data.cells);
			setIsMyTurn(myId === data.nextTurnId);
		};

		const winnerListener = ({ winnerId }) => {
			setWinner(winnerId);
		};

		const resetGameListener = () => {
			setOpponentLeft(null);
			setWinner(null);
		};

		const opponentLeftListener = () => {
			setOpponentLeft(true);
		};

		socket.on("turnInfo", turnInfoListener);
		socket.on("winnerFound", winnerListener);
		socket.on("resetGame", resetGameListener);
		socket.on("opponentLeft", opponentLeftListener);

		return () => {
			socket.off("turnInfo", turnInfoListener);
			socket.off("winnerFound", winnerListener);
			socket.off("resetGame", resetGameListener);
			socket.off("opponentLeft", opponentLeftListener);
		};
	}, [socket, myId, setIsMyTurn, setWinner]);

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
