import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const [myId, setMyId] = useState(null);
	const [opponentId, setOpponentId] = useState(null);
	const [currentGameId, setCurrentGameId] = useState(null);
	const [isHost, setIsHost] = useState(false);
	const [isMyTurn, setIsMyTurn] = useState(false);
	const [winner, setWinner] = useState(null);
	const [opponentLeft, setOpponentLeft] = useState(false);

	const store = {
		myId: [myId, setMyId],
		opponentId: [opponentId, setOpponentId],
		currentGameId: [currentGameId, setCurrentGameId],
		isHost: [isHost, setIsHost],
		isMyTurn: [isMyTurn, setIsMyTurn],
		winner: [winner, setWinner],
		opponentLeft: [opponentLeft, setOpponentLeft],
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
