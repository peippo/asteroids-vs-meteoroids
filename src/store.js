import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const [userId, setUserId] = useState();
	const [gameId, setGameId] = useState();

	const store = {
		userId: [userId, setUserId],
		gameId: [gameId, setGameId],
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
