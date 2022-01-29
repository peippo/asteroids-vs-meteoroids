import styled from "styled-components";
import { Link } from "wouter";
import Modal from "../Modal";

const StartScreen = () => {
	return (
		<Modal>
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
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 800px) {
		flex-direction: row;
	}
`;

const Fieldset = styled.fieldset`
	display: flex;
	align-self: flex-start;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	border-radius: 8px;
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
