import styled from "styled-components";

const Modal = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	min-width: 400px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: 10;
	background: var(--hud-background);
	box-shadow: var(--hud-box-shadow), 0 20px 50px rgb(0 0 0 / 50%);
	border-radius: 10px;
	padding: 2rem 3rem;
	text-align: center;

	&:before,
	&:after {
		content: "";
		position: absolute;
		top: -10px;
		width: 100px;
		height: calc(100% + 20px);
	}

	&:before {
		left: -10px;
		border-left: 2px solid var(--color-green);
		border-radius: 20px 0 0 20px;
	}

	&:after {
		right: -10px;
		border-right: 2px solid var(--color-green);
		border-radius: 0 10px 10px 0;
	}
`;

export default Modal;
