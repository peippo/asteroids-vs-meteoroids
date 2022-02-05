import { useContext, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import { useLocation } from "wouter";
import {
	OPPONENT_LEFT,
	RESET_BOARD,
	SUBMIT_TURN,
	TURN_INFO,
	WINNER_FOUND,
} from "../constants";

const useBoard = () => {
	const [, setLocation] = useLocation();
	const socket = useContext(SocketContext);
	const {
		myId: [myId],
		isMyTurn: [isMyTurn, setIsMyTurn],
		currentGameId: [currentGameId],
		winner: [winner, setWinner],
		hasOpponentLeft: [, setHasOpponentLeft],
		cells: [cells, setCells],
		resetBoard: [resetBoard],
	} = useContext(StoreContext);

	const handleUnitClick = (index) => {
		if (!isMyTurn || winner) return;

		const newCells = [...cells];
		newCells[index] = myId;
		setCells(newCells);

		socket.emit(SUBMIT_TURN, {
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

		const resetBoardListener = () => {
			resetBoard();
		};

		const opponentLeftListener = () => {
			setHasOpponentLeft(true);
		};

		socket.on(TURN_INFO, turnInfoListener);
		socket.on(WINNER_FOUND, winnerListener);
		socket.on(RESET_BOARD, resetBoardListener);
		socket.on(OPPONENT_LEFT, opponentLeftListener);

		return () => {
			socket.off(TURN_INFO, turnInfoListener);
			socket.off(WINNER_FOUND, winnerListener);
			socket.off(RESET_BOARD, resetBoardListener);
			socket.off(OPPONENT_LEFT, opponentLeftListener);
		};
	}, [
		socket,
		myId,
		setIsMyTurn,
		setWinner,
		setHasOpponentLeft,
		resetBoard,
		setCells,
	]);

	return [cells, handleUnitClick];
};

export default useBoard;
