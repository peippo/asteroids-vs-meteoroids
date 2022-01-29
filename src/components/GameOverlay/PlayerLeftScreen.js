import Modal from "../Modal";
import { useLocation } from "wouter";

const GameEndScreen = () => {
	const [, setLocation] = useLocation();

	const handleClick = () => {
		setLocation(`/`);
	};

	return (
		<Modal>
			<h2 className="styled-heading">Your opponent left!</h2>
			<button onClick={handleClick}>Back to home screen</button>
		</Modal>
	);
};

export default GameEndScreen;
