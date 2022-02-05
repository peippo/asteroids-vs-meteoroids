import { createContext, useState } from "react";
import { initialCells } from "./utils";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const [myId, setMyId] = useState(null);
	const [opponentId, setOpponentId] = useState(null);
	const [currentGameId, setCurrentGameId] = useState(null);
	const [isHost, setIsHost] = useState(false);
	const [isMyTurn, setIsMyTurn] = useState(false);
	const [winner, setWinner] = useState(null);
	const [hasOpponentLeft, setHasOpponentLeft] = useState(false);
	const [cells, setCells] = useState(initialCells);

	const resetSession = () => {
		setMyId(null);
		setOpponentId(null);
		setCurrentGameId(null);
		setIsHost(false);
		setIsMyTurn(false);
		setWinner(null);
		setHasOpponentLeft(false);
		setCells(initialCells);
	};

	const resetBoard = () => {
		setIsMyTurn(false);
		setWinner(null);
		setCells(initialCells);
	};

	const store = {
		myId: [myId, setMyId],
		opponentId: [opponentId, setOpponentId],
		currentGameId: [currentGameId, setCurrentGameId],
		isHost: [isHost, setIsHost],
		isMyTurn: [isMyTurn, setIsMyTurn],
		winner: [winner, setWinner],
		hasOpponentLeft: [hasOpponentLeft, setHasOpponentLeft],
		cells: [cells, setCells],
		resetSession: [resetSession],
		resetBoard: [resetBoard],
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
