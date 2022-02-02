import styled from "styled-components";
import { Link } from "wouter";
import { ReactComponent as QuitIcon } from "../../icons/times-octagon-solid.svg";
import Tooltip from "../Tooltip";

const QuitButton = () => {
	return (
		<StyledLink className="button" to={`/`}>
			<StyledQuitIcon />
			<Tooltip>Quit game</Tooltip>
		</StyledLink>
	);
};

const StyledLink = styled(Link)`
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 1;
	padding: 0;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		span {
			transition-delay: 0.25s;
			width: auto;
			height: auto;
			clip: initial;
			opacity: 1;
			visibility: visible;
		}
	}
`;

const StyledQuitIcon = styled(QuitIcon)`
	width: 24px;
	color: var(--color-white);
	transition: color 0.25s;
`;

export default QuitButton;
