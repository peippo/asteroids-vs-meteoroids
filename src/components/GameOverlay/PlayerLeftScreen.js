import Modal from "../Modal";
import useQuitSession from "../../hooks/useQuitSession";

const GameEndScreen = () => {
	const quitSession = useQuitSession();

	return (
		<Modal>
			<h2 className="styled-heading">Your opponent left!</h2>
			<button onClick={() => quitSession()}>Back to home screen</button>
		</Modal>
	);
};

export default GameEndScreen;
