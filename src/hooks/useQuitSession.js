import { useContext } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import { QUIT_GAME } from "../constants";
import { useLocation } from "wouter";

const useQuitSession = () => {
	const socket = useContext(SocketContext);
	const {
		resetSession: [resetSession],
		currentGameId: [currentGameId],
	} = useContext(StoreContext);
	const [, setLocation] = useLocation();

	const quitSession = () => {
		socket.emit(QUIT_GAME, currentGameId);
		resetSession();
		setLocation("/");
	};

	return quitSession;
};

export default useQuitSession;
