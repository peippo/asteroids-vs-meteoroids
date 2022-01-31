import { useContext, useEffect } from "react";
import { StoreContext } from "../../store";
import styled from "styled-components";
import { Link } from "wouter";
import Modal from "../Modal";

const StartScreen = () => {
	const {
		myId: [, setMyId],
		opponentId: [, setOpponentId],
		isHost: [, setIsHost],
		currentGameId: [, setCurrentGameId],
		winner: [, setWinner],
		opponentLeft: [, setOpponentLeft],
	} = useContext(StoreContext);

	// Reset game parameters
	useEffect(() => {
		setMyId(null);
		setOpponentId(null);
		setCurrentGameId(null);
		setIsHost(false);
		setWinner(null);
		setOpponentLeft(false);
	}, [
		setMyId,
		setOpponentId,
		setCurrentGameId,
		setIsHost,
		setWinner,
		setOpponentLeft,
	]);

	return (
		<Modal>
			<Logo src="/logo.png" alt="Asteroids vs. Meteoroids" />
			<Wrapper>
				<Fieldset>
					<Legend>Single player</Legend>
					<button disabled>Single player</button>
				</Fieldset>
				<Fieldset>
					<Legend>Multiplayer</Legend>
					<Link className="button" to={`/host`}>
						Host a game
					</Link>
					<Link className="button" to={`/join`}>
						Join a game
					</Link>
				</Fieldset>
			</Wrapper>
		</Modal>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	padding-top: 50px;

	@media (min-width: 800px) {
		flex-direction: row;
	}
`;

const Logo = styled.img`
	position: absolute;
	width: 80%;
	left: 50%;
	transform: translateX(-50%);
	bottom: calc(100% - 50px);
`;

const Fieldset = styled.fieldset`
	display: flex;
	align-self: flex-start;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	border-radius: 8px 8px 25px 8px;
	border-color: rgb(208 208 208 / 60%);
	padding: 1rem 1.5rem;

	@media (min-width: 800px) {
		flex-direction: row;
	}
`;

const Legend = styled.legend`
	text-align: left;
	font-size: 1.25rem;
	font-weight: var(--heading-font-weight);
	color: var(--color-white);
`;

export default StartScreen;
