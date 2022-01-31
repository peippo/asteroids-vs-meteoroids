import styled from "styled-components";
import { Link } from "wouter";
import { ReactComponent as BackIcon } from "../../icons/chevron-left-solid.svg";

const BackButton = () => {
	return (
		<StyledLink className="button" to={`/`}>
			<StyledBackIcon />
			<span className="screen-reader-text">Back to home</span>
		</StyledLink>
	);
};

const StyledLink = styled(Link)`
	position: absolute;
	top: -8px;
	left: -2px;
	border-radius: 1000px;
	padding: 0;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		border-radius: 1000px;
	}
`;

const StyledBackIcon = styled(BackIcon)`
	width: 12px;
	height: 32px;
`;

export default BackButton;
