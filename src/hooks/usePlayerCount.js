import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { PLAYERS_ONLINE_COUNT } from "../constants";

const usePlayerCount = () => {
	const socket = useContext(SocketContext);
	const [playerCount, setPlayerCount] = useState(1);

	useEffect(() => {
		if (!socket) return;

		const playersOnlineListener = (playerCount) => {
			setPlayerCount(playerCount);
		};

		socket.on(PLAYERS_ONLINE_COUNT, playersOnlineListener);

		return () => {
			socket.off(PLAYERS_ONLINE_COUNT, playersOnlineListener);
		};
	}, [socket, setPlayerCount]);

	return playerCount;
};

export default usePlayerCount;
