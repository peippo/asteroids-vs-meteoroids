import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const [myId, setMyId] = useState(null);
	const [currentGameId, setCurrentGameId] = useState(null);
	const [isMyTurn, setIsMyTurn] = useState(false);

	const store = {
		myId: [myId, setMyId],
		currentGameId: [currentGameId, setCurrentGameId],
		isMyTurn: [isMyTurn, setIsMyTurn],
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
