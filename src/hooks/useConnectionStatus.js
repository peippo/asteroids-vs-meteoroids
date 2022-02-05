import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { CONNECTED } from "../constants";

const useConnectionStatus = () => {
	const socket = useContext(SocketContext);
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		setIsConnected(socket.connected);

		const connectedListener = () => {
			setIsConnected(socket.connected);
		};

		socket.on(CONNECTED, connectedListener);

		return () => {
			socket.off(CONNECTED, connectedListener);
		};
	}, [socket]);

	return isConnected;
};

export default useConnectionStatus;
