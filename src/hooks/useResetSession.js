import { useContext, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import { QUIT_GAME } from "../constants";

const useResetSession = () => {
	const socket = useContext(SocketContext);
	const {
		resetSession: [resetSession],
		currentGameId: [currentGameId],
	} = useContext(StoreContext);

	useEffect(() => {
		return () => {
			socket.emit(QUIT_GAME, currentGameId);
			resetSession();
		};
		// eslint-disable-next-line
	}, []);
};

export default useResetSession;
