import styled from "styled-components";
import { Link } from "wouter";
import Modal from "../Modal";
import { ReactComponent as SnoozeIcon } from "../../icons/snooze-solid.svg";
import useConnectionStatus from "../../hooks/useConnectionStatus";

const StartScreen = () => {
	const isConnected = useConnectionStatus();

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
					<Link
						className={`${
							isConnected ? "button" : "button button--disabled"
						}`}
						to={`${isConnected ? "/host" : "/"}`}
					>
						Host a game
					</Link>
					<Link
						className={`${
							isConnected ? "button" : "button button--disabled"
						}`}
						to={`${isConnected ? "/join" : "/"}`}
					>
						Join a game
					</Link>
				</Fieldset>
			</Wrapper>
			{!isConnected && (
				<>
					<IconWrapper>
						<StyledSnoozeIcon />
						<ErrorText>Waking up the server, please wait...</ErrorText>
					</IconWrapper>
				</>
			)}
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

const ErrorText = styled.h2`
	color: var(--color-red);
	font-size: 1rem;
	margin: 0;
	text-transform: none;
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	margin: 2rem 0 0 0;
`;

const StyledSnoozeIcon = styled(SnoozeIcon)`
	width: 28px;
	color: var(--color-red);
`;

export default StartScreen;
