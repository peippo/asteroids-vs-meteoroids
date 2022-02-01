import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { SUBMIT_MESSAGE, NEW_MESSAGE } from "../constants";

const useChat = () => {
	const socket = useContext(SocketContext);
	const [messages, setMessages] = useState([]);

	const sendMessage = (message) => {
		socket.emit(SUBMIT_MESSAGE, message);
	};

	useEffect(() => {
		if (!socket) return;

		const receiveMessagesListener = (message) => {
			setMessages((messages) => {
				if (messages.length > 4) {
					messages.shift();
				}
				return [...messages, message];
			});
		};

		socket.on(NEW_MESSAGE, receiveMessagesListener);

		return () => {
			socket.off(NEW_MESSAGE, receiveMessagesListener);
		};
	}, [socket, setMessages]);

	return [messages, sendMessage];
};

export default useChat;
