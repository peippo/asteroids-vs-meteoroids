import styled from "styled-components";
import Modal from "../Modal";
import BackButton from "./BackButton";
import useHost from "../../hooks/useHost";

const Host = () => {
	const [currentGameId, hasPlayerJoined, handleReadyClick] = useHost();

	return (
		<Modal>
			<h1 className="styled-heading">Host a game</h1>
			{!hasPlayerJoined && (
				<>
					<Text>
						Ask a friend to join you with <strong>Game ID:</strong>
					</Text>
					<GameId>{currentGameId}</GameId>
				</>
			)}

			{hasPlayerJoined && (
				<>
					<Text>
						<strong>Someone joined!</strong> Ready?
					</Text>
					<Button onClick={handleReadyClick}>Start the game</Button>
				</>
			)}

			<BackButton />
		</Modal>
	);
};

const Text = styled.p`
	margin-bottom: 0;
`;

const GameId = styled.span`
	display: block;
	font-size: 2.5rem;
	color: var(--color-light-green);
`;

const Button = styled.button`
	margin-top: 2rem;
`;

export default Host;
